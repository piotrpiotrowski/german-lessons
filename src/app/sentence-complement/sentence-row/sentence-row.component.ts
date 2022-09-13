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

  @Input() set sentence(sentence: Sentence) {
    this.currentSentence = sentence;
    this.numberOfAnswers = this.extractAnswers().length;
  }

  @Input() set command(command: BehaviorSubject<InputCellCommand>) {
    this.externalCommand = command;
  }

  constructor(public languageService: LanguageService) {
  }

  foundAnswers: string[] = [];
  numberOfAnswers: number = 0;
  private externalCommand!: BehaviorSubject<InputCellCommand>;
  currentSentence!: Sentence;

  cellInputsCommand: BehaviorSubject<InputCellCommand> = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);

  ngOnInit(): void {
    this.externalCommand
      .subscribe(command => this.handleCommand(command));
  }

  private handleCommand(command: InputCellCommand): void {
    if (command === InputCellCommand.CLEAR) {
      this.foundAnswers = [];
    }
    if (command === InputCellCommand.REVEAL) {
      this.foundAnswers = this.extractAnswers();
    }
    this.cellInputsCommand.next(command);
  }

  appendAnswerValue(answerValue: string): void {
    this.foundAnswers.push(answerValue);
  }

  private extractAnswers = (): string[] =>
    this.currentSentence.parts
      .filter(part => part.type === SentencePartType.RIDDLE)
      .map(sentencePart => sentencePart.value)
}
