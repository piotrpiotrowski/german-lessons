import {TestBed} from '@angular/core/testing';

import {switchMap, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {AdjectiveSentenceService} from './adjective-sentence.service';
import {from, of} from 'rxjs';
import {SentencesLoaderService} from '../shared/sentences-loader.service';

describe('AdjectiveSentenceService', () => {
  let sentencesLoaderService: any;

  beforeEach(() => {
    sentencesLoaderService = jasmine.createSpyObj('SentencesLoaderService', ['load']);

    TestBed.configureTestingModule({
      providers: [
        AdjectiveSentenceService,
        {provide: SentencesLoaderService, useValue: sentencesLoaderService}
      ]
    });
  });

  it('should take two from list', (done) => {
    // given
    sentencesLoaderService.load.and.returnValue(of(
      `1CH.1.14;Die Satz in Deutsch viel;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english many, a lot;Zdanie po polsku wiele
1CH.1.14;Die Satz in Deutsch böse untreu;1 Chr 1.14;1 Krn 1.14;1 Chr 1.14;The sentence in english evil unfaithful;Zdanie po polsku zły niewierność`
    ));

    //and
    const service = TestBed.inject(AdjectiveSentenceService);

    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(take(2))
      .pipe(toArray())
      .subscribe({
        // then
        next: sentences => {
          expect(sentences.length).toEqual(2);
          expect(sentences[0].getInfinitiveTranslations(Language.ENGLISH)).toEqual('many, a lot');
          expect(sentences[1].getInfinitiveTranslations(Language.ENGLISH)).toEqual('spiteful, evil, angry | unfaithful');
          done();
        },
        error: done.fail
      });
  });
});
