import {Predicate} from '@angular/core';
import {FinderService} from './finder.service';


export class CsvFinderService<T> implements FinderService<T> {

  rows: T[];

  constructor(lines: string, private mapper: (columns: string[]) => T) {
    this.rows = lines.split('\n')
      .map(line => line.split(';'))
      .map(columns => this.mapper(columns))
      .filter(value => value !== null);
  }

  find(predicate: Predicate<T>): T[] {
    return this.rows.filter(predicate);
  }
}
