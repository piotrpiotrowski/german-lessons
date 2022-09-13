import {TestBed} from '@angular/core/testing';

import {NounsFormsService} from './nouns-forms.service';
import {count, reduce, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {from} from 'rxjs';

describe('NounsFormsService', () => {
  let service: NounsFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NounsFormsService);
  });

  it('should take two from list', (done: DoneFn) => {
    // when
    from(service.find(() => true))
      .pipe(take(2))
      .pipe(toArray())
      .subscribe({
        // then
        next: verbs => {
          expect(verbs.length).toEqual(2);
          expect(verbs[0].getTranslation(Language.ENGLISH)).toEqual('dinner');
          expect(verbs[1].getTranslation(Language.ENGLISH)).toEqual('adventure');
          done();
        },
        error: done.fail
      });
  });

  it('should count elements on the list', (done: DoneFn) => {
    // when
    from(service.find(() => true))
      .pipe(count())
      .subscribe({
        // then
        next: counter => {
          expect(counter).toEqual(1710);
          done();
        },
        error: done.fail
      });
  });

  it('should not have duplicated english translations', (done: DoneFn) => {
    // when
    from(service.find(() => true))
      .pipe(reduce((accumulator, value) => accumulator.set(value.getTranslation(Language.ENGLISH), (accumulator.get(value.getTranslation(Language.ENGLISH)) || 0) + 1), new Map<string, number>()))
      .subscribe({
        // then
        next: occurrences => {
          const duplicates = Array.from(occurrences.entries()).filter(value => value[1] > 1);
          expect(duplicates).toEqual([]);
          done();
        },
        error: done.fail
      });
  });

  it('should not have duplicated polish translations', (done: DoneFn) => {
    // when
    from(service.find(() => true))
      .pipe(reduce((accumulator, value) => accumulator.set(value.getTranslation(Language.POLISH), (accumulator.get(value.getTranslation(Language.POLISH)) || 0) + 1), new Map<string, number>()))
      .subscribe({
        // then
        next: occurrences => {
          const duplicates = Array.from(occurrences.entries()).filter(value => value[1] > 1);
          expect(duplicates).toEqual([]);
          done();
        },
        error: done.fail
      });
  });
});
