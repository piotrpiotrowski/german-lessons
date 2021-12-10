import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NounSentenceComplementComponent } from './noun-sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PresentSimpleSentenceComplementComponent', () => {
  let component: NounSentenceComplementComponent;
  let fixture: ComponentFixture<NounSentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NounSentenceComplementComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NounSentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
