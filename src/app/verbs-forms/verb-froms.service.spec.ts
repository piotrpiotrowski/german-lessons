import {TestBed} from '@angular/core/testing';

import {VerbFromsService} from './verb-froms.service';
import {count, take, toArray} from 'rxjs/operators';

describe('VerbsFromsService', () => {
  let service: VerbFromsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbFromsService);
  });

  it('should take two from list with an english translation', () => {
    // given
    let verbs = null;

    // when
    service.find(() => true, 'EN')
      .pipe(take(2))
      .pipe(toArray())
      .subscribe(
        value => verbs = value,
        fail);

    // then
    expect(verbs.length).toEqual(2);
    expect(verbs[0].foreignTranslation).toEqual('bake');
    expect(verbs[1].foreignTranslation).toEqual('command');
  });

  it('should take two from list with a polish translation', () => {
    // given
    let verbs = null;

    // when
    service.find(() => true, 'PL')
      .pipe(take(2))
      .pipe(toArray())
      .subscribe(
        value => verbs = value,
        fail);

    // then
    expect(verbs.length).toEqual(2);
    expect(verbs[0].foreignTranslation).toEqual('piec');
    expect(verbs[1].foreignTranslation).toEqual('rozkazywać');
  });

  it('should count elements on the list', () => {
    // given
    let counter = null;

    // when
    service.find(() => true, 'PL')
      .pipe(count())
      .subscribe(
        value => counter = value,
        fail);

    // then
    expect(counter).toEqual(185);
  });
});
