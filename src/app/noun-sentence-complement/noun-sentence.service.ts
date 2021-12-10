import {Injectable, Predicate} from '@angular/core';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {rawNounSentences} from './noun-sentence.datasource';
import {SentenceMapper} from '../shared/sentence.mapper';

@Injectable({
  providedIn: 'root'
})
export class NounSentenceService implements FinderService<Sentence> {

  private finderService = new CsvFinderService<Sentence>(rawNounSentences, columns => this.map(columns));

  constructor(private sentenceMapper: SentenceMapper) {
  }

  find = (predicate: Predicate<Sentence>) => this.finderService.find(predicate);

  private map(columns: string[]): Sentence {
    columns[8] = columns[8].replace(new RegExp('die |der |das |den |dem '), '');
    return this.sentenceMapper.map(columns);
  }
}
