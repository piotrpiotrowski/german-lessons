import {TestBed} from '@angular/core/testing';

import {filter, map, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {PresentSimpleSentenceService} from './present-simple-sentence.service';

describe('PresentSimpleSentenceService', () => {
  let service: PresentSimpleSentenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentSimpleSentenceService);
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
    expect(sentences[0].getInfinitiveTranslations(Language.ENGLISH)).toEqual('bake');
    expect(sentences[1].getInfinitiveTranslations(Language.ENGLISH)).toEqual('bake');
  });

  it('should find case sensitive hidden verb in text', () => {
    // given
    let sentences: string[][] = null;

    // when
    service.find(() => true)
      .pipe(map(sentence => [sentence.parts[1].value, sentence.parts[0].value + sentence.parts[1].value + sentence.parts[2].value]))
      .pipe(filter(pair => !pair[1].includes(pair[0])))
      .pipe(toArray())
      .subscribe(
        value => sentences = value,
        fail);

    // then
    expect(sentences).toEqual([]);
  });
});
