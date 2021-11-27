import {SentencePartType} from './sentence-part-type.enum';

export class SentencePart {
  constructor(public value: string,
              public type: SentencePartType) {
  }
}
