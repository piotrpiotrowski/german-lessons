import {Answer} from './answer.model';
import {Language} from '../language/language';

export class TrainingRowModel {
  constructor(private translations: Map<Language, string>,
              public classification: number,
              public answers: Answer[]) {
  }

  getTranslation = (language: Language): string => this.translations.get(language)!;
  getNumberOfAnswers = () => this.answers.length;

  calculateWeight = (localStorage: Storage) => this.answers.reduce((sum, answer) => sum + +(localStorage.getItem(answer.value) || '0'), 0) / this.answers.length;
}
