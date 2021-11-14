import {Component, EventEmitter, Output} from '@angular/core';
import {LanguageService} from '../language/language.service';
import {InputCellCommand} from '../input-cell/input-cell-command';

@Component({
  selector: 'app-command-buttons',
  templateUrl: './command-buttons.component.html',
  styleUrls: ['./command-buttons.component.scss']
})
export class CommandButtonsComponent {

  @Output() selectedCommand = new EventEmitter<InputCellCommand>();

  constructor(public languageService: LanguageService) {
  }

  setCommandToClear(): void {
    this.selectedCommand.emit(InputCellCommand.CLEAR);
  }

  setCommandToCheck(): void {
    this.selectedCommand.emit(InputCellCommand.CHECK);
  }

  setCommandToReveal(): void {
    this.selectedCommand.emit(InputCellCommand.REVEAL);
  }
}
