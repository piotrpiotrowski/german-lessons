import {CsvFinderService} from './csv-finder.service';
import {SEMTEMCES_LINES} from './sentences.lines';

export const sentences = new CsvFinderService(SEMTEMCES_LINES, columns => columns).find(() => true);
