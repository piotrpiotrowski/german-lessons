import {TestBed} from '@angular/core/testing';

import {filter, map, mergeMap, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {PrepositionsSentenceService} from './prepositions-sentence.service';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {from, Observable} from 'rxjs';
import {SentencePartType} from '../sentence-complement/sentence-row/sentence-part-type.enum';

describe('PrepositionsSentenceService', () => {
  let service: PrepositionsSentenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrepositionsSentenceService);
  });

  it('should take two from list', () => {
    // given
    let sentences: Sentence[] = null;

    // when
    from(service.find(() => true))
      .pipe(take(2))
      .pipe(toArray())
      .subscribe(
        value => sentences = value,
        fail);

    // then
    expect(sentences.length).toEqual(2);
    expect(sentences[0].getInfinitiveTranslations(Language.ENGLISH)).toEqual('from');
    expect(sentences[1].getInfinitiveTranslations(Language.ENGLISH)).toEqual('from | from');
  });

  it('should find sentences with only single part', () => {
    // given
    let sentences: string[] = null;

    // when
    from(service.find(() => true))
      .pipe(filter(sentence => sentence.parts.length === 1))
      .pipe(map(sentence => sentence.bookId + ' ' + sentence.chapterNumer + '.' + sentence.verseNumer))
      .pipe(toArray())
      .subscribe(
        value => sentences = value,
        fail);

    // then
    expect(sentences).toEqual([]);
  });

  it('should find case sensitive hidden word in text', () => {
    // given
    const findRiddlesNotExistingInText = (sentence: Sentence): Observable<string[]> => {
      const riddles = sentence.parts.filter(sentencePart => sentencePart.type === SentencePartType.RIDDLE)
        .map(sentencePart => sentencePart.value);
      const text = sentence.getTextTranslations(Language.GERMAN);
      const missingRiddlesInText = riddles.filter(riddle => !text.includes(riddle))
        .map(riddle => [riddle, sentence.getReferencesTranslations(Language.ENGLISH)]);
      return from(missingRiddlesInText);
    };

    let sentences: string[][] = null;

    // when
    from(service.find(() => true))
      .pipe(mergeMap(sentence => findRiddlesNotExistingInText(sentence)))
      .pipe(filter(pair => !pair[1].includes(pair[0])))
      .pipe(toArray())
      .subscribe(
        value => sentences = value,
        fail);

    // then
    expect(sentences).toEqual([]);
  });
});
