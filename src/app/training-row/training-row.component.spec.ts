import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainingRowComponent} from './training-row.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from './training-row.model';
import {Answer} from './answer.model';
import {BehaviorSubject, skip} from 'rxjs';
import {Language} from '../language/language';
import {LanguageService} from '../language/language.service';

describe('TrainingRowComponent', () => {
  let component: TrainingRowComponent;
  let fixture: ComponentFixture<TrainingRowComponent>;
  let languageService: any;

  beforeEach(async () => {
    languageService = jasmine.createSpyObj('LanguageService', ['getLabel', 'getCurrentLanguage']);

    languageService.getLabel.and.returnValue(null);
    languageService.getCurrentLanguage.and.returnValue(Language.ENGLISH);

    await TestBed.configureTestingModule({
      declarations: [TrainingRowComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: LanguageService, useValue: languageService}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingRowComponent);
    component = fixture.componentInstance;
  });

  it('should have a check button', () => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // and
    languageService.getLabel.and.returnValue('Check');

    // when
    fixture.detectChanges();

    // then
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toEqual('Check');
  });

  it('should emit a command to CHECK when a check button was clicked', () => {
    // given
    let expectedCellInputsCommand = InputCellCommand.CHECK;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.cellInputsCommand.subscribe(value => expectedCellInputsCommand = value);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', null);

    // then
    expect(expectedCellInputsCommand).toEqual(InputCellCommand.CHECK);
  });

  it('should set command to REVEAL', () => {
    // given
    let expectedCellInputsCommand = InputCellCommand.REVEAL;
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);
    component.cellInputsCommand.subscribe(value => expectedCellInputsCommand = value);


    // when
    fixture.detectChanges();

    // then
    expect(expectedCellInputsCommand).toEqual(InputCellCommand.REVEAL);
  });

  it('should set command to CLEAR', (done: DoneFn) => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);
    component.cellInputsCommand
      .pipe(skip(1))
      .subscribe({
        // then
        next: expectedCellInputsCommand => {
          expect(expectedCellInputsCommand).toEqual(InputCellCommand.CLEAR);
          done();
        },
        error: done.fail
      });

    // when
    fixture.detectChanges();
  });

  it('should have a english label by default', () => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('.foreign-translation');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('begin');
  });

  it('should have a english label when a selected language is ENGLISH', () => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // and
    languageService.getCurrentLanguage.and.returnValue(Language.ENGLISH);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('.foreign-translation');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('begin');
  });

  it('should set a polish label when a selected language is  POLISH', () => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // and
    languageService.getCurrentLanguage.and.returnValue(Language.POLISH);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('.foreign-translation');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('zacząć');
  });

  it('should have four input-cells', () => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // when
    fixture.detectChanges();

    // then
    const inputs = fixture.nativeElement.querySelectorAll('app-input-cell');
    expect(inputs.length).toEqual(4);
  });
});
