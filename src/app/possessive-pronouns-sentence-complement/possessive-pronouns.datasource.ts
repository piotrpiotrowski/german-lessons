import {of} from 'rxjs';
import {CsvParser} from '../shared/csv-parser';

export const possessivePronouns = new CsvParser().parseToMatrix(of(`mein;mine (m);mój;mein;1
meines;mine (m);mój;meines;1
meinen;mine (m);mój;meinen;1
meinem;mine (m);mój;meinem;1
dein;yours (m);twój;dein;1
deines;yours (m);twój;deines;1
deinen;yours (m);twój;deinen;1
deinem;yours (m);twój;deinem;1
sein;his (m);jego (m);sein;2
seines;his (m);jego (m);seines;2
seinen;his (m);jego (m);seinen;2
seinem;his (m);jego (m);seinem;2
ihr;hers (m);jej (m);ihr;2
ihres;hers (m);jej (m);ihres;2
ihren;hers (m);jej (m);ihren;2
ihrem;hers (m);jej (m);ihrem;2
unser;ours (m);nasz;unser;3
unseres;ours (m);nasz;unseres;3
unseren;ours (m);nasz;unseren;3
unserem;ours (m);nasz;unserem;3
euer;yours (m);wasz;euer;4
eures;yours (m);wasz;eures;4
euren;yours (m);wasz;euren;4
eurem;yours (m);wasz;eurem;4
ihr;theirs (m);ich (m);ihr;3
ihres;theirs (m);ich (m);ihres;3
ihren;theirs (m);ich (m);ihren;3
ihrem;theirs (m);ich (m);ihrem;3
meine;mine (f);moja;meine;1
meiner;mine (f);moja;meiner;1
deine;yours (f);twoja;deine;1
deiner;yours (f);twoja;deiner;1
seine;his (f);jego (ż);seine;2
seiner;his (f);jego (ż);seiner;2
ihre;hers (f);jej (ż);ihre;2
ihrer;hers (f);jej (ż);ihrer;2
unsere;ours (f);nasza;unsere;3
unserer;ours (f);nasza;unserer;3
eure;yours (f);wasza;eure;4
eurer;yours (f);wasza;eurer;4
ihre;theirs (f);ich (ż);ihre;3
ihrer;theirs (f);ich (ż);ihrer;3`));
