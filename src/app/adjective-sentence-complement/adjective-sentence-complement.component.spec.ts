import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdjectiveSentenceComplementComponent} from './adjective-sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AdjectiveSentenceComplementComponent', () => {
  let component: AdjectiveSentenceComplementComponent;
  let fixture: ComponentFixture<AdjectiveSentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdjectiveSentenceComplementComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjectiveSentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
