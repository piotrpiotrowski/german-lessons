import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {InputCellState} from './input-cell-state';
import {InputCellCommand} from './input-cell-command';
import {isAsciiLetter} from 'codelyzer/angular/styles/chars';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-input-cell',
  templateUrl: './input-cell.component.html',
  styleUrls: ['./input-cell.component.scss']
})
export class InputCellComponent implements OnInit {

  state: InputCellState = InputCellState.UNCERTAIN;
  value: string = null;

  @Input() answer: string;
  @Input() command: BehaviorSubject<InputCellCommand>;
  @Input() widthInPercent = 20;

  constructor() {
  }

  ngOnInit(): void {
    this.command.subscribe(
      command => this.executeCommand(command),
      error => console.error(error)
    );
  }

  onValueChanged(event): void {
    if (isAsciiLetter(event.keyCode)) {
      this.state = InputCellState.UNCERTAIN;
    } else {
      this.executeCommand(this.deductCommand(event));
    }
  }

  private executeCommand(command: InputCellCommand): void {
    if (command === InputCellCommand.REVEAL) {
      return this.reveal();
    }
    if (command === InputCellCommand.CLEAR) {
      return this.clear();
    }
    if (command === InputCellCommand.CHECK) {
      return this.check();
    }
  }

  private deductCommand(event): InputCellCommand {
    if (this.isArrowUpPressed(event)) {
      return InputCellCommand.REVEAL;
    }
    if (this.isArrowDownPressed(event)) {
      return InputCellCommand.CLEAR;
    }
    if (this.isEnterPressed(event)) {
      return InputCellCommand.CHECK;
    }
    return null;
  }

  private isArrowUpPressed(event): boolean {
    return event.keyCode === 38;
  }

  private isArrowDownPressed(event): boolean {
    return event.keyCode === 40;
  }

  private isEnterPressed(event): boolean {
    return event.keyCode === 13;
  }

  private check(): void {
    this.state = this.value === this.answer ? InputCellState.CORRECT : InputCellState.INCORRECT;
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
}
