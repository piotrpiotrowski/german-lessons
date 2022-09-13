import {Answer} from './answer.model';
import {Language} from '../language/language';

export class TrainingRowModel {
  constructor(private translations: Map<Language, string>,
              public classification: number,
              public answers: Answer[]) {
  }

  getTranslation = (language: Language): string => this.translations.get(language)!;
  getNumberOfAnswers = () => this.answers.length;
}
