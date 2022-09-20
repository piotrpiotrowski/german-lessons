import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageSwitcherComponent} from './language-switcher.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {LanguageService} from '../language.service';

describe('LanguageSwitcherComponent', () => {
  let component: LanguageSwitcherComponent;
  let fixture: ComponentFixture<LanguageSwitcherComponent>;
  let languageService: any;

  beforeEach(async () => {
    languageService = jasmine.createSpyObj('LanguageService', ['select']);

    await TestBed.configureTestingModule({
      declarations: [LanguageSwitcherComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: LanguageService, useValue: languageService}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitcherComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
