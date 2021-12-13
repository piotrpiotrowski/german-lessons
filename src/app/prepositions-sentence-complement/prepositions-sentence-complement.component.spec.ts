import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrepositionsSentenceComplementComponent} from './prepositions-sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PrepositionsSentenceComplementComponent', () => {
  let component: PrepositionsSentenceComplementComponent;
  let fixture: ComponentFixture<PrepositionsSentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrepositionsSentenceComplementComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepositionsSentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
