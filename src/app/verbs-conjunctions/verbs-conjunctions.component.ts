import {Component, OnInit, Predicate} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {finalize, toArray} from 'rxjs/operators';
import {TrainingRowCommand} from '../training-row/training-row-command';
import {VerbsConjunctionsService} from './verbs-conjunctions.service';

@Component({
  selector: 'app-verbs-conjunctions',
  templateUrl: './verbs-conjunctions.component.html',
  styleUrls: ['./verbs-conjunctions.component.scss']
})
export class VerbsConjunctionsComponent implements OnInit {

  command: BehaviorSubject<string> = new BehaviorSubject<string>(InputCellCommand.CLEAR);
  verbsConjunctions: TrainingRowModel[];
  loading: boolean;
  translationLanguage = 0;
  difficultyLevel = '1';

  constructor(private verbsConjunctionsService: VerbsConjunctionsService) {
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
        verbsConjunctions => this.verbsConjunctions = verbsConjunctions,
        console.error
      );
  }

 private buildSearchPredicate(): Predicate<TrainingRowModel> {
    return verbConjunctions => this.difficultyLevelCondition(verbConjunctions);
  }

  private difficultyLevelCondition(verbConjunctions: TrainingRowModel): boolean {
    const classification = +this.difficultyLevel;
    return classification === 0 || verbConjunctions.classification === classification;
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
}
