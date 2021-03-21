export class TrainingRowModel {
  constructor(public englishTranslation: string,
              public polishTranslation: string,
              public answers: string[],
              public classification: number) {
  }
}
