import {Component, Input, OnInit, Predicate} from '@angular/core';
import {Sentence} from './sentence-row/sentence.model';
import {LanguageService} from '../language/language.service';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {finalize, toArray} from 'rxjs/operators';
import {Option} from '../responsive-button-toggle-group/option.model';
import {DrawingService} from '../shared/drawing.service';
import {FinderService} from '../shared/finder.service';

@Component({
  selector: 'app-sentence-complement',
  templateUrl: './sentence-complement.component.html',
  styleUrls: ['./sentence-complement.component.scss']
})
export class SentenceComplementComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.CLEAR);
  sentences: Sentence[];
  loading: boolean;
  difficultyLevelOptions = [
    new Option('all', '0'),
    new Option('beginner', '1'),
    new Option('intermediate', '2'),
    new Option('advanced', '3'),
    new Option('proficient', '4')
  ];
  difficultyLevel = this.difficultyLevelOptions[0].value;
  filteringCategoryOptions = [
    new Option('random5', 'RANDOM_5'),
    new Option('random10', 'RANDOM_10'),
    new Option('randomLetter', 'BY_RANDOM_LETTER')
  ];
  filteringCategory = this.filteringCategoryOptions[0].value;
  filtersForCategories = new Map([
    ['BY_RANDOM_LETTER', sentences => this.drawingService.filterByRandomLetter(sentences)],
    ['RANDOM_5', sentences => this.drawingService.filterRandomVerbs(5, sentences)],
    ['RANDOM_10', sentences => this.drawingService.filterRandomVerbs(10, sentences)]
  ]);

  private drawingService: DrawingService<Sentence>;

  @Input() finderService: FinderService<Sentence>;
  @Input() title: string;

  constructor(public languageService: LanguageService) {
    this.drawingService = new DrawingService<Sentence>(model => this.extractFirstLetterOfTranslation(model));
  }

  ngOnInit(): void {
    this.loadSentences();
  }

  loadSentences(): void {
    this.loading = true;
    this.finderService.find(this.buildSearchPredicate())
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        sentences => this.sentences = this.filterByCategory(sentences),
        console.error
      );
  }

  onCommandSelect(selectedCommand: InputCellCommand): void {
    this.command.next(selectedCommand);
  }

  private filterByCategory(sentences: Sentence[]): Sentence[] {
    return this.filtersForCategories.get(this.filteringCategory)(sentences);
  }

  private extractFirstLetterOfTranslation(sentence: Sentence): string {
    return sentence.getInfinitiveTranslations(this.languageService.getCurrentLanguage()).charAt(0);
  }

  private buildSearchPredicate(): Predicate<Sentence> {
    return verbForm => this.difficultyLevelCondition(verbForm);
  }

  private difficultyLevelCondition(verbForm: Sentence): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || verbForm.classification === classification;
  }
}
