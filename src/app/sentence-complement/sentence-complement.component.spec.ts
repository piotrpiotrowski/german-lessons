import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SentenceComplementComponent} from './sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('SentenceComplementComponent', () => {
  let component: SentenceComplementComponent;
  let fixture: ComponentFixture<SentenceComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SentenceComplementComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceComplementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
