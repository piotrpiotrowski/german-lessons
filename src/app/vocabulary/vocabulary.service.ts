import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {rawVocabulary} from './vocabulary.datasource';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService implements FinderService<TrainingRowModel> {

  private finderService = new CsvFinderService<TrainingRowModel>(rawVocabulary, (columns: string[]): TrainingRowModel =>
    new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[2]]]),
      +columns[3],
      [
        new Answer('', columns[2])
      ]));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);
}
