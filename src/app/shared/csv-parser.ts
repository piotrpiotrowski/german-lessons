import {from, Observable, shareReplay, switchMap} from 'rxjs';
import {map, toArray} from 'rxjs/operators';


export class CsvParser {

  constructor(private lineSeparator: string = '\n', private columnSeparator: string = ';') {
  }

  parseToMatrix = (lines: Observable<string>): Observable<string[][]> =>
    lines.pipe(switchMap(lines => from(lines.split(this.lineSeparator))))
      .pipe(map(line => line.trimEnd().split(this.columnSeparator)))
      .pipe(toArray())
      .pipe(shareReplay({bufferSize: 1, refCount: false}));
}
