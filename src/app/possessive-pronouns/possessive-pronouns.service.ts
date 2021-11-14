import {Injectable, Predicate} from '@angular/core';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';

@Injectable({
  providedIn: 'root'
})
export class PossessivePronounsService {

  parsedPronouns: Observable<string[]>;
  rawPronouns = `I sing. m;ja lp. r.m;mein;meines;meinen;meinem;1;ich sing. m
you sing. m;ty lp. r.m;dein;deines;deinen;deinem;1;du sing. m.
he sing. m.;on lp. r.m;sein;seines;seinen;seinem;1;er sing. m.
she sing. m.;ona lp. r.m;ihr;ihres;ihren;ihrem;1;sie sing. m.
it sing. m.;ono lp. r.m;sein;seines;seinen;seinem;1;es sing. m.
we sing. m.;my lp. r.m;unser;unseres;unseren;unserem;1;wir sing. m.
you sing. m.;wy lp. r.m;euer;eures;euren;eurem;1;ihr sing. m.
they sing. m.;oni lp. r.m;ihr;ihres;ihren;ihrem;1;sie sing. m.
they formal sing. m.;Państwo lp. r.m;Ihr;Ihres;Ihren;Ihrem;1;Sie sing. m.
I sing. f;ja lp. r.ż;meine;meiner;meine;meiner;2;ich sing. f.
you sing. f;ty lp. r.ż;deine;deiner;deine;deiner;2;du sing. f.
he sing. f;on lp. r.ż;seine;seiner;seine;seiner;2;er sing. f.
she sing. f;ona lp. r.ż;ihre;ihrer;ihre;ihrer;2;sie sing. f.
it sing. f;ono lp. r.ż;seine;seiner;seine;seiner;2;es sing. f.
we sing. f;my lp. r.ż;unsere;unserer;unsere;unserer;2;wir sing. f.
you sing. f;wy lp. r.ż;eure;eurer;eure;eurer;2;ihr sing. f.
they sing. f;oni lp. r.ż;ihre;ihrer;ihre;ihrer;2;sie sing. f.
they formal sing. ;Państwo lp. r.ż;Ihre;Ihrer;Ihre;Ihrer;2;Sie sing. f.
I sing. n;ja lp. r.n;mein;meines;mein;meinem;3;ich sing. n.
you sing. n;ty lp. r.n;dein;deines;dein;deinem;3;du sing. n.
he sing. n;on lp. r.n;sein;seines;sein;seinem;3;er sing. n.
she sing. n;ona lp. r.n;ihr;ihres;ihr;ihrem;3;sie sing. n.
it sing. n;ono lp. r.n;sein;seines;sein;seinem;3;es sing. n.
we sing. n;my lp. r.n;unser;unseres;unser;unserem;3;wir sing. n.
you sing. n;wy lp. r.n;euer;eures;euer;eurem;3;ihr sing. n.
they sing. n;oni lp. r.n;ihr;ihres;ihr;ihrem;3;sie sing. n.
they formal sing. n;Państwo lp. r.n;Ihr;Ihres;Ihr;Ihrem;3;Sie sing. n.
I plur.;ja lm;meine;meiner;meine;meinen;4;ich plur.
you plur.;ty lm;deine;deiner;deine;deinen;4;du plur.
he plur.;on lm;seine;seiner;seine;seinen;4;er plur.
she plur.;ona lm;ihre;ihrer;ihre;ihren;4;sie plur.
it plur.;ono lm;seine;seiner;seine;seinen;4;es plur.
we plur.;my lm;unsere;unserer;unsere;unseren;4;wir plur.
you plur.;wy lm;eure;eurer;eure;euren;4;ihr plur.
they plur.;oni lm;ihre;ihrer;ihre;ihren;4;sie plur.
they formal plur.;Państwo lm;Ihre;Ihrer;Ihre;Ihren;4;Sie plur.`;

  constructor() {
    this.parsedPronouns = of(this.rawPronouns)
      .pipe(mergeMap(csv => fromArray(csv.split('\n'))))
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
