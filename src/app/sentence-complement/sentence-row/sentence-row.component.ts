import {Component, Input, OnInit} from '@angular/core';
import {Sentence} from './sentence.model';
import {LanguageService} from '../../language/language.service';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../../input-cell/input-cell-command';
import {SentencePartType} from './sentence-part-type.enum';

@Component({
  selector: 'app-sentence-row',
  templateUrl: './sentence-row.component.html',
  styleUrls: ['./sentence-row.component.scss']
})
export class SentenceRowComponent implements OnInit {

  foundAnswers = 0;
  showTranslation = false;
  private externalCommand: BehaviorSubject<InputCellCommand>;

  @Input() sentence: Sentence;

  @Input() set command(command: BehaviorSubject<InputCellCommand>) {
    this.externalCommand = command;
  }

  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(null);

  constructor(public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.externalCommand
      .subscribe(command => this.cellInputsCommand.next(command));
  }

  shouldShowTransaction(): void {
    this.foundAnswers++;
    this.showTranslation = this.foundAnswers === this.sentence.parts.filter(part => part.type === SentencePartType.RIDDLE).length;
  }
}