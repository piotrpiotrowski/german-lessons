import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {PastSimpleVerbsConjunctionsComponent} from './past-simple-verbs-conjunctions.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PastSimpleVerbsConjunctionsComponent', () => {
  let component: PastSimpleVerbsConjunctionsComponent;
  let fixture: ComponentFixture<PastSimpleVerbsConjunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PastSimpleVerbsConjunctionsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSimpleVerbsConjunctionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
