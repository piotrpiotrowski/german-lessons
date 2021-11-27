import {SentencePart} from '../sentence-complement/sentence-row/part.model';
import {SentencePartType} from '../sentence-complement/sentence-row/sentence-part-type.enum';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentencePartsMapper {

  public map(hiddenWord: string, text: string): SentencePart[] {
    const prefix = text.substring(0, text.indexOf(hiddenWord));
    const suffix = text.substring(prefix.length + hiddenWord.length);
    return [
      new SentencePart(prefix, SentencePartType.TEXT),
      new SentencePart(hiddenWord, SentencePartType.RIDDLE),
      new SentencePart(suffix, SentencePartType.TEXT)
    ];
  }

}
