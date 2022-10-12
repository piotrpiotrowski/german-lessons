import {Injectable, Predicate} from '@angular/core';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {FinderService} from '../shared/finder.service';
import {SentenceMapper} from '../shared/sentence.mapper';
import {WordDefinitionsFactory} from '../shared/word-definitions.factory';
import {prepositions} from './prepositions.datasource';
import {MatrixFinderService} from '../shared/matrix-finder.service';
import {SentencesLoaderService} from '../shared/sentences-loader.service';
import {CsvParser} from '../shared/csv-parser';

@Injectable({
  providedIn: 'root'
})
export class PrepositionsSentenceService implements FinderService<Sentence> {

  private finderService: FinderService<Sentence>;

  constructor(private sentenceMapper: SentenceMapper, private sentencesLoaderService: SentencesLoaderService) {
    const wordDefinitionsFactory = new WordDefinitionsFactory(prepositions);
    const wordsDefinitions = wordDefinitionsFactory.create();
    this.finderService = new MatrixFinderService<Sentence>(
      new CsvParser().parseToMatrix(this.sentencesLoaderService.load()),
      columns => this.sentenceMapper.map(columns, wordsDefinitions)
    );
  }

  find = (predicate: Predicate<Sentence>) => this.finderService.find(predicate);
}
