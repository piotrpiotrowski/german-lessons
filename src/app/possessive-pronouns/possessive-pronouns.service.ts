import {Injectable, Predicate} from '@angular/core';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {TrainingRowModel} from '../training-row/training-row.model';

@Injectable({
  providedIn: 'root'
})
export class PossessivePronounsService {

  parsedPronouns: Observable<string[]>;
  rawPronouns = `I sing. m;ja lp. r.m;mein;meines;meinen;meinem;1
you sing. m;ty lp. r.m;dein;deines;deinen;deinem;1
he sing. m;on lp. r.m;sein;seines;seinen;seinem;1
she sing. m;ona lp. r.m;ihr;ihres;ihren;ihrem;1
it sing. m;ono lp. r.m;sein;seines;seinen;seinem;1
we sing. m;my lp. r.m;unser;unseres;unseren;unserem;1
you sing. m;wy lp. r.m;euer;eures;euren;eurem;1
they sing. m;oni lp. r.m;ihr;ihres;ihren;ihrem;1
they formal sing. m;Państwo lp. r.m;Ihr;Ihres;Ihren;Ihrem;1
I sing. f;ja lp. r.ż;meine;meiner;meine;meiner;2
you sing. f;ty lp. r.ż;deine;deiner;deine;deiner;2
he sing. f;on lp. r.ż;seine;seiner;seine;seiner;2
she sing. f;ona lp. r.ż;ihre;ihrer;ihre;ihrer;2
it sing. f;ono lp. r.ż;seine;seiner;seine;seiner;2
we sing. f;my lp. r.ż;unsere;unserer;unsere;unserer;2
you sing. f;wy lp. r.ż;eure;eurer;eure;eurer;2
they sing. f;oni lp. r.ż;ihre;ihrer;ihre;ihrer;2
they formal sing. ;Państwo lp. r.ż;Ihre;Ihrer;Ihre;Ihrer;3
I sing. n;ja lp. r.n;mein;meines;mein;meinem;3
you sing. n;ty lp. r.n;dein;deines;dein;deinem;3
he sing. n;on lp. r.n;sein;seines;sein;seinem;3
she sing. n;ona lp. r.n;ihr;ihres;ihr;ihrem;3
it sing. n;ono lp. r.n;sein;seines;sein;seinem;3
we sing. n;my lp. r.n;unser;unseres;unser;unserem;3
you sing. n;wy lp. r.n;euer;eures;euer;eurem;3
they sing. n;oni lp. r.n;ihr;ihres;ihr;ihrem;3
they formal sing. n;Państwo lp. r.n;Ihr;Ihres;Ihr;Ihrem;3
I plur.;ja lm;meine;meiner;meine;meinen;4
you plur.;ty lm;deine;deiner;deine;deinen;4
he plur.;on lm;seine;seiner;seine;seinen;4
she plur.;ona lm;ihre;ihrer;ihre;ihren;4
it plur.;ono lm;seine;seiner;seine;seinen;4
we plur.;my lm;unsere;unserer;unsere;unseren;4
you plur.;wy lm;eure;eurer;eure;euren;4
they plur.;oni lm;ihre;ihrer;ihre;ihren;4
they formal plur.;Państwo lm;Ihre;Ihrer;Ihre;Ihren;4`;

  constructor() {
    this.parsedPronouns = of(this.rawPronouns)
      .pipe(mergeMap(csv => fromArray(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<TrainingRowModel>): Observable<TrainingRowModel> {
    return this.parsedPronouns
      .pipe(map(columns => new TrainingRowModel(columns[0], columns[1], [columns[2], columns[3], columns[4], columns[5]], +columns[6])))
      .pipe(filter(predicate));
  }
}
