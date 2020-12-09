import {Component, Input, OnInit} from '@angular/core';
import {InputCellCommand} from '../../input-cell/input-cell-command';
import {VerbForms} from './verb-forms.model';
import {BehaviorSubject} from 'rxjs';
import {VerbFormsCommand} from './verb-forms-command';

@Component({
  selector: 'app-verb-forms-row',
  templateUrl: './verb-forms-row.component.html',
  styleUrls: ['./verb-forms-row.component.scss']
})
export class VerbFormsRowComponent implements OnInit {

  externalCommand: BehaviorSubject<string>;
  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);
  @Input() verbForms: VerbForms;
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
    if (command === VerbFormsCommand.CHANGE_LANGUAGE_TO_ENGLISH) {
      return this.setEnglishLabelAndPolishTooltip();
    }
    if (command === VerbFormsCommand.CHANGE_LANGUAGE_TO_POLISH) {
      return this.setPolishLabelAndEnglishTooltip();
    }
    this.cellInputsCommand.next(command as InputCellCommand);
  }

  private setEnglishLabelAndPolishTooltip(): void {
    this.label = this.verbForms.englishTranslation;
    this.tooltip = this.verbForms.polishTranslation;
  }

  private setPolishLabelAndEnglishTooltip(): void {
    this.label = this.verbForms.polishTranslation;
    this.tooltip = this.verbForms.englishTranslation;
  }

  setCommandToCheck(): void {
    this.cellInputsCommand.next(InputCellCommand.CHECK);
  }
}
