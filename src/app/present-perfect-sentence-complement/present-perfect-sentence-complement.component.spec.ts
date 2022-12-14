import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PresentPerfectSentenceComplementComponent} from './present-perfect-sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PresentPerfectSentenceComplementComponent', () => {
  let component: PresentPerfectSentenceComplementComponent;
  let fixture: ComponentFixture<PresentPerfectSentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PresentPerfectSentenceComplementComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPerfectSentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
