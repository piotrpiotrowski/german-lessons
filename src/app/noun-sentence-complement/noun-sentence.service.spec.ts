import {TestBed} from '@angular/core/testing';

import {filter, map, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {NounSentenceService} from './noun-sentence.service';
import {SentencePart} from '../sentence-complement/sentence-row/part.model';

describe('NounSentenceService', () => {
  let service: NounSentenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NounSentenceService);
  });

  it('should take two from list', () => {
    // given
    let sentences: Sentence[] = null;

    // when
    service.find(() => true)
      .pipe(take(2))
      .pipe(toArray())
      .subscribe(
        value => sentences = value,
        fail);

    // then
    expect(sentences.length).toEqual(2);
    expect(sentences[0].getInfinitiveTranslations(Language.ENGLISH)).toEqual('god');
    expect(sentences[1].getInfinitiveTranslations(Language.ENGLISH)).toEqual('earth,soil');
  });

  it('should find case sensitive hidden word in text', () => {
    // given
    let sentences: string[][] = null;

    // when
    service.find(() => true)
      .pipe(map(sentence => [sentence.parts[1].value, extractValue(sentence.parts[0]) + extractValue(sentence.parts[1]) + extractValue(sentence.parts[2])]))
      .pipe(filter(pair => !pair[1].includes(pair[0])))
      .pipe(toArray())
      .subscribe(
        value => sentences = value,
        fail);

    // then
    expect(sentences).toEqual([]);
  });

  function extractValue(sentencePart: SentencePart): string {
    return sentencePart ? sentencePart.value : '';
  }
});
