import { TestBed } from '@angular/core/testing';

import { PossessivePronounsService } from './possessive-pronouns.service';

describe('PossessivePronounsService', () => {
  let service: PossessivePronounsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PossessivePronounsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
