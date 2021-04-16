import {Component, OnInit, Predicate} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {BehaviorSubject} from 'rxjs';
import {VerbFromsService} from './verb-froms.service';
import {finalize, toArray} from 'rxjs/operators';
import {TrainingRowCommand} from '../training-row/training-row-command';

@Component({
  selector: 'app-verbs-forms',
  templateUrl: './verbs-forms.component.html',
  styleUrls: ['./verbs-forms.component.scss']
})
export class VerbsFormsComponent implements OnInit {

  command: BehaviorSubject<string> = new BehaviorSubject<string>(InputCellCommand.CLEAR);
  verbs: TrainingRowModel[];
  loading: boolean;
  difficultyLevel = '1';
  auxiliaryVerb = 'both';
  translationLanguage = 0;

  constructor(private verbFormsService: VerbFromsService) {
  }

  ngOnInit(): void {
    this.loadVerbsForms();
  }

  loadVerbsForms(): void {
    this.loading = true;
    this.verbFormsService.find(this.buildSearchPredicate())
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        verbs => this.verbs = verbs,
        console.error
      );
  }

  private buildSearchPredicate(): Predicate<TrainingRowModel> {
    return verbForm => this.difficultyLevelCondition(verbForm) && this.auxiliaryVerbCondition(verbForm);
  }

  private difficultyLevelCondition(verbForm: TrainingRowModel): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || verbForm.classification === classification;
  }

  private auxiliaryVerbCondition(verbForm: TrainingRowModel): boolean {
    return this.auxiliaryVerb === 'both' || verbForm.getAnswer(3).startsWith(this.auxiliaryVerb);
  }

  setCommandToClear(): void {
    this.command.next(InputCellCommand.CLEAR);
  }

  setCommandToCheck(): void {
    this.command.next(InputCellCommand.CHECK);
  }

  setCommandToReveal(): void {
    this.command.next(InputCellCommand.REVEAL);
  }

  setPolishLanguage(): void {
    this.command.next(TrainingRowCommand.CHANGE_LANGUAGE_TO_POLISH);
  }

  setEnglishLanguage(): void {
    this.command.next(TrainingRowCommand.CHANGE_LANGUAGE_TO_ENGLISH);
  }
}
