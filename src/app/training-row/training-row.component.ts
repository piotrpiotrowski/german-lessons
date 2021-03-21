import {Component, Input, OnInit} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from './training-row.model';
import {BehaviorSubject} from 'rxjs';
import {TrainingRowCommand} from './training-row-command';

@Component({
  selector: 'app-training-row',
  templateUrl: './training-row.component.html',
  styleUrls: ['./training-row.component.scss']
})
export class TrainingRowComponent implements OnInit {

  externalCommand: BehaviorSubject<string>;
  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);
  @Input() trainingRowModel: TrainingRowModel;
  label: string;
  tooltip: string;

  @Input() set command(command: BehaviorSubject<string>) {
    this.externalCommand = command;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.setEnglishLabelAndPolishTooltip();
    this.externalCommand
      .subscribe(command => this.executeCommand(command));
  }

  private executeCommand(command: string): void {
    if (command === TrainingRowCommand.CHANGE_LANGUAGE_TO_ENGLISH) {
      return this.setEnglishLabelAndPolishTooltip();
    }
    if (command === TrainingRowCommand.CHANGE_LANGUAGE_TO_POLISH) {
      return this.setPolishLabelAndEnglishTooltip();
    }
    this.cellInputsCommand.next(command as InputCellCommand);
  }

  private setEnglishLabelAndPolishTooltip(): void {
    this.label = this.trainingRowModel.englishTranslation;
    this.tooltip = this.trainingRowModel.polishTranslation;
  }

  private setPolishLabelAndEnglishTooltip(): void {
    this.label = this.trainingRowModel.polishTranslation;
    this.tooltip = this.trainingRowModel.englishTranslation;
  }

  setCommandToCheck(): void {
    this.cellInputsCommand.next(InputCellCommand.CHECK);
  }
}
