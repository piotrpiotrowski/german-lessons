import {Component, Input, OnInit} from '@angular/core';
import {InputCellCommand} from '../../input-cell/input-cell-command';
import {VerbForms} from './verb-forms.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-verb-forms-row',
  templateUrl: './verb-forms-row.component.html',
  styleUrls: ['./verb-forms-row.component.scss']
})
export class VerbFormsRowComponent implements OnInit {

  externalCommand: BehaviorSubject<InputCellCommand>;
  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);
  @Input() verbForms: VerbForms;

  @Input() set command(command: BehaviorSubject<InputCellCommand>) {
    this.externalCommand = command;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.externalCommand
      .subscribe(command => this.cellInputsCommand.next(command));
  }

  setCommandToCheck(): void {
    this.cellInputsCommand.next(InputCellCommand.CHECK);
  }
}
