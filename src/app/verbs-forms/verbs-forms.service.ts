import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {rawVerbsForms} from './verbs-forms.datasource';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';

@Injectable({
  providedIn: 'root'
})
export class VerbsFormsService implements FinderService<TrainingRowModel> {

  private finderService = new CsvFinderService<TrainingRowModel>(rawVerbsForms, columns => this.mapToTrainingRowModel(columns));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);

  private mapToTrainingRowModel = (columns: string[]): TrainingRowModel =>
    new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[2]]]),
      +columns[6],
      [
        new Answer('infinitive', columns[2]),
        new Answer('presentSimple', columns[3]),
        new Answer('pastSimple', columns[4]),
        new Answer('pastParticiple', columns[5])
      ])
}
