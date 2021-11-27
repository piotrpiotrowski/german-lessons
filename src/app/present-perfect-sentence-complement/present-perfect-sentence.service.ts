import {Injectable, Predicate} from '@angular/core';
import {Language} from '../language/language';
import {rawPresentPerfectSentences} from './present-perfect-sentence.datasource';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {SentencePartsMapper} from '../shared/sentence-parts.mapper';

@Injectable({
  providedIn: 'root'
})
export class PresentPerfectSentenceService implements FinderService<Sentence> {

  private finderService = new CsvFinderService<Sentence>(rawPresentPerfectSentences, columns => this.mapToSentence(columns));

  constructor(private sentencePartsMapper: SentencePartsMapper) {
  }

  find = (predicate: Predicate<Sentence>) => this.finderService.find(predicate);

  private mapToSentence = (columns: string[]) =>
    new Sentence(
      this.sentencePartsMapper.map(columns[0], columns[2]),
      new Map<Language, string>([[Language.ENGLISH, columns[6]], [Language.POLISH, columns[7]], [Language.GERMAN, columns[8]]]),
      +columns[9],
      new Map<Language, string>([[Language.GERMAN, columns[3]], [Language.POLISH, columns[4]], [Language.ENGLISH, columns[5]]]),
      new Map<Language, string>([[Language.GERMAN, columns[2]], [Language.POLISH, columns[11]], [Language.ENGLISH, columns[10]]]),
      columns[1].substring(0, 3)
    )
}
