import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PossessivePronounsSentenceComplementComponent} from './possessive-pronouns-sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PossessivePronounsSentenceComplementComponent', () => {
  let component: PossessivePronounsSentenceComplementComponent;
  let fixture: ComponentFixture<PossessivePronounsSentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PossessivePronounsSentenceComplementComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessivePronounsSentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
