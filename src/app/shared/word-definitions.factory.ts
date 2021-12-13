import {CsvFinderService} from './csv-finder.service';
import {WordDefinition} from './word-definition.model';
import {Language} from '../language/language';

export class WordDefinitionsFactory {

  private readonly map: Map<string, WordDefinition>;

  constructor(private csvContent: string) {
    this.map = new CsvFinderService<WordDefinition>(csvContent, columns => this.mapToWordDefinition(columns))
      .find((_) => true)
      .reduce((accumulator, wordDefinition) => accumulator.set(wordDefinition.value, wordDefinition), new Map<string, WordDefinition>());
  }

  create = () => this.map;

  private mapToWordDefinition(columns: string[]): WordDefinition {
    return new WordDefinition(columns[0].toLowerCase(), new Map<Language, string>([[Language.ENGLISH, columns[1]], [Language.POLISH, columns[2]], [Language.GERMAN, columns[3]]]), +columns[4]);
  }
}
