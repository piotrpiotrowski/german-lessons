import {SEMTEMCES_LINES} from './sentences.lines';
import {of} from 'rxjs';
import {CsvParser} from './csv-parser';

export const sentences = new CsvParser().parseToMatrix(of(SEMTEMCES_LINES));
