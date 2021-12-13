import {Injectable, Predicate} from '@angular/core';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {FinderService} from '../shared/finder.service';
import {SentenceMapper} from '../shared/sentence.mapper';
import {WordDefinitionsFactory} from '../shared/word-definitions.factory';
import {rawPrepositions} from './prepositions.datasource';
import {InmemoryFinderService} from '../shared/inmemory-finder.service';
import {sentences} from '../shared/sentences.datasource';

@Injectable({
  providedIn: 'root'
})
export class PrepositionsSentenceService implements FinderService<Sentence> {

  private finderService: FinderService<Sentence>;
  private wordDefinitionsFactory: WordDefinitionsFactory;

  constructor(private sentenceMapper: SentenceMapper) {
    this.wordDefinitionsFactory = new WordDefinitionsFactory(rawPrepositions);
    this.finderService = new InmemoryFinderService<Sentence>(sentences, columns => this.sentenceMapper.map(columns, this.wordDefinitionsFactory.create()));
  }

  find = (predicate: Predicate<Sentence>) => this.finderService.find(predicate);
}
