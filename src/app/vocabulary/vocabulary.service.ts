import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {MatrixFinderService} from '../shared/matrix-finder.service';
import {FinderService} from '../shared/finder.service';
import {of} from 'rxjs';
import {VocabularyLoaderService} from '../shared/vocabulary-loader.service';
import {CsvParser} from '../shared/csv-parser';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService implements FinderService<TrainingRowModel> {

  constructor(private vocabularyLoaderService: VocabularyLoaderService) {
  }

  private finderService = new MatrixFinderService<TrainingRowModel>(new CsvParser('\n', ';').parseToMatrix(this.vocabularyLoaderService.load()), (columns: string[]) =>
    of(new TrainingRowModel(
      new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[2]]]),
      +columns[3],
      [
        new Answer('', columns[2])
      ])));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);
}
