import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PresentSimpleSentenceComplementComponent} from './present-simple-sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PresentSimpleSentenceComplementComponent', () => {
  let component: PresentSimpleSentenceComplementComponent;
  let fixture: ComponentFixture<PresentSimpleSentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PresentSimpleSentenceComplementComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentSimpleSentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
