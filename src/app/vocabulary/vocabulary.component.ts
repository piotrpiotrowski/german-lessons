import {Component, OnInit, Predicate} from '@angular/core';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {BehaviorSubject, NEVER, Observable} from 'rxjs';
import {VocabularyService} from './vocabulary.service';
import {LanguageService} from '../language/language.service';
import {Option} from '../responsive-button-toggle-group/option.model';
import {DrawingService} from '../shared/drawing.service';
import {Language} from '../language/language';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
  words: Observable<TrainingRowModel[]> = NEVER;
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
    new Option('unknown5', 'UNKNOWN_5')
  ];
  filteringCategory = this.filteringCategoryOptions[0].value;
  filtersForCategories = new Map<string, (verbs: TrainingRowModel[]) => TrainingRowModel[]>([
    ['ALL_AVAILABLE', verbs => verbs],
    ['BY_RANDOM_LETTER', verbs => this.drawingService.filterByRandomValueOfAttribute<TrainingRowModel>(verbs, model => this.extractFirstLetterOfTranslation(model))],
    ['RANDOM_5', verbs => this.drawingService.filterRandomEntries<TrainingRowModel>(verbs)],
    ['UNKNOWN_5', verbs => this.drawingService.filterBySmallestWeight<TrainingRowModel>(verbs, model => model.calculateWeight(localStorage))]
  ]);

  constructor(private vocabularyService: VocabularyService, public languageService: LanguageService, private drawingService: DrawingService) {
  }

  ngOnInit(): void {
    this.loadVocabulary();
  }

  loadVocabulary(): void {
    this.command.next(InputCellCommand.CLEAR);
    this.words = this.vocabularyService.find(this.buildSearchPredicate())
      .pipe(map(words => this.filterByCategory(words)));
  }

  trackWords(index: number, item: TrainingRowModel): any {
    return item.getTranslation(Language.GERMAN);
  }

  private filterByCategory(verbs: TrainingRowModel[]): TrainingRowModel[] {
    return this.filtersForCategories.get(this.filteringCategory)!(verbs);
  }

  private extractFirstLetterOfTranslation(trainingRowModel: TrainingRowModel): string {
    return trainingRowModel.getTranslation(this.languageService.getCurrentLanguage()).charAt(0);
  }

  private buildSearchPredicate(): Predicate<TrainingRowModel> {
    return verbForm => this.difficultyLevelCondition(verbForm);
  }

  private difficultyLevelCondition(verbForm: TrainingRowModel): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || verbForm.classification === classification;
  }

  onCommandSelect(selectedCommand: InputCellCommand): void {
    this.command.next(selectedCommand);
  }
}
