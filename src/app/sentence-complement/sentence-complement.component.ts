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
    new Option('randomLetter', 'BY_RANDOM_LETTER'),
    new Option('randomBookId', 'RANDOM_BOOK_ID')
  ];
  filteringCategory = this.filteringCategoryOptions[0].value;
  filtersForCategories = new Map([
    ['BY_RANDOM_LETTER', sentences => this.drawingService.filterByRandomValueOfAttribute<Sentence>(sentences, model => this.extractFirstLetterOfTranslation(model))],
    ['RANDOM_5', sentences => this.drawingService.filterRandomEntries<Sentence>(5, sentences)],
    ['RANDOM_10', sentences => this.drawingService.filterRandomEntries<Sentence>(10, sentences)],
    ['RANDOM_BOOK_ID', sentences => this.sortByChapterId(this.drawingService.filterByRandomValueOfAttribute<Sentence>(sentences, model => model.bookId))]
  ]);
  partOptions = [
    new Option('all', '0'),
    new Option('oldPart', '1'),
    new Option('newPart', '2')
  ];
  part = this.partOptions[0].value;
  booksPerPart: Set<string>[] = [
    new Set<string>(['GEN', 'EXO', 'LEV', 'NUM', 'DEU', 'JOS', 'JDG', 'RUT', '1SA', '2SA', '1KI', '2KI', '1CH', '2CH', 'EZR', 'NEH', 'EST', 'JOB', 'PSA', 'PRO', 'ECC', 'SNG', 'ISA', 'JER', 'LAM', 'EZK', 'DAN', 'HOS', 'JOL', 'AMO', 'OBA', 'JON', 'MIC', 'NAM', 'HAB', 'ZEP', 'HAG', 'ZEC', 'MAL']),
    new Set<string>(['MAT', 'MRK', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD', 'REV'])
  ];

  @Input() finderService: FinderService<Sentence>;
  @Input() title: string;

  constructor(public languageService: LanguageService, private drawingService: DrawingService) {
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
    return sentence => this.difficultyLevelCondition(sentence) && this.partCondition(sentence);
  }

  private difficultyLevelCondition(sentence: Sentence): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || sentence.classification === classification;
  }

  private partCondition(sentence: Sentence): boolean {
    const partNumber = +this.part;
    const indexOfPart = partNumber - 1;
    return partNumber === 0 || this.booksPerPart[indexOfPart].has(sentence.bookId);
  }

  private sortByChapterId(sentences: Sentence[]): Sentence[] {
    return sentences.sort((s1, s2) => s1.addressId - s2.addressId);
  }
}
