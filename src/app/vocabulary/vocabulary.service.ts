import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {vocabulary} from './vocabulary.datasource';
import {MatrixFinderService} from '../shared/matrix-finder.service';
import {FinderService} from '../shared/finder.service';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService implements FinderService<TrainingRowModel> {

  private finderService = new MatrixFinderService<TrainingRowModel>(vocabulary, (columns: string[]) =>
    of(new TrainingRowModel(
      new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[2]]]),
      +columns[3],
      [
        new Answer('', columns[2])
      ])));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);
}
