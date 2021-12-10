import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {rawNounsForms} from './nouns-forms.datasource';

@Injectable({
  providedIn: 'root'
})
export class NounsFormsService implements FinderService<TrainingRowModel> {

  private finderService = new CsvFinderService<TrainingRowModel>(rawNounsForms, columns => this.mapToTrainingRowModel(columns));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);

  private mapToTrainingRowModel = (columns: string[]): TrainingRowModel =>
    new TrainingRowModel(
      new Map<Language, string>([[Language.ENGLISH, columns[2].toLowerCase()], [Language.POLISH, columns[4].toLowerCase()], [Language.GERMAN, columns[1].substring(4).toLowerCase()]]),
      +columns[3],
      [
        new Answer('singular', columns[0]),
        new Answer('plural', columns[1])
      ])
}
