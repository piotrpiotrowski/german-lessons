import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ResponsiveButtonToggleGroupComponent} from './responsive-button-toggle-group.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ResponsiveButtonToggleGroupComponent', () => {
  let component: ResponsiveButtonToggleGroupComponent;
  let fixture: ComponentFixture<ResponsiveButtonToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponsiveButtonToggleGroupComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveButtonToggleGroupComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    // when
    fixture.detectChanges();

    // then
    expect(component).toBeTruthy();
  });
});
