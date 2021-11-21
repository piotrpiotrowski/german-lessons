import {Injectable, Predicate} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {rawPossessivePronouns} from './possessive-pronouns.datasource';

@Injectable({
  providedIn: 'root'
})
export class PossessivePronounsService {

  parsedPronouns: Observable<string[]>;

  constructor() {
    this.parsedPronouns = of(rawPossessivePronouns)
      .pipe(mergeMap(csv => from(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<TrainingRowModel>): Observable<TrainingRowModel> {
    return this.parsedPronouns
      .pipe(map(columns => new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[7]]]),
        +columns[6], [
          new Answer('nominative', columns[2]),
          new Answer('genitive', columns[3]),
          new Answer('accusative', columns[4]),
          new Answer('dative', columns[5])
        ])))
      .pipe(filter(predicate));
  }
}
