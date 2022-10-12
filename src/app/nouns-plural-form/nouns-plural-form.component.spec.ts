import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NounsPluralFormComponent} from './nouns-plural-form.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('NounsPluralFormComponent', () => {
  let component: NounsPluralFormComponent;
  let fixture: ComponentFixture<NounsPluralFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NounsPluralFormComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NounsPluralFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
