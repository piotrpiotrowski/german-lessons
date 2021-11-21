import {Component, OnInit, Predicate} from '@angular/core';
import {Sentence} from './sentence-row/sentence.model';
import {LanguageService} from '../language/language.service';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {SentenceService} from './sentence.service';
import {finalize, toArray} from 'rxjs/operators';
import {Option} from '../responsive-button-toggle-group/option.model';

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
    ['BY_RANDOM_LETTER', sentences => this.filterByRandomLetter(sentences)],
    ['RANDOM_5', sentences => this.filterRandomVerbs(5, sentences)],
    ['RANDOM_10', sentences => this.filterRandomVerbs(10, sentences)]
  ]);

  constructor(public languageService: LanguageService, private sentenceService: SentenceService) {
  }

  ngOnInit(): void {
    this.loadSentences();
  }

  loadSentences(): void {
    this.loading = true;
    this.sentenceService.find(this.buildSearchPredicate())
      .pipe(toArray())
      .pipe(finalize(() => this.loading = false))
      .subscribe(
        sentences => this.sentences = this.filterByCategory(sentences),
        console.error
      );
  }

  private filterByCategory(sentences: Sentence[]): Sentence[] {
    return this.filtersForCategories.get(this.filteringCategory)(sentences);
  }

  private filterByRandomLetter(sentences: Sentence[]): Sentence[] {
    const firstLettersOfTranslations = Array.from(new Set(sentences.map(value => this.extractFirstLetterOfTranslation(value))));
    const randomFirstLetter = firstLettersOfTranslations[this.drawRandomNumber(firstLettersOfTranslations.length)];
    return sentences.filter(value => this.extractFirstLetterOfTranslation(value) === randomFirstLetter);
  }

  private filterRandomVerbs(numberOfVerbs: number, sentences: Sentence[]): Sentence[] {
    return this.createListOfRandomIndexes(Math.min(numberOfVerbs, sentences.length), sentences.length)
      .map(i => sentences[i]);
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

  private extractFirstLetterOfTranslation(trainingRowModel: Sentence): string {
    return trainingRowModel.getInfinitiveTranslations(this.languageService.getCurrentLanguage()).charAt(0);
  }

  private buildSearchPredicate(): Predicate<Sentence> {
    return verbForm => this.difficultyLevelCondition(verbForm);
  }

  private difficultyLevelCondition(verbForm: Sentence): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || verbForm.classification === classification;
  }

  onCommandSelect(selectedCommand: InputCellCommand): void {
    this.command.next(selectedCommand);
  }
}
