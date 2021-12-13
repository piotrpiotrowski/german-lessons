import {Language} from '../language/language';

export class WordDefinition {
  constructor(public value: string, public infinitiveTranslations: Map<Language, string>, public classification: number) {
  }
}
