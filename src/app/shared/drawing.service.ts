import {Injectable} from '@angular/core';
import {WeightedModel} from './weighted-model';

@Injectable({
  providedIn: 'root'
})
export class DrawingService {

  private readonly numberOfEntries = 5;

  public filterBySmallestWeight<T>(models: T[], weightExtractor: (model: T) => number): T[] {
    if (models.length <= this.numberOfEntries) {
      return models;
    }
    return models.map(model => new WeightedModel<T>(weightExtractor(model), model))
      .reduce((minimums, entry) => this.updateMinimums(minimums, entry), this.initAccumulator<T>(this.numberOfEntries))
      .map(value => value.model);
  }

  public filterRandomEntries<T>(models: T[]): T[] {
    return this.createListOfRandomIndexes(Math.min(this.numberOfEntries, models.length), models.length)
      .map(i => models[i]);
  }

  public filterByRandomValueOfAttribute<T>(models: T[], attributeExtractor: (model: T) => string): T[] {
    const extractedAttributesValues = Array.from(new Set(models.map(value => attributeExtractor(value))));
    const selectedAttributeValue = extractedAttributesValues[this.drawRandomNumber(extractedAttributesValues.length)];
    return models.filter(value => attributeExtractor(value) === selectedAttributeValue);
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

  private updateMinimums<T>(minimums: Array<WeightedModel<T>>, entry: WeightedModel<T>): Array<WeightedModel<T>> {
    const index = minimums.findIndex(min => min.weight > entry.weight);
    if (index === -1) {
      return minimums;
    }
    minimums[index] = entry;
    return minimums;
  }

  private initAccumulator<T>(length: number) {
    return Array.from(Array(length).keys())
      .map(() => new WeightedModel(2, {} as T));
  }
}
