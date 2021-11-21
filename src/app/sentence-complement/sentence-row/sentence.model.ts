import {Language} from '../../language/language';

export class Sentence {
  constructor(public hiddenVerb: string,
              private infinitiveTranslations: Map<Language, string>,
              public classification: number,
              public text: string,
              public referencesTranslations: Map<Language, string>,
              public textTranslations: Map<Language, string>,
              public prefix: string = text.substring(0, text.indexOf(hiddenVerb)),
              public suffix: string = text.substring(prefix.length + hiddenVerb.length)) {
  }

  getInfinitiveTranslations = (currentLanguage: Language) => this.infinitiveTranslations.get(currentLanguage);
  getReferencesTranslations = (currentLanguage: Language) => this.referencesTranslations.get(currentLanguage);
  getTextTranslations = (currentLanguage: Language) => this.textTranslations.get(currentLanguage);
}
