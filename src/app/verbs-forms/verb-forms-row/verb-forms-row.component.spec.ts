import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VerbFormsRowComponent} from './verb-forms-row.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {InputCellCommand} from '../../input-cell/input-cell-command';
import {VerbForms} from './verb-forms.model';
import {BehaviorSubject} from 'rxjs';
import {VerbFormsCommand} from './verb-forms-command';

describe('VerbFormsRowComponent', () => {
  let component: VerbFormsRowComponent;
  let fixture: ComponentFixture<VerbFormsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerbFormsRowComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbFormsRowComponent);
    component = fixture.componentInstance;
  });

  it('should have a check button', () => {
    // given
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
    component.command = new BehaviorSubject<string>(null);

    // when
    fixture.detectChanges();

    // then
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toEqual('Check');
  });

  it('should emit a command to CHECK when a check button was clicked', () => {
    // given
    let expectedCellInputsCommand = null;
    component.command = new BehaviorSubject<string>(null);
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
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
    let expectedCellInputsCommand = null;
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
    component.command = new BehaviorSubject<string>(InputCellCommand.REVEAL);
    component.cellInputsCommand.subscribe(value => expectedCellInputsCommand = value);


    // when
    fixture.detectChanges();

    // then
    expect(expectedCellInputsCommand).toEqual(InputCellCommand.REVEAL);
  });

  it('should set command to CLEAR', () => {
    // given
    let expectedCellInputsCommand = null;
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
    component.command = new BehaviorSubject<string>(InputCellCommand.CLEAR);
    component.cellInputsCommand.subscribe(value => expectedCellInputsCommand = value);

    // when
    fixture.detectChanges();

    // then
    expect(expectedCellInputsCommand).toEqual(InputCellCommand.CLEAR);
  });

  it('should have a english label and polish tooltip by default', () => {
    // given
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
    component.command = new BehaviorSubject<string>(InputCellCommand.CLEAR);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('span');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('begin');
    expect(label.attributes.title.value).toEqual('zaczybać');
  });

  it('should have a english label and polish tooltip when a CHANGE_LANGUAGE_TO_ENGLISH was emitted', () => {
    // given
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
    component.command = new BehaviorSubject<string>(VerbFormsCommand.CHANGE_LANGUAGE_TO_ENGLISH);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('span');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('begin');
    expect(label.attributes.title.value).toEqual('zaczybać');
  });

  it('should set a polish label and english tooltip when a CHANGE_LANGUAGE_TO_POLISH was emitted', () => {
    // given
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
    component.command = new BehaviorSubject<string>(VerbFormsCommand.CHANGE_LANGUAGE_TO_POLISH);

    // when
    fixture.detectChanges();

    // then
    const label = fixture.nativeElement.querySelector('span');
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('zaczybać');
    expect(label.attributes.title.value).toEqual('begin');
  });

  it('should have four input-cells', () => {
    // given
    component.verbForms = new VerbForms('begin', 'zaczybać', 'beginnen', 'beginnt', 'begann', 'hat begonnen', 1);
    component.command = new BehaviorSubject<string>(InputCellCommand.CLEAR);

    // when
    fixture.detectChanges();

    // then
    const inputs = fixture.nativeElement.querySelectorAll('app-input-cell');
    expect(inputs.length).toEqual(4);
  });
});
