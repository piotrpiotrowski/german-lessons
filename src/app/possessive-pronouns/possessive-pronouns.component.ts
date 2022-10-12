import {Component, OnInit, Predicate} from '@angular/core';
import {BehaviorSubject, NEVER, Observable} from 'rxjs';
import {InputCellCommand} from '../input-cell/input-cell-command';
import {TrainingRowModel} from '../training-row/training-row.model';
import {finalize} from 'rxjs/operators';
import {PossessivePronounsService} from './possessive-pronouns.service';
import {LanguageService} from '../language/language.service';
import {Option} from '../responsive-button-toggle-group/option.model';

@Component({
  selector: 'app-possessive-pronouns',
  templateUrl: './possessive-pronouns.component.html',
  styleUrls: ['./possessive-pronouns.component.scss']
})
export class PossessivePronounsComponent implements OnInit {

  command = new BehaviorSubject<InputCellCommand>(InputCellCommand.NOOP);
  pronouns: Observable<TrainingRowModel[]> = NEVER;
  loading: boolean = false;
  formTypeOptions = [
    new Option('all', '0'),
    new Option('singularMasculine', '1'),
    new Option('singularFeminine', '2'),
    new Option('singularNeutral', '3'),
    new Option('plural', '4')
  ];
  formType = this.formTypeOptions[0].value;

  constructor(private possessivePronounsService: PossessivePronounsService, public languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.loadPronouns();
  }

  loadPronouns(): void {
    this.loading = true;
    this.pronouns = this.possessivePronounsService.find(this.buildSearchPredicate())
      .pipe(finalize(() => this.loading = false));
  }

  onCommandSelect(selectedCommand: InputCellCommand): void {
    this.command.next(selectedCommand);
  }

  private buildSearchPredicate(): Predicate<TrainingRowModel> {
    const classification = +this.formType;
    return pronoun => classification === 0 || pronoun.classification === classification;
  }
}
