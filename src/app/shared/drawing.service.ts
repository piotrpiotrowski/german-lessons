import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  public filterRandomEntries<T>(numberOfEntries: number, models: T[]): T[] {
    return this.createListOfRandomIndexes(Math.min(numberOfEntries, models.length), models.length)
      .map(i => models[i]);
  }

  public filterByRandomValueOfAttribute<T>(models: T[], attributeExtractor: (model: T) => string): T[] {
    const extractedAttributesValues = Array.from(new Set(models.map(value => attributeExtractor(value))));
    const selectedAttributeValue = extractedAttributesValues[this.drawRandomNumber(extractedAttributesValues.length)];
    return models.filter(value => attributeExtractor(value) === selectedAttributeValue);
  }

  private createListOfRandomIndexes<T>(listSize: number, maxValue: number): number[] {
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
