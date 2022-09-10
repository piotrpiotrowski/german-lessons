import {Component, OnInit, Predicate} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Option} from '../responsive-button-toggle-group/option.model';
import {LanguageService} from '../language/language.service';
import {DrawingService} from '../shared/drawing.service';
import {finalize} from 'rxjs/operators';
import {NounsFormsService} from './nouns-forms.service';

@Component({
  selector: 'app-nouns-plural-form',
  templateUrl: './nouns-plural-form.component.html',
  styleUrls: ['./nouns-plural-form.component.scss']
})
export class NounsPluralFormComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);
  nounsForms: TrainingRowModel[];
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
  filteringCategory = this.filteringCategoryOptions[3].value;
  filtersForCategories = new Map([
    ['ALL_AVAILABLE', nouns => nouns],
    ['BY_RANDOM_LETTER', nouns => this.drawingService.filterByRandomValueOfAttribute<TrainingRowModel>(nouns, model => this.extractFirstLetterOfTranslation(model))],
    ['RANDOM_5', nouns => this.drawingService.filterRandomEntries(5, nouns)],
    ['RANDOM_10', nouns => this.drawingService.filterRandomEntries(10, nouns)]
  ]);
  constructor(private nounsFormsService: NounsFormsService, public languageService: LanguageService, private drawingService: DrawingService) {
  }

  ngOnInit(): void {
    this.loadNounsForms();
  }

  loadNounsForms(): void {
    this.loading = true;
    this.command.next(InputCellCommand.CLEAR);
    of(this.nounsFormsService.find(this.buildSearchPredicate()))
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        nounsForms => this.nounsForms = this.filterByCategory(nounsForms),
        console.error
      );
  }

  private filterByCategory(nounsForms: TrainingRowModel[]): TrainingRowModel[] {
    return this.filtersForCategories.get(this.filteringCategory)(nounsForms);
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