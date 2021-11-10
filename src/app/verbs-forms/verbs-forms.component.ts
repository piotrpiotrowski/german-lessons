import {Component, OnInit, Predicate} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {BehaviorSubject} from 'rxjs';
import {VerbsFormsService} from './verbs-forms.service';
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
  filteringCategory = 'ALL_AVAILABLE';
  translationLanguage = 0;
  filtersForCategories = new Map([
    ['ALL_AVAILABLE', verbs => verbs],
    ['BY_RANDOM_LETTER', verbs => this.filterByRandomLetter(verbs)],
    ['RANDOM_5', verbs => this.filterRandomVerbs(5, verbs)],
    ['RANDOM_10', verbs => this.filterRandomVerbs(10, verbs)]
  ]);

  constructor(private verbsFormsService: VerbsFormsService) {
  }

  ngOnInit(): void {
    this.loadVerbsForms();
  }

  loadVerbsForms(): void {
    this.loading = true;
    this.verbsFormsService.find(this.buildSearchPredicate())
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        verbs => this.verbs = this.filterByCategory(verbs),
        console.error
      );
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

  private filterByCategory(verbs: TrainingRowModel[]): TrainingRowModel[] {
    return this.filtersForCategories.get(this.filteringCategory)(verbs);
  }

  private filterByRandomLetter(verbs: TrainingRowModel[]): TrainingRowModel[] {
    const firstLettersOfTranslations = Array.from(new Set(verbs.map(value => this.extractFirstLetterOfTranslation(value))));
    const randomNumber = Math.floor(Math.random() * (firstLettersOfTranslations.length - 1));
    return verbs.filter(value => this.extractFirstLetterOfTranslation(value) === firstLettersOfTranslations[randomNumber]);
  }

  private filterRandomVerbs(numberOfVerbs: number, verbs: TrainingRowModel[]): TrainingRowModel[] {
    console.log(Array.from(Array(numberOfVerbs).keys())
      .map(_ => Math.floor(Math.random() * (verbs.length - 1)))
      .map(i => verbs[i]));
    return Array.from(Array(numberOfVerbs).keys())
      .map(_ => Math.floor(Math.random() * (verbs.length - 1)))
      .map(i => verbs[i]);
  }

  private extractFirstLetterOfTranslation(value: TrainingRowModel): string {
    return this.translationLanguage === 0 ? value.englishTranslation.charAt(0) : value.polishTranslation.charAt(0);
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
}
