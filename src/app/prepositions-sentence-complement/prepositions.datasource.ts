import {of} from 'rxjs';
import {CsvParser} from '../shared/csv-parser';

export const prepositions = new CsvParser().parseToMatrix(of(`aus;out of;z, ze środka;aus;1
außer;except for;oprócz;außer;1
bei;at;u, przy, koło;bei;1
gegenüber;opposite of, toward someone, across from;naprzeciwko;gegenüber;1
mit;with;z;mit;1
nach;after, to, according to someone/something;do, po, według;nach;1
seit;since when, for when;od kiedy;seit;1
von;from;od, o, z;von;1
zu;to;do, ku;zu;1
ab;from time;do;ab;1
entgegen;contrary to;w przeciwieństwie do;entgegen;1
laut;according to;zgodnie z;laut;1
bis;until, up to, as far as;aż, do;bis;2
durch;through, by means of;przez;durch;2
entlang;along;wzdłuż;entlang;2
für;for;dla, za, na;für;2
gegen;against;przeciwko, około;gegen;2
ohne;without;bez;ohne;2
um;around, at a certain time, for;wokół, dookoła, o, około;um;2
wider;contrary;przeciwko, wbrew;wider;2
an;on;przy, na, w;an;3
auf;into, onto, up;na, w poziomie;auf;3
hinter;behind;za;hinter;3
in;in;do, we wnętrzu;in;3
neben;next to;obok;neben;3
über;above;nad;über;3
unter;under;pod;unter;3
vor;behind;przed;vor;3
zwischen;between;między;zwischen;3
statt;instead;zamiast;statt;4
trotz;despite;mimo;trotz;4
während;during;podczas;während;4
wegen;because of;z powodu;wegen;4
aufgrund;because of;z powodu;aufgrund;4
außerhalb;outside of;poza czymś;außerhalb;4
innerhalb;inside of;w czymś;innerhalb;4
oberhalb;above;powyżej czegoś;oberhalb;4
unterhalb;below;poniżej czegoś;unterhalb;4
dank;thanks to;dzięki;dank;4
infolge;as a result;na wskutek;infolge;4
diesseits;on this side;po tej stronie;diesseits;4
jenseits;on the other side;po tamtej stronie;jenseits;4
beiderseits;on both sides;po obu stronach;beiderseits;4
beim;at (+ article);u, przy, koło (+ rodzajnik);bei dem;4
am;at;w dla dni, o pory dnia;am;4
ans;on (+ article);przy, na, w (+ rodzajnik);an das;4
im;in (+ article);do, we wnętrzu (+ rodzajnik);in dem;4
zur;to (+ article);do, ku (+ rodzajnik);zu der;4
zum;to (+ article);do, ku (+ rodzajnik);zu dem;4
aufs;into, onto, up  (+ article);na, w poziomie (+ rodzajnik);auf das;3
vom;from (+ article);od, o, z (+ rodzajnik);von dem;4`));
