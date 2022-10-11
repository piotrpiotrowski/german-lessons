import {CsvFinderService} from './csv-finder.service';
import {WordDefinition} from './word-definition.model';
import {Language} from '../language/language';

export class WordDefinitionsFactory {

  private readonly map: Map<string, WordDefinition>;

  constructor(private csvContent: string, private multiplier: (wordDefinition: WordDefinition) => WordDefinition[] = wordDefinition => [wordDefinition]) {
    this.map = new CsvFinderService<WordDefinition>(csvContent, columns => this.mapToWordDefinition(columns))
      .find(() => true)
      .reduce((accumulator, wordDefinition) => this.appendToMap(accumulator, wordDefinition), new Map<string, WordDefinition>());
  }

  private appendToMap(accumulator: Map<string, WordDefinition>, wordDefinition: WordDefinition): Map<string, WordDefinition> {
    this.multiplier(wordDefinition).forEach(definition => accumulator.set(definition.value, definition));
    return accumulator;
  }

  create = () => this.map;

  private mapToWordDefinition(columns: string[]): WordDefinition {
    return new WordDefinition(columns[0].toLowerCase(), new Map<Language, string>([[Language.ENGLISH, columns[1]], [Language.POLISH, columns[2]], [Language.GERMAN, columns[3]]]), +columns[4]);
  }
}
