import {TestBed} from '@angular/core/testing';

import {switchMap, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {Sentence} from '../sentence-complement/sentence-row/sentence.model';
import {PossessivePronounsSentenceService} from './possessive-pronouns-sentence.service';
import {from, of} from 'rxjs';
import {SentencesLoaderService} from '../shared/sentences-loader.service';

describe('PossessivePronounsSentenceService', () => {
  let sentencesLoaderService: any;


  beforeEach(() => {
    sentencesLoaderService = jasmine.createSpyObj('SentencesLoaderService', ['load']);

    TestBed.configureTestingModule({
      providers: [
        {provide: SentencesLoaderService, useValue: sentencesLoaderService},
        PossessivePronounsSentenceService
      ]
    });
  });

  it('should take two from list', (done) => {
// given
    sentencesLoaderService.load.and.returnValue(of(
      `1CH.1.14;Die Satz seine Deutsch vater;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english fater father;Zdanie po polsku ojciec
1CH.1.14;Die Satz ihr Deutsch land;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english country;Zdanie po polsku kraj`
    ));

    //and
    const service = TestBed.inject(PossessivePronounsSentenceService);

    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(take(2))
      .pipe(toArray())
      .subscribe({
        // then
        next: (sentences: Sentence[]) => {
          expect(sentences.length).toEqual(2);
          expect(sentences[0].getInfinitiveTranslations(Language.ENGLISH)).toEqual('his (f)');
          expect(sentences[1].getInfinitiveTranslations(Language.ENGLISH)).toEqual('theirs (m)');
          done();
        },
        error: done.fail
      });
  });
});
