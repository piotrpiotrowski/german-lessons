import {SentencePart} from '../sentence-complement/sentence-row/part.model';
import {SentencePartType} from '../sentence-complement/sentence-row/sentence-part-type.enum';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentencePartsMapper {

  public map(hiddenWords: string[], text: string): SentencePart[] {
    const result = [];
    let startOfSection = 0;
    const indexes = this.findIndexesOfHiddenWords(hiddenWords, text);
    for (let i = 0; i < indexes.length; i++) {
      const beforeWord = text.substring(startOfSection, indexes[i]);
      if (beforeWord !== '') {
        result.push(new SentencePart(beforeWord, SentencePartType.TEXT));
      }
      result.push(new SentencePart(text.substring(indexes[i], indexes[i] + hiddenWords[i].length), SentencePartType.RIDDLE));
      startOfSection = indexes[i] + hiddenWords[i].length;
    }
    const afterLastWord = text.substring(startOfSection);
    if (afterLastWord !== '') {
      result.push(new SentencePart(afterLastWord, SentencePartType.TEXT));
    }
    return result;
  }

  private findIndexesOfHiddenWords(hiddenWords: string[], text: string): number[] {
    return hiddenWords.map(hiddenWord => text.indexOf(hiddenWord));
  }
}
