import {Component, Input, OnInit, Predicate} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {finalize} from 'rxjs/operators';
import {LanguageService} from '../language/language.service';
import {Option} from '../responsive-button-toggle-group/option.model';
import {FinderService} from '../shared/finder.service';
import {DrawingService} from '../shared/drawing.service';

@Component({
  selector: 'app-verbs-conjunctions',
  templateUrl: './verbs-conjunctions.component.html',
  styleUrls: ['./verbs-conjunctions.component.scss']
})
export class VerbsConjunctionsComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
  verbsConjunctions: TrainingRowModel[] = [];
  loading: boolean = false;
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
  filtersForCategories = new Map<string, (verbs: TrainingRowModel[]) => TrainingRowModel[]>([
    ['ALL_AVAILABLE', verbs => verbs],
    ['BY_RANDOM_LETTER', verbs => this.drawingService.filterByRandomValueOfAttribute<TrainingRowModel>(verbs, model => this.extractFirstLetterOfTranslation(model))],
    ['RANDOM_5', verbs => this.drawingService.filterRandomEntries(5, verbs)],
    ['RANDOM_10', verbs => this.drawingService.filterRandomEntries(10, verbs)]
  ]);

  constructor(public languageService: LanguageService, private drawingService: DrawingService) {
  }

  @Input() finderService!: FinderService<TrainingRowModel>;
  @Input() title: string = '';

  ngOnInit(): void {
    this.loadVerbsConjunctions();
  }

  loadVerbsConjunctions(): void {
    this.loading = true;
    this.command.next(InputCellCommand.CLEAR);
    of(this.finderService.find(this.buildSearchPredicate()))
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: verbsConjunctions => this.verbsConjunctions = this.filterByCategory(verbsConjunctions),
        error: console.error
      });
  }

  private filterByCategory(verbsConjunctions: TrainingRowModel[]): TrainingRowModel[] {
    return this.filtersForCategories.get(this.filteringCategory)!(verbsConjunctions);
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
