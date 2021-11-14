import {Component, OnInit, Predicate} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {finalize, toArray} from 'rxjs/operators';
import {VerbsConjunctionsService} from './verbs-conjunctions.service';
import {LanguageService} from '../language/language.service';
import {Option} from '../responsive-button-toggle-group/option.model';

@Component({
  selector: 'app-verbs-conjunctions',
  templateUrl: './verbs-conjunctions.component.html',
  styleUrls: ['./verbs-conjunctions.component.scss']
})
export class VerbsConjunctionsComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);
  verbsConjunctions: TrainingRowModel[];
  loading: boolean;
  difficultyLevelOptions = [
    new Option('all', '0'),
    new Option('beginner', '1'),
    new Option('intermediate', '2'),
    new Option('advanced', '3'),
    new Option('proficient', '4')
  ];
  difficultyLevel = this.difficultyLevelOptions[1].value;
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
  constructor(private verbsConjunctionsService: VerbsConjunctionsService, public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.loadVerbsConjunctions();
  }

  loadVerbsConjunctions(): void {
    this.loading = true;
    this.verbsConjunctionsService.find(this.buildSearchPredicate())
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        verbsConjunctions => this.verbsConjunctions = this.filterByCategory(verbsConjunctions),
        console.error
      );
  }
  private filterByCategory(verbsConjunctions: TrainingRowModel[]): TrainingRowModel[] {
    return this.filtersForCategories.get(this.filteringCategory)(verbsConjunctions);
  }

  private filterByRandomLetter(verbsConjunctions: TrainingRowModel[]): TrainingRowModel[] {
    const firstLettersOfTranslations = Array.from(new Set(verbsConjunctions.map(value => this.extractFirstLetterOfTranslation(value))));
    const randomFirstLetter = firstLettersOfTranslations[this.drawRandomNumber(firstLettersOfTranslations.length)];
    return verbsConjunctions.filter(value => this.extractFirstLetterOfTranslation(value) === randomFirstLetter);
  }

  private filterRandomVerbs(numberOfVerbs: number, verbsConjunctions: TrainingRowModel[]): TrainingRowModel[] {
    return this.createListOfRandomIndexes(Math.min(numberOfVerbs, verbsConjunctions.length), verbsConjunctions.length)
      .map(i => verbsConjunctions[i]);
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
    return verbConjunctions => this.difficultyLevelCondition(verbConjunctions);
  }

  private difficultyLevelCondition(verbConjunctions: TrainingRowModel): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || verbConjunctions.classification === classification;
  }

  onCommandSelect(selectedCommand: InputCellCommand): void {
    this.command.next(selectedCommand);
  }
}
