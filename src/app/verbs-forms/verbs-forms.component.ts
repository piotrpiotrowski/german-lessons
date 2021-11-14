import {Component, OnInit, Predicate} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {BehaviorSubject} from 'rxjs';
import {VerbsFormsService} from './verbs-forms.service';
import {finalize, toArray} from 'rxjs/operators';
import {LanguageService} from '../language/language.service';
import {Option} from '../responsive-button-toggle-group/option.model';

@Component({
  selector: 'app-verbs-forms',
  templateUrl: './verbs-forms.component.html',
  styleUrls: ['./verbs-forms.component.scss']
})
export class VerbsFormsComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);
  verbs: TrainingRowModel[];
  loading: boolean;
  difficultyLevelOptions = [
    new Option('all', '0'),
    new Option('beginner', '1'),
    new Option('intermediate', '2'),
    new Option('advanced', '3'),
    new Option('proficient', '4')
  ];
  difficultyLevel = this.difficultyLevelOptions[1].value;
  auxiliaryVerbOptions = [
    new Option('Haben & Sein', 'both'),
    new Option('Haben', 'hat'),
    new Option('Sein', 'ist')
  ];
  auxiliaryVerb = this.auxiliaryVerbOptions[0].value;
  filteringCategoryOptions = [
    new Option('allAvailable', 'ALL_AVAILABLE'),
    new Option('randomLetter', 'BY_RANDOM_LETTER'),
    new Option('random5', 'RANDOM_5'),
    new Option('random10', 'RANDOM_10')
  ];
  filteringCategory = this.filteringCategoryOptions[0].value;
  filtersForCategories = new Map([
    ['ALL_AVAILABLE', verbs => verbs],
    ['BY_RANDOM_LETTER', verbs => this.filterByRandomLetter(verbs)],
    ['RANDOM_5', verbs => this.filterRandomVerbs(5, verbs)],
    ['RANDOM_10', verbs => this.filterRandomVerbs(10, verbs)]
  ]);

  constructor(private verbsFormsService: VerbsFormsService, public languageService: LanguageService) {
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

  private filterByCategory(verbs: TrainingRowModel[]): TrainingRowModel[] {
    return this.filtersForCategories.get(this.filteringCategory)(verbs);
  }

  private filterByRandomLetter(verbs: TrainingRowModel[]): TrainingRowModel[] {
    const firstLettersOfTranslations = Array.from(new Set(verbs.map(value => this.extractFirstLetterOfTranslation(value))));
    const randomFirstLetter = firstLettersOfTranslations[this.drawRandomNumber(firstLettersOfTranslations.length)];
    return verbs.filter(value => this.extractFirstLetterOfTranslation(value) === randomFirstLetter);
  }

  private filterRandomVerbs(numberOfVerbs: number, verbs: TrainingRowModel[]): TrainingRowModel[] {
    return this.createListOfRandomIndexes(Math.min(numberOfVerbs, verbs.length), verbs.length)
      .map(i => verbs[i]);
  }

  private createListOfRandomIndexes(listSize: number, maxValue: number): number[] {
    const randomIndexes = new Set<number>();
    while (randomIndexes.size !== listSize) {
      randomIndexes.add(this.drawRandomNumber(maxValue));
    }
    return Array.from(randomIndexes.values());
  }

  private drawRandomNumber(length: number): number {
    return Math.floor(Math.random() * length);
  }

  private extractFirstLetterOfTranslation(trainingRowModel: TrainingRowModel): string {
    return trainingRowModel.getTranslation(this.languageService.getCurrentLanguage()).charAt(0);
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

  onCommandSelect(selectedCommand: InputCellCommand): void {
    this.command.next(selectedCommand);
  }
}
