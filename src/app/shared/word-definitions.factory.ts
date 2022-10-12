import {WordDefinition} from './word-definition.model';
import {Language} from '../language/language';
import {from, Observable, reduce, shareReplay, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';

export class WordDefinitionsFactory {

  private readonly definitions: Observable<Map<string, WordDefinition>>;

  constructor(private matrix: Observable<string[][]>,
              private multiplier: (wordDefinition: WordDefinition) => WordDefinition[] = wordDefinition => [wordDefinition]) {
    this.definitions = this.matrix.pipe(switchMap(from))
      .pipe(map(columns => this.mapToWordDefinition(columns)))
      .pipe(reduce((accumulator, wordDefinition) => this.appendToMap(accumulator, wordDefinition), new Map<string, WordDefinition>()))
      .pipe(shareReplay(1));
  }

  create = () => this.definitions;

  private appendToMap(accumulator: Map<string, WordDefinition>, wordDefinition: WordDefinition): Map<string, WordDefinition> {
    this.multiplier(wordDefinition).forEach(definition => accumulator.set(definition.value, definition));
    return accumulator;
  }

  private mapToWordDefinition(columns: string[]): WordDefinition {
    return new WordDefinition(
      columns[0].toLowerCase(),
      new Map<Language, string>([[Language.ENGLISH, columns[1]], [Language.POLISH, columns[2]], [Language.GERMAN, columns[3]]]),
      +columns[4]);
  }
}
