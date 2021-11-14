import {TestBed} from '@angular/core/testing';

import {VerbsFormsService} from './verbs-forms.service';
import {count, reduce, take, toArray} from 'rxjs/operators';

describe('VerbsFormsService', () => {
  let service: VerbsFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbsFormsService);
  });

  it('should take two from list', () => {
    // given
    let verbs = null;

    // when
    service.find(() => true)
      .pipe(take(2))
      .pipe(toArray())
      .subscribe(
        value => verbs = value,
        fail);

    // then
    expect(verbs.length).toEqual(2);
    expect(verbs[0].englishTranslation).toEqual('bake');
    expect(verbs[1].englishTranslation).toEqual('command');
  });

  it('should count elements on the list', () => {
    // given
    let counter = null;

    // when
    service.find(() => true)
      .pipe(count())
      .subscribe(
        value => counter = value,
        fail);

    // then
    expect(counter).toEqual(184);
  });

  it('should not have duplicated english translations', () => {
    // given
    let occurrences: Map<string, number> = null;

    // when
    service.find(() => true)
      .pipe(reduce((accumulator, value) => accumulator.set(value.englishTranslation, (accumulator.get(value.englishTranslation) || 0) + 1), new Map<string, number>()))
      .subscribe(
        value => occurrences = value,
        fail);

    // then
    const duplicates = Array.from(occurrences.entries()).filter(value => value[1] > 1);
    expect(duplicates).toEqual([]);
  });

  it('should not have duplicated polish translations', () => {
    // given
    let occurrences: Map<string, number> = null;

    // when
    service.find(() => true)
      .pipe(reduce((accumulator, value) => accumulator.set(value.polishTranslation, (accumulator.get(value.polishTranslation) || 0) + 1), new Map<string, number>()))
      .subscribe(
        value => occurrences = value,
        fail);

    // then
    const duplicates = Array.from(occurrences.entries()).filter(value => value[1] > 1);
    expect(duplicates).toEqual([]);
  });
});
