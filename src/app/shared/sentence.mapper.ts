import {Injectable} from '@angular/core';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {Language} from '../language/language';
import {SentencePartsMapper} from './sentence-parts.mapper';
import {WordsIndexesExtractorService} from './words-indexes-extractor.service';
import {WordDefinition} from './word-definition.model';
import {WordIndex} from './word-index.model';

@Injectable({
  providedIn: 'root'
})
export class SentenceMapper {

  constructor(private sentencePartsMapper: SentencePartsMapper, private wordsIndexesExtractorService: WordsIndexesExtractorService) {
  }

  public map = (columns: string[], dictionary: Map<string, WordDefinition> = new Map<string, WordDefinition>([])) => {
    const words = this.findHiddenWordsIndexes(columns[1], dictionary);
    if (words.length === 0) {
      return null;
    }
    const hiddenWordsIndexes = words.map(tuple => tuple[0]);
    const hiddenWordsDefinitions = words.map(tuple => tuple[1]);
    const parts = columns[0].split('.');
    return new Sentence(
      this.sentencePartsMapper.map(hiddenWordsIndexes, columns[1]),
      this.buildInfinitiveTranslations(hiddenWordsDefinitions),
      this.calculateClassification(hiddenWordsDefinitions),
      new Map<Language, string>([[Language.GERMAN, columns[2]], [Language.POLISH, columns[3]], [Language.ENGLISH, columns[4]]]),
      new Map<Language, string>([[Language.GERMAN, columns[1]], [Language.POLISH, columns[6]], [Language.ENGLISH, columns[5]]]),
      parts[0],
      +parts[1],
      +parts[2]
    );
  };

  private buildInfinitiveTranslations(wordDefinitions: WordDefinition[]): Map<Language, string> {
    const english = wordDefinitions.map(value => value.infinitiveTranslations.get(Language.ENGLISH)).join(' | ');
    const polish = wordDefinitions.map(value => value.infinitiveTranslations.get(Language.POLISH)).join(' | ');
    const german = wordDefinitions.map(value => value.infinitiveTranslations.get(Language.GERMAN)).join(' | ');
    return new Map<Language, string>([[Language.ENGLISH, english], [Language.POLISH, polish], [Language.GERMAN, german]]);
  }

  private findHiddenWordsIndexes = (text: string, dictionary: Map<string, WordDefinition>): [WordIndex, WordDefinition][] =>
    this.wordsIndexesExtractorService.extract(text)
      .filter(wordIndex => dictionary.get(wordIndex.value.toLowerCase()))
      .map(wordIndex => [wordIndex, dictionary.get(wordIndex.value.toLowerCase())!]);

  private calculateClassification(wordDefinitions: WordDefinition[]): number {
    const sum = wordDefinitions.reduce((accumulator, wordDefinition) => accumulator + wordDefinition.classification, 0);
    const avg = (sum / wordDefinitions.length) || 0;
    return Math.round(avg);
  }
}
