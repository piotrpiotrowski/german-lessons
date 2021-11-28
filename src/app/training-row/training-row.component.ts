import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from './training-row.model';
import {BehaviorSubject, fromEvent, Subscription} from 'rxjs';
import {LanguageService} from '../language/language.service';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {Answer} from './answer.model';

@Component({
  selector: 'app-training-row',
  templateUrl: './training-row.component.html',
  styleUrls: ['./training-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingRowComponent implements OnInit, OnDestroy {

  private externalCommand: BehaviorSubject<InputCellCommand>;
  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);
  cellWidth: string;
  subscription: Subscription;
  resizeSubscription: Subscription;
  @Input() trainingRowModel: TrainingRowModel;

  @Input() set command(command: BehaviorSubject<InputCellCommand>) {
    this.externalCommand = command;
  }

  constructor(public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.updateCellWith(this.isDesktop());
    this.subscription = this.externalCommand
      .subscribe(command => this.cellInputsCommand.next(command));
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(map(_ => this.isDesktop()))
      .pipe(distinctUntilChanged())
      .subscribe(desktop => this.updateCellWith(desktop));
  }

  setCommandToCheck(): void {
    this.cellInputsCommand.next(InputCellCommand.CHECK);
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

  trackAnswers(index: number, answer: Answer): any {
    return answer.name;
  }

  private isDesktop(): boolean {
    return window.innerWidth > 600;
  }

  private updateCellWith(desktop: boolean): void {
    this.cellWidth = this.calculateCellWidth(desktop) + '%';
  }

  private calculateCellWidth(desktop: boolean): number {
    return desktop ? (80 - this.trainingRowModel.getNumberOfAnswers()) / this.trainingRowModel.getNumberOfAnswers() : 99;
  }
}
