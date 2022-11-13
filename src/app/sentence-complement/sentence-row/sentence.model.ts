import {Language} from '../../language/language';
import {SentencePart} from './part.model';
import {SentencePartType} from './sentence-part-type.enum';

export class Sentence {
  constructor(public parts: SentencePart[],
              private infinitiveTranslations: Map<Language, string>,
              public classification: number,
              public referencesTranslations: Map<Language, string>,
              public textTranslations: Map<Language, string>,
              public bookId: string,
              public chapterNumer: number,
              public verseNumer: number) {
  }

  getInfinitiveTranslations = (currentLanguage: Language) => this.infinitiveTranslations.get(currentLanguage)!;
  getReferencesTranslations = (currentLanguage: Language) => this.referencesTranslations.get(currentLanguage)!;
  getTextTranslations = (currentLanguage: Language) => this.textTranslations.get(currentLanguage)!;

  calculateWeight(localStorage: Storage): number {
    let riddles = this.parts.filter(part => part.type === SentencePartType.RIDDLE);
    return riddles.reduce((sum, answer) => sum + +(localStorage.getItem(answer.value) || '0'), 0) / riddles.length;
  }
}
