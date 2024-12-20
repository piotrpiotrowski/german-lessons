import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {InputCellState} from './input-cell-state';
import {InputCellCommand} from './input-cell-command';
import {BehaviorSubject, delay, distinct, filter, mergeMap, of, Subscription} from 'rxjs';
import {UsageMode} from '../usage-mode/usage-mode';
import {SpeechRecognitionService} from '../shared/speech/speech-recognition.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-input-cell',
  templateUrl: './input-cell.component.html',
  styleUrls: ['./input-cell.component.scss']
})
export class InputCellComponent implements OnInit, OnDestroy {

  private germanLetters = ['ö', 'ä', 'ü', 'Ö', 'Ä', 'Ü'];
  state: InputCellState = InputCellState.UNCERTAIN;
  value: string = '';
  usageMode: UsageMode = UsageMode.UNLIMITED;
  historyUpdatedAlready = false;
  recording = false;

  @Input() answer: string = '';
  @Input() label: string = '';
  @Input() command!: BehaviorSubject<InputCellCommand>;
  @Output() correctlyAnswered = new EventEmitter<string>();

  private commandSubscription!: Subscription;
  private recordingSubscription!: Subscription;
  private strategies = new Map<InputCellCommand, () => void>(
    [
      [InputCellCommand.REVEAL, () => this.reveal()],
      [InputCellCommand.CLEAR, () => this.clear()],
      [InputCellCommand.CHECK, () => this.check()],
      [InputCellCommand.SWITCH_MODE_TO_SINGLE, () => this.switchModeToSingle()],
      [InputCellCommand.SWITCH_MODE_TO_UNLIMITED, () => this.switchModeToUnlimited()],
      [InputCellCommand.NOOP, () => {
      }],
    ]
  );

  constructor(private speechRecognitionService: SpeechRecognitionService) {
  }

  ngOnInit(): void {
    this.commandSubscription = this.command.subscribe({
      next: command => this.executeCommand(command),
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.commandSubscription && this.commandSubscription.unsubscribe();
    this.recordingSubscription && this.recordingSubscription.unsubscribe();
  }

  onValueChanged(event: any): void {
    const keyCode = event.keyCode;
    this.cancelRecording();
    if (this.isAsciiLetter(keyCode) || keyCode === 8 || keyCode === 46 || keyCode === 229) {
      this.state = InputCellState.UNCERTAIN;
    } else {
      this.executeCommand(this.deductCommand(event));
    }
  }

  record(textInput: HTMLInputElement) {
    if (this.state === InputCellState.CORRECT) {
      return;
    }
    this.recording = true;
    this.recordingSubscription = of(textInput)
      .pipe(delay(200))
      .pipe(filter(_ => this.recording))
      .pipe(mergeMap(_ => this.speechRecognitionService.recognizeWords()))
      .pipe(distinct())
      .pipe(finalize(() => this.hideMic()))
      .subscribe({
        next: word => this.updateState(word, textInput),
        error: () => this.speechRecognitionService.stop(),
        complete: () => this.executeCommand(InputCellCommand.CHECK)
      });
  }

  private updateState(text: string, textInput: HTMLInputElement) {
    const words = text.split(' ');
    if (words.length == 2) {
      this.value = words[0] + ' ' + this.capitalize(words[1]);
    } else {
      this.value = text.toLowerCase();
    }
    textInput.blur();
  }

  onDoubleClick(): void {
    this.hideMic();
    this.executeCommand(InputCellCommand.REVEAL);
  }

  isReadOnly(): boolean {
    return this.usageMode === UsageMode.SINGLE && this.state !== InputCellState.UNCERTAIN;
  }

  cancelRecording() {
    this.speechRecognitionService.stop();
    this.hideMic();
  }

  private capitalize(text: string) {
    return String(text[0]).toUpperCase() + String(text).slice(1);
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
    if (this.isStateCorrect()) {
      this.correctlyAnswered.emit(this.value);
      this.hideMic();
    }
    this.updateHistory();
  }

  private isStateCorrect() {
    return this.state === InputCellState.CORRECT;
  }

  private switchModeToSingle(): void {
    this.usageMode = UsageMode.SINGLE;
    this.clear();
  }

  private switchModeToUnlimited(): void {
    this.usageMode = UsageMode.UNLIMITED;
    this.clear();
  }

  private clear(): void {
    this.resetState();
    this.value = '';
    this.hideMic();
    this.historyUpdatedAlready = false;
    this.recordingSubscription && this.recordingSubscription.unsubscribe();
  }

  private resetState(): void {
    this.state = InputCellState.UNCERTAIN;
  }

  private reveal(): void {
    this.state = InputCellState.CORRECT;
    this.value = this.answer;
    this.hideMic();
  }

  private hideMic(): void {
    this.recording = false;
  }

  private isAsciiLetter(code: number) {
    return (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) || (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) || this.germanLetters.includes(String.fromCharCode(code));
  }

  private updateHistory() {
    if (!this.historyUpdatedAlready) {
      this.historyUpdatedAlready = true;
      localStorage.setItem(this.answer, this.calculateWeight().toString());
    }
  }

  private calculateWeight() {
    try {
      const weight = +(localStorage.getItem(this.value) || '0');
      const newWeight = weight + (this.isStateCorrect() ? 1 : -1) * 0.2;
      if (newWeight > 1) {
        return 1;
      }
      if (newWeight < 0) {
        return 0;
      }
      return newWeight;
    } catch (err) {
      return 0;
    }
  }
}
