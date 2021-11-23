export class DrawingService<T> {

  constructor(private firstLetterOfTranslationExtractor: (model: T) => string) {
  }

  public filterByRandomLetter(verbs: T[]): T[] {
    const firstLettersOfTranslations = Array.from(new Set(verbs.map(value => this.firstLetterOfTranslationExtractor(value))));
    const randomFirstLetter = firstLettersOfTranslations[this.drawRandomNumber(firstLettersOfTranslations.length)];
    return verbs.filter(value => this.firstLetterOfTranslationExtractor(value) === randomFirstLetter);
  }

  public filterRandomVerbs(numberOfVerbs: number, verbs: T[]): T[] {
    return this.createListOfRandomIndexes(Math.min(numberOfVerbs, verbs.length), verbs.length)
      .map(i => verbs[i]);
  }

  private createListOfRandomIndexes(listSize: number, maxValue: number): number[] {
    const randomIndexes = new Set<number>();
    while (randomIndexes.size !== listSize) {
      randomIndexes.add(this.drawRandomNumber(maxValue));
    }
    return Array.from(randomIndexes.values());
  }

  private drawRandomNumber(length: number): number {
    return Math.floor(Math.random() * length);
  }
}
