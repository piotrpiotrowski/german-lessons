import {Injectable} from '@angular/core';
import {WordDefinition} from '../shared/word-definition.model';

@Injectable({
  providedIn: 'root'
})
export class AdjectiveMultiplierService {

  private endings = ['m', 'n', 'r', 's'];
  private eEndings = ['', ...this.endings];
  private enEndings = ['', 'e', ...this.endings.map(l => 'e' + l)];

  multiply = (wordDefinition: WordDefinition) => this.resolveEndings(wordDefinition)
    .map(ending => new WordDefinition(wordDefinition.value + ending, wordDefinition.infinitiveTranslations, wordDefinition.classification));

  private resolveEndings(wordDefinition: WordDefinition): string[] {
    const lastLetter = wordDefinition.value.charAt(wordDefinition.value.length - 1);
    return lastLetter === 'e' ? this.eEndings : this.enEndings;
  }
}
