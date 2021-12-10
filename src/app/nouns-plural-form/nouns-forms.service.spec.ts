import {TestBed} from '@angular/core/testing';

import {NounsFormsService} from './nouns-forms.service';
import {count, reduce, take, toArray} from 'rxjs/operators';
import {Language} from '../language/language';

describe('NounsFormsService', () => {
  let service: NounsFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NounsFormsService);
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
    expect(verbs[0].getTranslation(Language.ENGLISH)).toEqual('dinner');
    expect(verbs[1].getTranslation(Language.ENGLISH)).toEqual('adventure');
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
    expect(counter).toEqual(1722);
  });

  it('should not have duplicated english translations', () => {
    // given
    let occurrences: Map<string, number> = null;

    // when
    service.find(() => true)
      .pipe(reduce((accumulator, value) => accumulator.set(value.getTranslation(Language.ENGLISH), (accumulator.get(value.getTranslation(Language.ENGLISH)) || 0) + 1), new Map<string, number>()))
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
      .pipe(reduce((accumulator, value) => accumulator.set(value.getTranslation(Language.POLISH), (accumulator.get(value.getTranslation(Language.POLISH)) || 0) + 1), new Map<string, number>()))
      .subscribe(
        value => occurrences = value,
        fail);

    // then
    const duplicates = Array.from(occurrences.entries()).filter(value => value[1] > 1);
    expect(duplicates).toEqual([]);
  });
});
