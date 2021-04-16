import {Answer} from './answer.model';

export class TrainingRowModel {
  constructor(public englishTranslation: string,
              public polishTranslation: string,
              public classification: number,
              public answers: Answer[]) {
  }

  getAnswer = (index: number) => this.answers[index].value;
  getLabel = (index: number) => this.answers[index].name;
}
