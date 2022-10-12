import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {MatrixFinderService} from '../shared/matrix-finder.service';
import {FinderService} from '../shared/finder.service';
import {personalPronouns} from './personal-pronouns.datasource';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalPronounsService implements FinderService<TrainingRowModel> {

  private finderService = new MatrixFinderService<TrainingRowModel>(personalPronouns, (columns) =>
    of(new TrainingRowModel(
      new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, columns[2]]]),
      +columns[6],
      [
        new Answer('nominative', columns[2]),
        new Answer('genitive', columns[3]),
        new Answer('accusative', columns[4]),
        new Answer('dative', columns[5])
      ])
    ));

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);
}
