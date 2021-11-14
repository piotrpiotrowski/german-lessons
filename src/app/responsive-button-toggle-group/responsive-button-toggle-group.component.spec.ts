import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveButtonToggleGroupComponent } from './responsive-button-toggle-group.component';

describe('ResponsiveButtonToggleGroupComponent', () => {
  let component: ResponsiveButtonToggleGroupComponent;
  let fixture: ComponentFixture<ResponsiveButtonToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveButtonToggleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveButtonToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
