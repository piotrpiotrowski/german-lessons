import {TestBed} from '@angular/core/testing';

import {switchMap, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {PresentSimpleSentenceService} from './present-simple-sentence.service';
import {from, of} from 'rxjs';
import {SentencesLoaderService} from '../shared/sentences-loader.service';

describe('PresentSimpleSentenceService', () => {
  let sentencesLoaderService: any;


  beforeEach(() => {
    sentencesLoaderService = jasmine.createSpyObj('SentencesLoaderService', ['load']);

    TestBed.configureTestingModule({
      providers: [
        {provide: SentencesLoaderService, useValue: sentencesLoaderService},
        PresentSimpleSentenceService
      ]
    });
  });

  it('should take two from list', (done) => {
  // given
    sentencesLoaderService.load.and.returnValue(of(
      `1CH.1.14;Die Satz ist Deutsch vater vater;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english fater father;Zdanie po polsku ojciec
1CH.1.14;Die Satz lasse Deutsch land;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english country;Zdanie po polsku kraj`
    ));

    //and
    const service = TestBed.inject(PresentSimpleSentenceService);

    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(take(2))
      .pipe(toArray())
      .subscribe({
        // then
        next: sentences => {
          expect(sentences.length).toEqual(2);
          expect(sentences[0].getInfinitiveTranslations(Language.ENGLISH)).toEqual('be');
          expect(sentences[1].getInfinitiveTranslations(Language.ENGLISH)).toEqual('let');
          done();
        },
        error: done.fail
      });
  });
});
