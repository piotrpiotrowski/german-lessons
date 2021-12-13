export class WordIndex {
  constructor(public value: string, public index: number) {
  }

  public calculateEndIndex(): number {
    return this.index + this.value.length;
  }
}
