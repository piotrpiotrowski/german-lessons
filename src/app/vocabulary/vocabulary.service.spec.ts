import {TestBed} from '@angular/core/testing';

import {VocabularyService} from './vocabulary.service';
import {switchMap, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {from, of} from 'rxjs';
import {VocabularyLoaderService} from '../shared/vocabulary-loader.service';

describe('VocabularyService', () => {
  let vocabularyLoaderService: any;

  beforeEach(() => {
    vocabularyLoaderService = jasmine.createSpyObj('VocabularyLoaderService', ['load']);

    TestBed.configureTestingModule({
      providers: [
        VocabularyService,
        {provide: VocabularyLoaderService, useValue: vocabularyLoaderService}
      ],

    });
  });

  it('should take two from list', (done) => {
    // given
    vocabularyLoaderService.load.and.returnValue(of(
      `bake\tpiec\tbacken\t3
command\trozkazywać\tbefehlen\t4`
    ));

    //and
    const service = TestBed.inject(VocabularyService);

    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(take(2))
      .pipe(toArray())
      .subscribe({
        // then
        next: verbs => {
          expect(verbs.length).toEqual(2);
          expect(verbs[0].getTranslation(Language.ENGLISH)).toEqual('bake');
          expect(verbs[1].getTranslation(Language.ENGLISH)).toEqual('command');
          done();
        },
        error: done.fail
      });
  });
});
