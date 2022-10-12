import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {MatrixFinderService} from '../shared/matrix-finder.service';
import {FinderService} from '../shared/finder.service';
import {nounsForms} from './nouns-forms.datasource';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NounsFormsService implements FinderService<TrainingRowModel> {

  private finderService = new MatrixFinderService<TrainingRowModel>(nounsForms, (columns: string[]) =>
    of(new TrainingRowModel(
      new Map<Language, string>([[Language.ENGLISH, columns[2].toLowerCase()], [Language.POLISH, columns[4].toLowerCase()], [Language.GERMAN, columns[1].substring(4).toLowerCase()]]),
      +columns[3],
      [
        new Answer('singular', columns[0]),
        new Answer('plural', columns[1])
      ])
    )
  );

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);

}
