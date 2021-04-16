import {Injectable} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Observable, of} from 'rxjs';
import {map, mergeMap, shareReplay} from 'rxjs/operators';
import {fromArray} from 'rxjs/internal/observable/fromArray';

@Injectable({
  providedIn: 'root'
})
export class PersonalPronounsService {

  parsedPronouns: Observable<string[]>;
  rawPronouns = `I;ja;ich;meiner;mich;mir;0
you;ty;du;deiner;dich;dir;0
he;on;er;seiner;ihn;ihm;0
she;ona;sie;ihrer;sie;ihr;0
it;ono;es;seiner;es;ihm;0
we;my;wir;unser;uns;uns;0
you;wy;ihr;euer;euch;euch;0
they;oni;sie;ihrer;sie;ihnen;0
they formal;PaĹ„stwo;Sie;Ihrer;Sie;Ihnen;0`;

  constructor() {
    this.parsedPronouns = of(this.rawPronouns)
      .pipe(mergeMap(csv => fromArray(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(): Observable<TrainingRowModel> {
    return this.parsedPronouns
      .pipe(map(columns => new TrainingRowModel(columns[0], columns[1], +columns[6], [
      new Answer('Nominative', columns[2]),
      new Answer('Genitive', columns[3]),
      new Answer('Accusative', columns[4]),
      new Answer('Dative', columns[5])
      ])));
  }
}
