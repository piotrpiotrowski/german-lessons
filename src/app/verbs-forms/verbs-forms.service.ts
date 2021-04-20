import {Injectable, Predicate} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {fromArray} from 'rxjs/internal/observable/fromArray';

@Injectable({
  providedIn: 'root'
})
export class VerbsFormsService {

  parsedVerbsForms: Observable<string[]>;
  rawVerbsForms = `bake;piec;backen;bäckt;backte;hat gebacken;2
command;rozkazywać;befehlen;befiehlt;befahl;hat befohlen;2
begin;zaczynać;beginnen;beginnt;begann;hat begonnen;2
bite;gryźć;beißen;beißt;biss;hat gebissen;3
salvage;zbawiać;bergen;birgt;barg;hat geborgen;3
burst;pękać;bersten;birst;barst;ist geborsten;4
induce;nakłaniać;bewegen;bewegt;bewog;hat bewogen;2
cheat;oszukiwać;betrügen;betrügt;betrog;hat betrogen;4
bend, turn;giąć;biegen;biegt;bog;hat gebogen;4
offer;oferować;bieten;bietet;bot;hat geboten;1
bind, tie;wiązać;binden;bindet;band;hat gebunden;3
ask, request;prosić;bitten;bittet;bat;hat gebeten;2
blow;dmuchać;blasen;bläst;blies;hat geblasen;2
stay;pozostawać;bleiben;bleibt;blieb;ist geblieben;1
fry;smażyć, piec;braten;bratet;briet;hat gebraten;3
break;łamać;brechen;bricht;brach;ist gebrochen;3
burn;płonąć;brennen;brennt;brannte;hat gebrannt;3
bring;przynosić;bringen;bringt;brachte;hat gebracht;2
think;myśleć;denken;denkt;dachte;hat gedacht;1
rent;wynajmować;dingen;dingt;dang;hat gedungen;3
thresh;młócić, tłuc;dreschen;drischt;drosch;hat gedroschen;4
penetrate;przenikać;dringen;dringt;drang;ist gedrungen;3
may, be allowed;móc, mieć pozwolenie;dürfen;darf;durfte;hat gedurft;1
recommend;polecać;empfehlen;empfiehlt;empfahl;hat empfohlen;1
go out of light;wygasać;erlöschen;erlischt;erlosch;ist erloschen;4
choose, elect;wybierać coś, kogoś;erkiesen;erkiest;erkor;hat erkoren;2
scale, climb;wspinać się;erklimmen;erklimmt;erklomm;hat erklommen;4
be startled;wystraszyć się;erschrecken;erschrickt;erschrak;ist erschrocken;4
consider;rozważać;erwägen;erwägt;erwog;hat erwogen;2
eat;jeść;essen;isst;aß;hat gegessen;1
drive, go;jechać, zawozić;fahren;fährt;fuhr;ist gefahren;1
fall;upadać;fallen;fällt;fiel;ist gefallen;1
catch;łapać;fangen;fängt;fing;hat gefangen;2
fight, fence;walczyć;fechten;ficht;focht;hat gefochten;2
find;znajdować;finden;findet;fand;hat gefunden;1
braid, plait;pleść;flechten;flicht;flocht;hat geflochten;4
fly;latać;fliegen;fliegt;flog;ist geflogen;2
flee;uciekać;fliehen;flieht;floh;ist geflohen;4
flow;płynąć;fließen;fließt;floss;ist geflossen;3
eat;żreć;fressen;frisst;fraß;hat gefressen;3
freeze;marznąć;frieren;friert;fror;hat gefroren;4
ferment;fermentować;gären;gärt;gor;ist gegoren;4
give birth;rodzić;gebären;gebärt;gebar;hat geboren;4
give;dawać;geben;gibt;gab;hat gegeben;1
thrive;rozwijać się;gedeihen;gedeiht;gedieh;ist gediehen;4
walk, go;iść;gehen;geht;ging;ist gegangen;1
succeed;udawać się;gelingen;gelingt;gelang;ist gelungen;3
be valid, be worth;być ważnym, być godnym;gelten;gilt;galt;hat gegolten;3
recover;zdrowieć;genesen;genest;genas;ist genesen;4
enjoy;rozkoszywać się;genießen;genießt;genoss;hat genossen;2
occur;wydarzać się;geschehen;geschieht;geschah;ist geschehen;2
win, gain;wygrywać;gewinnen;gewinnt;gewann;hat gewonnen;2
pour;podlewać;gießen;gießt;goss;hat gegossen;2
resemble;być podobnym;gleichen;gleicht;glich;hat geglichen;2
glide, slide;ślizgać się;gleiten;gleitet;glitt;ist geglitten;4
smoulder;tlić się;glimmen;glimmt;glomm;hat geglommen;4
dig;kopać;graben;gräbt;grub;hat gegraben;3
seize;chwytać;greifen;greift;griff;hat gegriffen;3
have;mieć;haben;hat;hatte;hat gehabt;1
hold;trzymać;halten;hält;hielt;hat gehalten;2
be hanging;wisieć;hängen;hängt;hing;hat gehangen;2
hit;bić, lać;hauen;haut;hieb;hat gehauen;3
lift;podnosić;heben;hebt;hob;hat gehoben;3
be called;nazywać się;heißen;heißt;hieß;hat geheißen;1
help;pomagać;helfen;hilft;half;hat geholfen;1
know;znać;kennen;kennt;kannte;hat gekannt;1
sound;brzmieć, dzwonić;klingen;klingt;klang;hat geklungen;2
pinch;szczypać;kneifen;kneift;kniff;hat gekniffen;4
come;przychodzić;kommen;kommt;kam;ist gekommen;1
can, be able to;móc, umieć;können;kann;konnte;hat gekonnt;1
crawl, creep;pełzać;kriechen;kriecht;kroch;ist gekrochen;4
load;ładować;laden;lädt;lud;hat geladen;1
let;kazać, zostawiać, pozwolić;lassen;lässt;ließ;hat gelassen;1
run;biec;laufen;läuft;lief;ist gelaufen;1
suffer;cierpieć;leiden;leidet;litt;hat gelitten;2
lend;pożyczać;leihen;leiht;lieh;hat geliehen;2
read;czytać;lesen;liest;las;hat gelesen;1
lie, be lying;leżeć;liegen;liegt;lag;hat gelegen;1
tell a lie;kłamać;lügen;lügt;log;hat gelogen;3
grind;mleć;mahlen;mahlt;mahlte;hat gemahlen;4
avoid;unikać;meiden;meidet;mied;hat gemieden;3
milk;doić;melken;melkt;molk;hat gemolken;4
measure;mierzyć;messen;misst;maß;hat gemessen;2
fail;nie udać się;misslingen;misslingt;misslang;ist misslungen;3
like;lubić;mögen;mag;mochte;hat gemocht;1
must, have to;musieć;müssen;muss;musste;hat gemusst;1
take;brać;nehmen;nimmt;nahm;hat genommen;1
name, call;nazywać;nennen;nennt;nannte;hat genannt;2
whistle;gwizdać;pfeifen;pfeift;pfiff;hat gepfiffen;3
praise;chwalić;preisen;preist;pries;hat gepriesen;3
gush, well up;tryskać;quellen;quillt;quoll;ist gequollen;3
advise;radzić;raten;rät;riet;hat geraten;3
rub;trzeć;reiben;reibt;rieb;hat gerieben;2
rip, tear;rozrywać;reißen;reißt;riss;ist gerissen;4
ride a horse;jeździć konno;reiten;reitet;ritt;ist geritten;3
run;pędzić;rennen;rennt;rannte;ist gerannt;3
smell;pachnieć;riechen;riecht;roch;hat gerochen;4
wrestle;walczyć;ringen;ringt;rang;hat gerungen;2
flow, trickle;ciec;rinnen;rinnt;rann;ist geronnen;4
call, cry out;wołać;rufen;ruft;rief;hat gerufen;1
salt;solić;salzen;salzt;salzte;hat gesalzen;3
drink, booze;chlać;saufen;säuft;soff;hat gesoffen;4
suck;ssać;saugen;saugt;sog;hat gesogen;4
create;tworzyć;schaffen;schafft;schuf;hat geschaffen;2
separate, depart;rozwodzić;scheiden;scheidet;schied;ist geschieden;3
seem, shine;świecić;scheinen;scheint;schien;hat geschienen;3
shit;srać;scheißen;scheißt;schiss;hat geschissen;4
scold;zwymyślać;schelten;schilt;schalt;hat gescholten;2
shear, clip;kosić, przycinać;scheren;schert;schor;hat geschoren;3
push, shove;przesuwać;schieben;schiebt;schob;hat geschoben;3
shoot;strzelać;schießen;schießt;schoss;hat geschossen;3
sleep;spać;schlafen;schläft;schlief;hat geschlafen;1
flay;łupić;schinden;schindet;schindete;hat geschunden;4
hit, beat;bić;schlagen;schlägt;schlug;hat geschlagen;2
creep, sneak;skradać się;schleichen;schleicht;schlich;ist geschlichen;4
grind, sharpen;ciągnąć, trzeć;schleifen;schleift;schliff;hat geschliffen;4
close, shut;zamykać;schließen;schließt;schloss;hat geschlossen;1
wind, wrap;połykać;schlingen;schlingt;schlang;hat geschlungen;4
fling, chuck;wywalać, rzucać;schmeißen;schmeißt;schmiss;hat geschmissen;4
melt;topić, topnieć;schmelzen;schmilzt;schmolz;ist geschmolzen;3
cut;kroić, ciąć;schneiden;schneidet;schnitt;hat geschnitten;3
write;pisać;schreiben;schreibt;schrieb;hat geschrieben;1
scream, shout;krzyczeć;schreien;schreit;schrie;hat geschrieen;3
stride;kroczyć;schreiten;schreitet;schritt;ist geschritten;4
be silent;milczeć;schweigen;schweigt;schwieg;hat geschwiegen;3
swell;puchnąć;schwellen;schwillt;schwoll;ist geschwollen;4
swim;pływać;schwimmen;schwimmt;schwamm;ist geschwommen;2
disappear;znikać, zmniejszać się;schwinden;schwindet;schwand;ist geschwunden;3
swing;wymachiwać, drżeć;schwingen;schwingt;schwang;ist geschwungen;4
swear;przysięgać;schwören;schwört;schwor;hat geschworen;4
see;widzieć;sehen;sieht;sah;hat gesehen;1
be;być;sein;ist;war;ist gewesen;1
send;wysyłać;senden;sendet;sandte;hat gesandt;1
boil;gotować;sieden;siedet;sott;hat gesotten;4
sing;śpiewać;singen;singt;sang;hat gesungen;2
sink;tonąć;sinken;sinkt;sank;ist gesunken;3
meditate;rozmyślać;sinnen;sinnt;sann;hat gesonnen;4
sit, be sitting;siedzieć;sitzen;sitzt;saß;hat gesessen;1
shall, be supposed to;mieć powinność;sollen;soll;sollte;hat gesollt;4
split, cleave;dzielić, rozłupywać;spalten;spaltet;spaltete;hat gespalten;4
spit;zionąć, buchać, pluć;speien;speit;spie;hat gespieen;4
spin, be stupid;prząść, pleść;spinnen;spinnt;spann;hat gesponnen;4
speak;mówić, rozmawiać;sprechen;spricht;sprach;hat gesprochen;1
sprout;kiełkować;sprießen;sprießt;spross;ist gesprossen;4
jump;skakać;springen;springt;sprang;ist gesprungen;2
prick, sting;kłuć;stechen;sticht;stach;hat gestochen;4
stand;stać;stehen;steht;stand;hat gestanden;1
steal;kraść;stehlen;stiehlt;stahl;hat gestohlen;3
climb;wchodzić, wspinać się;steigen;steigt;stieg;ist gestiegen;3
die;umierać;sterben;stirbt;starb;ist gestorben;3
splashing;rozpryskiwać się;stieben;stiebt;stob;ist gestoben;4
stink;śmierdzieć;stinken;stinkt;stank;hat gestunken;4
bump, push;pchnąć, uderzyć;stoßen;stößt;stieß;ist gestoßen;2
brash;malować;streichen;streicht;strich;hat gestrichen;4
argue;kłócić się;streiten;streitet;stritt;hat gestritten;3
wear, carry;nosić;tragen;trägt;trug;hat getragen;1
meet;spotykać;treffen;trifft;traf;hat getroffen;1
drive, drift;gnać, prowadzić, uprawiać;treiben;treibt;trieb;ist getrieben;3
step;podejść, nadepnąć;treten;tritt;trat;ist getreten;2
drink;pić;trinken;trinkt;trank;hat getrunken;1
deceive;zwodzić;trügen;trügt;trog;hat getrogen;4
do;robić, czynić;tun;tut;tat;hat getan;2
fade;blaknąć;verbleichen;verbleicht;verblich;ist verblichen;4
ruin;psuć, gnić;verderben;verdirbt;verdarb;ist verdorben;3
vex;zagniewać;verdrießen;verdrießt;verdross;hat verdrossen;4
forget;zapominać;vergessen;vergisst;vergaß;hat vergessen;1
lose;gubić, tracić;verlieren;verliert;verlor;hat verloren;2
vanish;znikać;verschwinden;verschwindet;verschwand;ist verschwunden;3
excuse;wybaczać;verzeihen;verzeiht;verzieh;hat verziehen;4
grow;rosnąć;wachsen;wächst;wuchs;ist gewachsen;3
weigh;ważyć;wägen;wägt;wog;hat gewogen;2
wash;myć, prać;waschen;wäscht;wusch;hat gewaschen;2
yield, give way;ustępować;weichen;weicht;wich;ist gewichen;2
point;wskazywać;weisen;weist;wies;hat gewiesen;3
turn;odwracać;wenden;wendet;wandte;hat gewandt;2
advertise, recruit;werbować, reklamować;werben;wirbt;warb;hat geworben;3
become;stać się, zostać;werden;wird;wurde;ist geworden;1
throw;rzucać;werfen;wirft;warf;hat geworfen;2
weigh;ważyć;wiegen;wiegt;wog;hat gewogen;2
wind;wić, wplatać;winden;windet;wand;hat gewunden;3
know;wiedzieć;wissen;weiß;wusste;hat gewusst;1
want;chcieć;wollen;will;wollte;hat gewollt;4
wring;wyżymać;wringen;wringt;wrang;hat gewrungen;4
pull, move;ciągnąć;ziehen;zieht;zog;ist gezogen;2
force;zmuszać;zwingen;zwingt;zwang;hat gezwungen;3`;

  constructor() {
    this.parsedVerbsForms = of(this.rawVerbsForms)
      .pipe(mergeMap(csv => fromArray(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<TrainingRowModel>): Observable<TrainingRowModel> {
    return this.parsedVerbsForms
      .pipe(map(columns => new TrainingRowModel(columns[0], columns[1], +columns[6], [
      new Answer('Infinitive', columns[2]),
      new Answer('Present Simple', columns[3]),
      new Answer('Past Simple', columns[4]),
      new Answer('Past Participle', columns[5])
      ])))
      .pipe(filter(predicate));
  }
}
