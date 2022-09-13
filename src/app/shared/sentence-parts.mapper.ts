import {SentencePart} from '../sentence-complement/sentence-row/part.model';
import {SentencePartType} from '../sentence-complement/sentence-row/sentence-part-type.enum';
import {Injectable} from '@angular/core';
import {WordIndex} from './word-index.model';

@Injectable({
  providedIn: 'root'
})
export class SentencePartsMapper {

  public map(hiddenWords: WordIndex[], text: string): SentencePart[] {
    const result: SentencePart[] = [];
    let startOfSection = 0;
    for (const hiddenWord of hiddenWords) {
      const beforeWord = text.substring(startOfSection, hiddenWord.index);
      if (beforeWord !== '') {
        result.push(new SentencePart(beforeWord, SentencePartType.TEXT));
      }
      result.push(new SentencePart(text.substring(hiddenWord.index, hiddenWord.calculateEndIndex()), SentencePartType.RIDDLE));
      startOfSection = hiddenWord.calculateEndIndex();
    }
    const afterLastWord = text.substring(startOfSection);
    if (afterLastWord !== '') {
      result.push(new SentencePart(afterLastWord, SentencePartType.TEXT));
    }
    return result;
  }
}
