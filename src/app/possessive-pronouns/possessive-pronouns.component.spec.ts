import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {PossessivePronounsComponent} from './possessive-pronouns.component';

describe('PossessivePronounsComponent', () => {
  let component: PossessivePronounsComponent;
  let fixture: ComponentFixture<PossessivePronounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PossessivePronounsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessivePronounsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
