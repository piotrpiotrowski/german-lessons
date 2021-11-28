import {Injectable, Predicate} from '@angular/core';
import {Language} from '../language/language';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {rawPresentSimpleSentences} from './present-simple-sentence.datasource';
import {SentencePartsMapper} from '../shared/sentence-parts.mapper';

@Injectable({
  providedIn: 'root'
})
export class PresentSimpleSentenceService implements FinderService<Sentence> {

  private finderService = new CsvFinderService<Sentence>(rawPresentSimpleSentences, columns => this.mapToSentence(columns));

  constructor(private sentencePartsMapper: SentencePartsMapper) {
  }

  find = (predicate: Predicate<Sentence>) => this.finderService.find(predicate);

  private mapToSentence = (columns: string[]) =>
    new Sentence(
      this.sentencePartsMapper.map([columns[0]], columns[2]),
      new Map<Language, string>([[Language.ENGLISH, columns[8]], [Language.POLISH, columns[9]], [Language.GERMAN, columns[10]]]),
      +columns[11],
      new Map<Language, string>([[Language.GERMAN, columns[3]], [Language.POLISH, columns[4]], [Language.ENGLISH, columns[5]]]),
      new Map<Language, string>([[Language.GERMAN, columns[2]], [Language.POLISH, columns[13]], [Language.ENGLISH, columns[12]]]),
      columns[1].substring(0, 3)
    )
}
