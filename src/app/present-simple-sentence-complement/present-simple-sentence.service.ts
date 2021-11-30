import {Injectable, Predicate} from '@angular/core';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {rawPresentSimpleSentences} from './present-simple-sentence.datasource';
import {SentenceMapper} from '../shared/sentence.mapper';

@Injectable({
  providedIn: 'root'
})
export class PresentSimpleSentenceService implements FinderService<Sentence> {

  private finderService = new CsvFinderService<Sentence>(rawPresentSimpleSentences, columns => this.sentenceMapper.map(columns));

  constructor(private sentenceMapper: SentenceMapper) {
  }

  find = (predicate: Predicate<Sentence>) => this.finderService.find(predicate);
}
