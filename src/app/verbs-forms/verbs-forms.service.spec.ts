import {TestBed} from '@angular/core/testing';

import {VerbsFormsService} from './verbs-forms.service';
import {count, reduce, switchMap, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';
import {from} from 'rxjs';

describe('VerbsFormsService', () => {
  let service: VerbsFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [VerbsFormsService]});
    service = TestBed.inject(VerbsFormsService);
  });

  it('should take two from list', (done) => {
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

  it('should count elements on the list', (done) => {
    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(count())
      .subscribe({
        // then
        next: counter => {
          expect(counter).toEqual(184);
          done();
        },
        error: done.fail
      });
  });

  it('should not have duplicated english translations', (done) => {
    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(reduce((accumulator, value) => accumulator.set(value.getTranslation(Language.ENGLISH), (accumulator.get(value.getTranslation(Language.ENGLISH)) || 0) + 1), new Map<any, number>()))
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

  it('should not have duplicated polish translations', (done) => {
    // when
    service.find(() => true)
      .pipe(switchMap(from))
      .pipe(reduce((accumulator, value) => accumulator.set(value.getTranslation(Language.POLISH), (accumulator.get(value.getTranslation(Language.POLISH)) || 0) + 1), new Map<any, number>()))
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
