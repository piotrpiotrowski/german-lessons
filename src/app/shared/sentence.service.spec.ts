import {TestBed} from '@angular/core/testing';

import {SentencesLoaderService} from './sentences-loader.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SentencesLoaderService', () => {
  let service: SentencesLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SentencesLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
