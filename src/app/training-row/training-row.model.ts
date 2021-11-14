import {Answer} from './answer.model';
import {Language} from '../language/language';

export class TrainingRowModel {
  constructor(private translations: Map<Language, string>,
              public classification: number,
              private answers: Answer[]) {
  }

  getAnswer = (index: number) => this.answers[index].value;
  getLabel = (index: number) => this.answers[index].name;
  getTranslation = (language: Language) => this.translations.get(language);
}
