import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainingRowComponent} from './training-row.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from './training-row.model';
import {Answer} from './answer.model';
import {BehaviorSubject, NEVER} from 'rxjs';
import {Language} from '../language/language';
import {LanguageService} from '../language/language.service';
import {take, toArray} from 'rxjs/operators';
import {UsageModeService} from '../usage-mode/usage-mode.service';
import {UsageMode} from '../usage-mode/usage-mode';

describe('TrainingRowComponent', () => {
  let component: TrainingRowComponent;
  let fixture: ComponentFixture<TrainingRowComponent>;
  let languageService: any;
  let usageModeService: any;

  beforeEach(async () => {
    languageService = jasmine.createSpyObj('LanguageService', ['getLabel', 'getCurrentLanguage']);
    usageModeService = jasmine.createSpyObj('UsageModeService', ['getEmitter', 'get']);

    languageService.getLabel.and.returnValue(null);
    languageService.getCurrentLanguage.and.returnValue(Language.ENGLISH);

    usageModeService.getEmitter.and.returnValue(NEVER);
    usageModeService.get.and.returnValue(UsageMode.UNLIMITED);

    await TestBed.configureTestingModule({
      declarations: [TrainingRowComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: LanguageService, useValue: languageService},
        {provide: UsageModeService, useValue: usageModeService},
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
    expect(button.textContent).toEqual(' Check ');
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

  it('should set command to REVEAL', (done) => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // when
    component.cellInputsCommand
      .pipe(take(3))
      .pipe(toArray())
      .subscribe({
        next: cellInputsCommand => {
        // then
          expect(cellInputsCommand.includes(InputCellCommand.REVEAL)).toBeTrue();
          done();
        },
        error: done.fail
      });

    // and
    fixture.detectChanges();
  });

  it('should set command to CLEAR', (done) => {
    // given
    component.trainingRowModel = new TrainingRowModel(new Map([[Language.ENGLISH, 'begin'], [Language.POLISH, 'zacząć']]), 1, [
      new Answer('infinitive', 'beginnen'),
      new Answer('presentSimple', 'beginnt'),
      new Answer('pastSimple', 'begann'),
      new Answer('pastParticiple', 'hat begonnen')
    ]);
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);
    component.cellInputsCommand
      .pipe(take(3))
      .pipe(toArray())
      .subscribe({
        next: cellInputsCommands => {
          // then
          expect(cellInputsCommands.includes(InputCellCommand.CLEAR)).toBeTrue();
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
    expect(label.textContent).toEqual(' begin ');
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
    expect(label.textContent).toEqual(' begin ');
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
    expect(label.textContent).toEqual(' zacząć ');
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
