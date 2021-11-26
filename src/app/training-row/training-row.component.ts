import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from './training-row.model';
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {LanguageService} from '../language/language.service';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-training-row',
  templateUrl: './training-row.component.html',
  styleUrls: ['./training-row.component.scss']
})
export class TrainingRowComponent implements OnInit, OnDestroy {

  private externalCommand: BehaviorSubject<InputCellCommand>;
  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);
  cellWidth: string;
  resizeSubscription: Subscription;
  @Input() trainingRowModel: TrainingRowModel;

  @Input() set command(command: BehaviorSubject<InputCellCommand>) {
    this.externalCommand = command;
  }

  constructor(public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.updateCellWith();
    this.externalCommand
      .subscribe(command => this.cellInputsCommand.next(command));
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(map(_ => Math.floor(window.innerWidth / 100)))
      .pipe(distinctUntilChanged())
      .subscribe(_ => this.updateCellWith());
  }

  setCommandToCheck(): void {
    this.cellInputsCommand.next(InputCellCommand.CHECK);
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }

  private updateCellWith(): void {
    this.cellWidth = this.calculateCellWidth() + '%';
  }

  private calculateCellWidth(): number {
    return window.innerWidth > 600 ? (80 - this.trainingRowModel.getNumberOfAnswers()) / this.trainingRowModel.getNumberOfAnswers() : 99;
  }
}
