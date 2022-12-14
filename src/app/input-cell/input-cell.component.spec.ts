import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InputCellComponent} from './input-cell.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatInput} from '@angular/material/input';
import {InputCellState} from './input-cell-state';
import {InputCellCommand} from './input-cell-command';
import {By} from '@angular/platform-browser';
import {BehaviorSubject} from 'rxjs';
import {UsageMode} from '../usage-mode/usage-mode';

describe('InputCellComponent', () => {
  let component: InputCellComponent;
  let fixture: ComponentFixture<InputCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCellComponent, MatInput],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCellComponent);
    component = fixture.componentInstance;
  });

  it('should display input', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('mat-form-field')).toBeTruthy();
  });

  it('should display a fiber_manual_record icon when the state is UNCERTAIN', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('mat-icon').textContent).toEqual('fiber_manual_record');
  });

  it('should display a done icon when the state is CORRECT', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('mat-icon').textContent).toEqual('done');
  });

  it('should emit a correctlyAnswered event when the state is CORRECT', (done) => {
    // given
    component.answer = 'geben';
    component.value = 'geben';
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);
    component.correctlyAnswered
      .subscribe({
        // then
        next: (currentValue: string) => {
          expect(currentValue).toEqual(component.value);
          done();
        },
        error: done.fail
      });

    // when
    fixture.detectChanges();
  });

  it('should disable input when the command is CHECK and an usage mode is SINGLE and the answer is correct', () => {
    // given
    component.answer = 'geben';
    component.value = 'geben';
    component.usageMode = UsageMode.SINGLE;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('input').attributes['ng-reflect-disabled'].value).toEqual('true');
  });

  it('should disable input when the command is CHECK and an usage mode is SINGLE and the answer is wrong', () => {
    // given
    component.answer = 'geben';
    component.value = 'wrong';
    component.usageMode = UsageMode.SINGLE;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('input').attributes['ng-reflect-disabled'].value).toEqual('true');
  });

  it('should switch an usage mode to SINGLE', () => {
    // given
    component.answer = 'geben';
    component.value = 'geben';
    component.usageMode = UsageMode.UNLIMITED;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.SWITCH_MODE_TO_SINGLE);

    // when
    fixture.detectChanges();

    // then
    expect(component.usageMode).toEqual(UsageMode.SINGLE);
  });

  it('should switch an usage mode to UNLIMITED', () => {
    // given
    component.answer = 'geben';
    component.value = 'geben';
    component.usageMode = UsageMode.SINGLE;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.SWITCH_MODE_TO_UNLIMITED);

    // when
    fixture.detectChanges();

    // then
    expect(component.usageMode).toEqual(UsageMode.UNLIMITED);
  });

  it('should display a done icon when the state is CORRECT', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('mat-icon').textContent).toEqual('done');
  });

  it('should display a clear icon when the state is INCORRECT', () => {
    // given
    component.answer = 'ok';
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // when
    fixture.detectChanges();

    // then
    expect(fixture.nativeElement.querySelector('mat-icon').textContent).toEqual('clear');
  });

  it('should change state to CORRECT from INCORRECT when a command is REVEAL', () => {
    // given
    component.state = InputCellState.INCORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // when
    fixture.detectChanges();

    // then
    expect(component.state).toEqual(InputCellState.CORRECT);
  });

  it('should change state to CORRECT from UNCERTAIN when a command is REVEAL', () => {
    // given
    component.state = InputCellState.UNCERTAIN;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // when
    fixture.detectChanges();

    // then
    expect(component.state).toEqual(InputCellState.CORRECT);
  });

  it('should clear value when a command is CLEAR', () => {
    // given
    component.value = 'some value';
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);

    // when
    fixture.detectChanges();

    // then
    expect(component.value).toEqual('');
  });

  it('should change state to UNCERTAIN from CORRECT when a command is CLEAR', () => {
    // given
    component.state = InputCellState.CORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);

    // when
    fixture.detectChanges();

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should change state to UNCERTAIN from INCORRECT when a command is CLEAR', () => {
    // given
    component.state = InputCellState.INCORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);

    // when
    fixture.detectChanges();

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should copy an answer to a value when a command is REVEAL', () => {
    // given
    const expectedAnswer = 'ok';
    component.answer = expectedAnswer;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // when
    fixture.detectChanges();

    // then
    expect(component.value).toEqual(expectedAnswer);
  });

  it('should update a state to INCORRECT when a command is CHECK and a value is different than the answer', () => {
    // given
    component.answer = 'answer';
    component.value = 'different than answer';
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // when
    fixture.detectChanges();

    // then
    expect(component.state).toEqual(InputCellState.INCORRECT);
  });

  it('should update a state to CORRECT when a command is CHECK and a value the same a the answer', () => {
    // given
    component.answer = 'answer';
    component.value = component.answer;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // when
    fixture.detectChanges();

    // then
    expect(component.state).toEqual(InputCellState.CORRECT);
  });

  it('should update a state to UNCERTAIN from INCORRECT when a key changed event was emitted by a letter', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.INCORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 65});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should update a state to UNCERTAIN from INCORRECT when a key changed event was emitted by a backspace', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.INCORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 8});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should update a state to UNCERTAIN from INCORRECT when a key changed event was emitted by a delete', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.INCORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 46});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should update a state to UNCERTAIN from INCORRECT when a key changed event was emitted by a IME', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.INCORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 229});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should update a state to UNCERTAIN from CORRECT when a key changed event was emitted by a letter', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.CORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 65});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should update a state to UNCERTAIN from CORRECT when a key changed event was emitted by a german letter', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.CORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 252});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should not update a state when a key changed event was emitted by a non letter', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.CORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.REVEAL);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 17});

    // then
    expect(component.state).toEqual(InputCellState.CORRECT);
  });

  it('should update a state to CORRECT from UNCERTAIN when a key changed event was emitted by a arrow up', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.UNCERTAIN;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 38});

    // then
    expect(component.state).toEqual(InputCellState.CORRECT);
  });

  it('should update a state to CORRECT from INCORRECT when a key changed event was emitted by a arrow up', () => {
    // given
    component.answer = 'answer';
    component.state = InputCellState.INCORRECT;
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CHECK);

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 38});

    // then
    expect(component.state).toEqual(InputCellState.CORRECT);
  });

  it('should copy an answer to a value when a key changed event was emitted by a arrow up', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
    component.answer = 'answer';
    component.value = 'not an answer';

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 38});

    // then
    expect(component.value).toEqual(component.answer);
  });

  it('should update a state to UNCERTAIN from CORRECT when a key changed event was emitted by a arrow down', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
    component.answer = 'answer';
    component.state = InputCellState.CORRECT;

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 40});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should update a state to UNCERTAIN from INCORRECT when a key changed event was emitted by a arrow down', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
    component.answer = 'answer';
    component.state = InputCellState.INCORRECT;

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 40});

    // then
    expect(component.state).toEqual(InputCellState.UNCERTAIN);
  });

  it('should set a value to empty when a key changed event was emitted by a arrow down', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
    component.answer = 'answer';
    component.value = 'not an answer';

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 40});

    // then
    expect(component.value).toEqual('');
  });

  it('should update a state to INCORRECT when a key changed event was emitted by a enter and a value is different than the answer', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
    component.answer = 'answer';
    component.value = 'different than answer';

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 13});

    // then
    expect(component.state).toEqual(InputCellState.INCORRECT);
  });

  it('should update a state to CORRECT when a key changed event was emitted by a enter and a value the same a the answer', () => {
    // given
    component.command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
    component.answer = 'answer';
    component.value = component.answer;

    // and
    fixture.detectChanges();

    // when
    fixture.debugElement
      .query(By.css('input'))
      .triggerEventHandler('keyup', {keyCode: 13});

    // then
    expect(component.state).toEqual(InputCellState.CORRECT);
  });
});
