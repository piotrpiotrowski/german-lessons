import {Component, OnInit, Predicate} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {VerbForms} from './verb-forms-row/verb-forms.model';
import {BehaviorSubject} from 'rxjs';
import {VerbFromsService} from './verb-froms.service';
import {finalize, toArray} from 'rxjs/operators';
import {VerbFormsCommand} from './verb-forms-row/verb-forms-command';

@Component({
  selector: 'app-verbs-forms',
  templateUrl: './verbs-forms.component.html',
  styleUrls: ['./verbs-forms.component.scss']
})
export class VerbsFormsComponent implements OnInit {

  command: BehaviorSubject<string> = new BehaviorSubject<string>(InputCellCommand.CLEAR);
  verbs: VerbForms[];
  loading: boolean;
  difficultyLevel = '0';
  auxiliaryVerb = 'both';
  translationLanguage = 0;

  constructor(private verbFromsService: VerbFromsService) {
  }

  ngOnInit(): void {
    this.loadVerbsForms();
  }

  loadVerbsForms(): void {
    this.loading = true;
    this.verbFromsService.find(this.buildSearchPredicate())
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        verbs => this.verbs = verbs,
        console.error
      );
  }

  private buildSearchPredicate(): Predicate<VerbForms> {
    return verbForm => this.difficultyLevelCondition(verbForm) && this.auxiliaryVerbCondition(verbForm);
  }

  private difficultyLevelCondition(verbForm: VerbForms): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || verbForm.classification === classification;
  }

  private auxiliaryVerbCondition(verbForm: VerbForms): boolean {
    return this.auxiliaryVerb === 'both' || verbForm.pastParticiple.startsWith(this.auxiliaryVerb);
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
    this.command.next(VerbFormsCommand.CHANGE_LANGUAGE_TO_POLISH);
  }

  setEnglishLanguage(): void {
    this.command.next(VerbFormsCommand.CHANGE_LANGUAGE_TO_ENGLISH);
  }
}
