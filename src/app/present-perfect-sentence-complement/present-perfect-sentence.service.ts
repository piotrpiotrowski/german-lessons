import {Injectable, Predicate} from '@angular/core';
import {rawPresentPerfectSentences} from './present-perfect-sentence.datasource';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {SentenceMapper} from '../shared/sentence.mapper';

@Injectable({
  providedIn: 'root'
})
export class PresentPerfectSentenceService implements FinderService<Sentence> {

  private finderService = new CsvFinderService<Sentence>(rawPresentPerfectSentences, columns => this.sentenceMapper.map(columns));

  constructor(private sentenceMapper: SentenceMapper) {
  }

  find = (predicate: Predicate<Sentence>) => this.finderService.find(predicate);
}
