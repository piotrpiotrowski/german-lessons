import {Language} from '../../language/language';
import {SentencePart} from './part.model';

export class Sentence {
  constructor(public parts: SentencePart[],
              private infinitiveTranslations: Map<Language, string>,
              public classification: number,
              public referencesTranslations: Map<Language, string>,
              public textTranslations: Map<Language, string>,
              public bookId: string,
              public addressId: number) {
  }

  getInfinitiveTranslations = (currentLanguage: Language) => this.infinitiveTranslations.get(currentLanguage);
  getReferencesTranslations = (currentLanguage: Language) => this.referencesTranslations.get(currentLanguage);
  getTextTranslations = (currentLanguage: Language) => this.textTranslations.get(currentLanguage);
}
