import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {InputCellState} from './input-cell-state';
import {InputCellCommand} from './input-cell-command';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-input-cell',
  templateUrl: './input-cell.component.html',
  styleUrls: ['./input-cell.component.scss']
})
export class InputCellComponent implements OnInit, OnDestroy {

  private germanLetters = ['ö', 'ä', 'ü', 'Ö', 'Ä', 'Ü'];
  state: InputCellState = InputCellState.UNCERTAIN;
  value: string = '';

  @Input() answer: string = '';
  @Input() label: string = '';
  @Input() command!: BehaviorSubject<InputCellCommand>;
  @Output() correctlyAnswered = new EventEmitter<string>();

  private subscription!: Subscription;
  private strategies = new Map<InputCellCommand, () => void>(
    [
      [InputCellCommand.REVEAL, () => this.reveal()],
      [InputCellCommand.CLEAR, () => this.clear()],
      [InputCellCommand.CHECK, () => this.check()],
      [InputCellCommand.NOOP, () => {
      }],
    ]
  );

  ngOnInit(): void {
    this.subscription = this.command.subscribe({
      next: command => this.executeCommand(command),
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onValueChanged(event: any): void {
    const keyCode = event.keyCode;
    if (this.isAsciiLetter(keyCode) || keyCode === 8 || keyCode === 46 || keyCode === 229) {
      this.state = InputCellState.UNCERTAIN;
    } else {
      this.executeCommand(this.deductCommand(event));
    }
  }

  onDoubleClick(): void {
    this.executeCommand(InputCellCommand.REVEAL);
  }

  private executeCommand(command: InputCellCommand): void {
    this.strategies.get(command)!();
  }

  private deductCommand(event: any): InputCellCommand {
    if (this.isArrowUpPressed(event)) {
      return InputCellCommand.REVEAL;
    }
    if (this.isArrowDownPressed(event)) {
      return InputCellCommand.CLEAR;
    }
    if (this.isEnterPressed(event)) {
      return InputCellCommand.CHECK;
    }
    return InputCellCommand.NOOP;
  }

  private isArrowUpPressed(event: any): boolean {
    return event.keyCode === 38;
  }

  private isArrowDownPressed(event: any): boolean {
    return event.keyCode === 40;
  }

  private isEnterPressed(event: any): boolean {
    return event.keyCode === 13;
  }

  private check(): void {
    this.state = this.value === this.answer ? InputCellState.CORRECT : InputCellState.INCORRECT;
    if (this.state === InputCellState.CORRECT) {
      this.correctlyAnswered.emit(this.value);
    }
  }

  private clear(): void {
    this.resetState();
    this.value = '';
  }

  private resetState(): void {
    this.state = InputCellState.UNCERTAIN;
  }

  private reveal(): void {
    this.state = InputCellState.CORRECT;
    this.value = this.answer;
  }

  private isAsciiLetter(code: number) {
    return (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) || (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) || this.germanLetters.includes(String.fromCharCode(code));
  }
}
