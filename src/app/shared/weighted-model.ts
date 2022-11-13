export class WeightedModel<T> {
  constructor(public weight: number, public model: T) {
  }
}
