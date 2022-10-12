import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {PresentSimpleVerbsConjunctionsComponent} from './present-simple-verbs-conjunctions.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PresentSimpleVerbsConjunctionsComponent', () => {
  let component: PresentSimpleVerbsConjunctionsComponent;
  let fixture: ComponentFixture<PresentSimpleVerbsConjunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PresentSimpleVerbsConjunctionsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentSimpleVerbsConjunctionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
