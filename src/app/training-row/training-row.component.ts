import {Component, Input, OnInit} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from './training-row.model';
import {BehaviorSubject} from 'rxjs';
import {Language} from '../language/language';
import {LanguageService} from '../language/language.service';

@Component({
  selector: 'app-training-row',
  templateUrl: './training-row.component.html',
  styleUrls: ['./training-row.component.scss']
})
export class TrainingRowComponent implements OnInit {

  private externalCommand: BehaviorSubject<InputCellCommand>;
  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);
  @Input() trainingRowModel: TrainingRowModel;
  label: string;

  @Input() set command(command: BehaviorSubject<InputCellCommand>) {
    this.externalCommand = command;
  }

  constructor(public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.label = this.trainingRowModel.getTranslation(this.languageService.getCurrentLanguage());
    this.externalCommand
      .subscribe(command => this.cellInputsCommand.next(command));
    this.languageService.getChangeLanguageNotification()
      .subscribe(language => this.switchLanguage(language));
  }

  private switchLanguage(language: Language): void {
    this.label = this.trainingRowModel.getTranslation(language);
  }

  setCommandToCheck(): void {
    this.cellInputsCommand.next(InputCellCommand.CHECK);
  }
}
