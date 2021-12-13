import {Injectable} from '@angular/core';
import {WordIndex} from './word-index.model';

@Injectable({
  providedIn: 'root'
})
export class WordsIndexesExtractorService {

  private pattern = new RegExp('[\\wäÄöÖüÜß]+', 'g');
  private articles = ['der', 'Der', 'das', 'Das', 'die', 'Die', 'den', 'Den', 'dem', 'Dem', 'des', 'Des', 'ein', 'Ein', 'eine', 'Eine', 'einen', 'Einen', 'einer', 'Einer', 'einen', 'Einen', 'einem', 'Einem', 'eines', 'Eines'];

  public extract(text: string): WordIndex[] {
    const words = [];
    let article = '';
    let articleIndex = -1;
    for (let match = this.pattern.exec(text); match !== null; match = this.pattern.exec(text)) {
      if (this.articles.includes(match[0])) {
        article = match[0] + ' ';
        articleIndex = match.index;
      } else {
        words.push(new WordIndex(article + match[0], articleIndex === -1 ? match.index : articleIndex));
        article = '';
        articleIndex = -1;
      }
    }
    return words;
  }
}
