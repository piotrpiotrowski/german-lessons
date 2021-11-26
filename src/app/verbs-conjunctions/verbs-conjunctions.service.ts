import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {CsvFinderService} from '../shared/csv-finder.service';
import {FinderService} from '../shared/finder.service';
import {rawVerbsConjunctions} from './verbs-conjunctions.datasource';

@Injectable({
  providedIn: 'root'
})
export class VerbsConjunctionsService implements FinderService<TrainingRowModel> {

  private finderService = new CsvFinderService<TrainingRowModel>(rawVerbsConjunctions, columns => this.mapToTrainingRowModel(columns));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);

  private mapToTrainingRowModel = (columns) =>
    new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, this.extractVerb(columns[6])]]),
      +columns[9],
      [
        new Answer('i', this.extractVerb(columns[3])),
        new Answer('youSingular', this.extractVerb(columns[4])),
        new Answer('heSheIt', this.extractVerb(columns[5])),
        new Answer('we', this.extractVerb(columns[6])),
        new Answer('youPlural', this.extractVerb(columns[7]))
      ])

  private extractVerb = (definition: string) => definition.substring(definition.indexOf(' ') + 1);
}
