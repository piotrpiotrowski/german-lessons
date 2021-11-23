import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {rawPossessivePronouns} from './possessive-pronouns.datasource';

@Injectable({
  providedIn: 'root'
})
export class PossessivePronounsService implements FinderService<TrainingRowModel> {


  private finderService = new CsvFinderService<TrainingRowModel>(rawPossessivePronouns, columns => this.mapToTrainingRowModel(columns));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);

  private mapToTrainingRowModel = (columns) =>
    new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[7]]]),
      +columns[6], [
        new Answer('nominative', columns[2]),
        new Answer('genitive', columns[3]),
        new Answer('accusative', columns[4]),
        new Answer('dative', columns[5])
      ])
}
