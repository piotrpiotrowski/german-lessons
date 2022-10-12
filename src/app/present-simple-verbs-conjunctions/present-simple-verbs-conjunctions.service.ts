import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Language} from '../language/language';
import {MatrixFinderService} from '../shared/matrix-finder.service';
import {FinderService} from '../shared/finder.service';
import {presentSimpleVerbsConjunctions} from './present-simple-verbs-conjunctions.datasource';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentSimpleVerbsConjunctionsService implements FinderService<TrainingRowModel> {

  private finderService = new MatrixFinderService<TrainingRowModel>(presentSimpleVerbsConjunctions, (columns) => {
      const extractVerb = (definition: string) => definition.substring(definition.indexOf(' ') + 1);
      return of(new TrainingRowModel(new Map<Language, string>([[Language.ENGLISH, columns[0]], [Language.POLISH, columns[1]], [Language.GERMAN, extractVerb(columns[6])]]),
        +columns[9],
        [
          new Answer('i', extractVerb(columns[3])),
          new Answer('youSingular', extractVerb(columns[4])),
          new Answer('heSheIt', extractVerb(columns[5])),
          new Answer('we', extractVerb(columns[6])),
          new Answer('youPlural', extractVerb(columns[7]))
        ]));
    }
  );

  find = (predicate: Predicate<TrainingRowModel>) => this.finderService.find(predicate);
}
