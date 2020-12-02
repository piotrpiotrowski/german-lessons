import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsFormsComponent } from './verbs-forms.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('VerbsFormsComponent', () => {
  let component: VerbsFormsComponent;
  let fixture: ComponentFixture<VerbsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbsFormsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
