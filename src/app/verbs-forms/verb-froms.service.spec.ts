import {TestBed} from '@angular/core/testing';

import {VerbFromsService} from './verb-froms.service';
import {count, take, toArray} from 'rxjs/operators';

describe('VerbsFromsService', () => {
  let service: VerbFromsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbFromsService);
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
    expect(counter).toEqual(185);
  });
});
