import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {MatrixFinderService} from '../shared/matrix-finder.service';
import {FinderService} from '../shared/finder.service';
import {pastSimpleVerbsConjunctions} from './past-simple-verbs-conjunctions.datasource';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastSimpleVerbsConjunctionsService implements FinderService<TrainingRowModel> {

  private finderService = new MatrixFinderService<TrainingRowModel>(pastSimpleVerbsConjunctions, (columns) => {
      const extractVerb = (definition: string) => definition.substring(definition.indexOf(' ') + 1);
      return of(new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, extractVerb(columns[2])]]),
        +columns[10],
        [
          new Answer('i', extractVerb(columns[4])),
          new Answer('youSingular', extractVerb(columns[5])),
          new Answer('heSheIt', extractVerb(columns[6])),
          new Answer('we', extractVerb(columns[7])),
          new Answer('youPlural', extractVerb(columns[8]))
        ]));
    }
  );

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);
}
