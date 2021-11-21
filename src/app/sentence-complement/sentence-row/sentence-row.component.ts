import {Component, Input, OnInit} from '@angular/core';
import {Sentence} from './sentence.model';
import {LanguageService} from '../../language/language.service';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../../input-cell/input-cell-command';

@Component({
  selector: 'app-sentence-row',
  templateUrl: './sentence-row.component.html',
  styleUrls: ['./sentence-row.component.scss']
})
export class SentenceRowComponent implements OnInit {

  showTranslation = false;
  private externalCommand: BehaviorSubject<InputCellCommand>;

  @Input() sentence: Sentence;
  @Input() set command(command: BehaviorSubject<InputCellCommand>) {
    this.externalCommand = command;
  }

  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
    this.externalCommand
      .subscribe(command => this.cellInputsCommand.next(command));
  }
}
