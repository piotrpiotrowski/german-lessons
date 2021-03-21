import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPronounsComponent } from './personal-pronouns.component';

describe('PersonalPronaunsComponent', () => {
  let component: PersonalPronounsComponent;
  let fixture: ComponentFixture<PersonalPronounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalPronounsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
