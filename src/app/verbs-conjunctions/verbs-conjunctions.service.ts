import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {from, Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {Language} from '../language/language';
import {rawVerbConjunctions} from './verbs-conjunctions.datasource';

@Injectable({
  providedIn: 'root'
})
export class VerbsConjunctionsService {

  parsedVerbConjunctions: Observable<string[]>;

  constructor() {
    this.parsedVerbConjunctions = of(rawVerbConjunctions)
      .pipe(mergeMap(csv => from(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<TrainingRowModel>): Observable<TrainingRowModel> {
    return this.parsedVerbConjunctions
      .pipe(map(columns => new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, this.extractVerb(columns[6])]]),
        +columns[9],
        [
          new Answer('i', this.extractVerb(columns[3])),
          new Answer('youSingular', this.extractVerb(columns[4])),
          new Answer('heSheIt', this.extractVerb(columns[5])),
          new Answer('youPlural', this.extractVerb(columns[7]))
        ])))
      .pipe(filter(predicate));
  }

  private extractVerb = (definition: string) => definition.substring(definition.indexOf(' ') + 1);
}
