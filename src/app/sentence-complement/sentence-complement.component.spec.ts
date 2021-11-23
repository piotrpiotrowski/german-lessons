import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SentenceComplementComponent} from './sentence-complement.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NEVER} from 'rxjs';

describe('SentenceComplementComponent', () => {
  let component: SentenceComplementComponent;
  let fixture: ComponentFixture<SentenceComplementComponent>;
  let finderService;

  beforeEach(async () => {
    finderService = jasmine.createSpyObj('FinderService', ['find']);

    finderService.find.and.returnValue(NEVER);

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
    // given
    component.title = 'Title';
    component.finderService = finderService;

    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
