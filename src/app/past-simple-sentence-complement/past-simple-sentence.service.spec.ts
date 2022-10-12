import {TestBed} from '@angular/core/testing';

import {switchMap, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {PastSimpleSentenceService} from './past-simple-sentence.service';
import {from, of} from 'rxjs';
import {SentencesLoaderService} from '../shared/sentences-loader.service';
import {NounSentenceService} from '../noun-sentence-complement/noun-sentence.service';

describe('PastSimpleSentenceService', () => {
  let sentencesLoaderService: any;

  beforeEach(() => {
    sentencesLoaderService = jasmine.createSpyObj('SentencesLoaderService', ['load']);

    TestBed.configureTestingModule({
      providers: [
        {provide: SentencesLoaderService, useValue: sentencesLoaderService},
        PastSimpleSentenceService
      ]
    });
  });

  it('should take two from list', (done) => {
    // given
    sentencesLoaderService.load.and.returnValue(of(
      `1CH.1.14;Die Satz in Deutsch vater vater;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english fater father;Zdanie po polsku ojciec
1CH.1.14;Die Satz in Deutsch land;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english country;Zdanie po polsku kraj`
    ));

    //and
    const service = TestBed.inject(NounSentenceService);

    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(take(2))
      .pipe(toArray())
      .subscribe({
        // then
        next: sentences => {
          expect(sentences.length).toEqual(2);
          expect(sentences[0].getInfinitiveTranslations(Language.ENGLISH)).toEqual('be | load');
          expect(sentences[1].getInfinitiveTranslations(Language.ENGLISH)).toEqual('be');
          done();
        },
        error: done.fail
      });
  });
});
