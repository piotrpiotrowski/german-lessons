import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {VerbsConjunctionsComponent} from './verbs-conjunctions.component';
import {of} from 'rxjs';

describe('VerbsConjunctionsComponent', () => {
  let component: VerbsConjunctionsComponent;
  let fixture: ComponentFixture<VerbsConjunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerbsConjunctionsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsConjunctionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // given
    const finderService = jasmine.createSpyObj('finderService', ['find']);
    finderService.find.and.returnValue(of([]));
    component.finderService = finderService;

    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
