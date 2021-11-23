import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SentenceRowComponent} from './sentence-row.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Language} from '../../language/language';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../../input-cell/input-cell-command';
import {Sentence} from './sentence.model';
import {LanguageService} from '../../language/language.service';

describe('SentenceRowComponent', () => {
  let component: SentenceRowComponent;
  let fixture: ComponentFixture<SentenceRowComponent>;
  let languageService;

  beforeEach(async () => {
    languageService = jasmine.createSpyObj('languageService', ['getLabel', 'getCurrentLanguage']);

    languageService.getLabel.and.returnValue(null);
    languageService.getCurrentLanguage.and.returnValue(Language.ENGLISH);

    await TestBed.configureTestingModule({
      declarations: [SentenceRowComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: LanguageService, useValue: languageService}
      ]

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceRowComponent);
    component = fixture.componentInstance;
  });

  it('should display a label', () => {
    // given
    component.sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'bake']]), 2, 'Ich habe die Kuchen gebacken and gegessen.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>(), 'ABC');
    component.command = new BehaviorSubject<InputCellCommand>(null);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('.foreign-translation');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('bake (1. M2:5)');
  });

  it('should display an input-cell', () => {
    // given
    component.sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'bake']]), 2, 'Ich habe die Kuchen gebacken and gegessen.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>(), 'ABC');
    component.command = new BehaviorSubject<InputCellCommand>(null);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('app-input-cell');
    expect(label).toBeTruthy();
  });


  it('should display prefix from the sentence', () => {
    // given
    component.sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'bake']]), 2, 'Ich habe die Kuchen gebacken and gegessen.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>(), 'ABC');
    component.command = new BehaviorSubject<InputCellCommand>(null);

    // when
    fixture.detectChanges();

    // then
    const prefix = fixture.nativeElement.querySelector('.prefix-cell');
    expect(prefix).toBeTruthy();
    expect(prefix.textContent).toEqual('Ich habe die Kuchen ');
  });

  it('should display suffix from the sentence', () => {
    // given
    component.sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'bake']]), 2, 'Ich habe die Kuchen gebacken and gegessen.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>(), 'ABC');
    component.command = new BehaviorSubject<InputCellCommand>(null);

    // when
    fixture.detectChanges();

    // then
    const prefix = fixture.nativeElement.querySelector('.suffix-cell');
    expect(prefix).toBeTruthy();
    expect(prefix.textContent).toEqual(' and gegessen.');
  });

  it('should set command to REVEAL', () => {
    // given
    let expectedCellInputsCommand = null;
    component.sentence = new Sentence('gebacken', new Map([[Language.ENGLISH, 'bake']]), 2, 'Ich habe die Kuchen gebacken and gegessen.',
      new Map<Language, string>([[Language.ENGLISH, '1. M2:5']]), new Map<Language, string>(), 'ABC');
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);
    component.cellInputsCommand.subscribe(value => expectedCellInputsCommand = value);


    // when
    fixture.detectChanges();

    // then
    expect(expectedCellInputsCommand).toEqual(InputCellCommand.REVEAL);
  });

});
