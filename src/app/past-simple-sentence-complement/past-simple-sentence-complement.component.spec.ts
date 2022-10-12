import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PastSimpleSentenceComplementComponent} from './past-simple-sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PastSimpleSentenceComplementComponent', () => {
  let component: PastSimpleSentenceComplementComponent;
  let fixture: ComponentFixture<PastSimpleSentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PastSimpleSentenceComplementComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSimpleSentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
