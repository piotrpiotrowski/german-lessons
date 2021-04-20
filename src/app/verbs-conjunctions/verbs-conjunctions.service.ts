import {Injectable} from '@angular/core';
import {TrainingRowModel} from '../training-row/training-row.model';
import {Answer} from '../training-row/answer.model';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap, shareReplay} from 'rxjs/operators';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {Predicate} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerbsConjunctionsService {

  parsedVerbConjunctions: Observable<string[]>;
  rawVerbConjunctions = `bake;piec;Indikativ Präsens;ich backe;du bäckst;er/sie/es bäckt;wir backen;ihr backt;Sie backen;2
command;rozkazywać;Indikativ Präsens;ich befehle;du befiehlst;er/sie/es befiehlt;wir befehlen;ihr befehlt;Sie befehlen;2
salvage;zbawiać;Indikativ Präsens;ich berge;du birgst;er/sie/es birgt;wir bergen;ihr bergt;Sie bergen;3
burst;pękać;Indikativ Präsens;ich berste;du birst;er/sie/es birst;wir bersten;ihr berstet;Sie bersten;4
blow;dmuchać;Indikativ Präsens;ich blase;du bläst;er/sie/es bläst;wir blasen;ihr blast;Sie blasen;2
break;łamać;Indikativ Präsens;ich breche;du brichst;er/sie/es bricht;wir brechen;ihr brecht;Sie brechen;3
thresh;młócić, tłuc;Indikativ Präsens;ich dresche;du drischst;er/sie/es drischt;wir dreschen;ihr drescht;Sie dreschen;4
may, be allowed;móc, mieć pozwolenie;Indikativ Präsens;ich darf;du darfst;er/sie/es darf;wir dürfen;ihr dürft;Sie dürfen;1
recommend;polecać;Indikativ Präsens;ich empfehle;du empfiehlst;er/sie/es empfiehlt;wir empfehlen;ihr empfehlt;Sie empfehlen;1
go out of light;wygasać;Indikativ Präsens;ich erlösche;du erlischst;er/sie/es erlischt;wir erlöschen;ihr erlöscht;Sie erlöschen;4
be startled;wystraszyć się;Indikativ Präsens;ich erschrecke;du erschrickst;er/sie/es erschrickt;wir erschrecken;ihr erschreckt;Sie erschrecken;4
eat;jeść;Indikativ Präsens;ich esse;du isst;er/sie/es isst;wir essen;ihr esst;Sie essen;1
drive, go;jechać, zawozić;Indikativ Präsens;ich fahre;du fährst;er/sie/es fährt;wir fahren;ihr fahrt;Sie fahren;1
fall;upadać;Indikativ Präsens;ich falle;du fällst;er/sie/es fällt;wir fallen;ihr fallt;Sie fallen;1
catch;łapać;Indikativ Präsens;ich fange;du fängst;er/sie/es fängt;wir fangen;ihr fangt;Sie fangen;2
fight, fence;walczyć;Indikativ Präsens;ich fechte;du fichtst;er/sie/es ficht;wir fechten;ihr fechtet;Sie fechten;2
braid, plait;pleść;Indikativ Präsens;ich flechte;du flichtst;er/sie/es flicht;wir flechten;ihr flechtet;Sie flechten;4
eat;żreć;Indikativ Präsens;ich fresse;du frisst;er/sie/es frisst;wir fressen;ihr fresst;Sie fressen;3
give;dawać;Indikativ Präsens;ich gebe;du gibst;er/sie/es gibt;wir geben;ihr gebt;Sie geben;1
be valid, be worth;być ważnym, być godnym;Indikativ Präsens;ich gelte;du giltst;er/sie/es gilt;wir gelten;ihr geltet;Sie gelten;3
occur;wydarzać się;Indikativ Präsens;ich geschehe;du geschiehst;er/sie/es geschieht;wir geschehen;ihr gescheht;Sie geschehen;2
dig;kopać;Indikativ Präsens;ich grabe;du gräbst;er/sie/es gräbt;wir graben;ihr grabt;Sie graben;3
have;mieć;Indikativ Präsens;ich habe;du hast;er/sie/es hat;wir haben;ihr habt;Sie haben;1
hold;trzymać;Indikativ Präsens;ich halte;du hältst;er/sie/es hält;wir halten;ihr haltet;Sie halten;2
help;pomagać;Indikativ Präsens;ich helfe;du hilfst;er/sie/es hilft;wir helfen;ihr helft;Sie helfen;1
can, be able to;móc, umieć;Indikativ Präsens;ich kann;du kannst;er/sie/es kann;wir können;ihr könnt;Sie können;1
load;ładować;Indikativ Präsens;ich lade;du lädst;er/sie/es lädt;wir laden;ihr ladet;Sie laden;1
let;kazać, zostawiać, pozwolić;Indikativ Präsens;ich lasse;du lässt;er/sie/es lässt;wir lassen;ihr lasst;Sie lassen;1
run;biec;Indikativ Präsens;ich laufe;du läufst;er/sie/es läuft;wir laufen;ihr lauft;Sie laufen;1
read;czytać;Indikativ Präsens;ich lese;du liest;er/sie/es liest;wir lesen;ihr lest;Sie lesen;1
measure;mierzyć;Indikativ Präsens;ich messe;du misst;er/sie/es misst;wir messen;ihr messt;Sie messen;2
like;lubić;Indikativ Präsens;ich mag;du magst;er/sie/es mag;wir mögen;ihr mögt;Sie mögen;1
must, have to;musieć;Indikativ Präsens;ich muss;du musst;er/sie/es muss;wir müssen;ihr müsst;Sie müssen;1
take;brać;Indikativ Präsens;ich nehme;du nimmst;er/sie/es nimmt;wir nehmen;ihr nehmt;Sie nehmen;1
gush, well up;tryskać;Indikativ Präsens;ich quelle;du quillst;er/sie/es quillt;wir quellen;ihr quellt;Sie quellen;3
advise;radzić;Indikativ Präsens;ich rate;du rätst;er/sie/es rät;wir raten;ihr ratet;Sie raten;3
drink, booze;chlać;Indikativ Präsens;ich saufe;du säufst;er/sie/es säuft;wir saufen;ihr sauft;Sie saufen;4
scold;zwymyślać;Indikativ Präsens;ich schelte;du schiltst;er/sie/es schilt;wir schelten;ihr scheltet;Sie schelten;2
sleep;spać;Indikativ Präsens;ich schlafe;du schläfst;er/sie/es schläft;wir schlafen;ihr schlaft;Sie schlafen;1
hit, beat;bić;Indikativ Präsens;ich schlage;du schlägst;er/sie/es schlägt;wir schlagen;ihr schlagt;Sie schlagen;2
melt;topić, topnieć;Indikativ Präsens;ich schmelze;du schmilzt;er/sie/es schmilzt;wir schmelzen;ihr schmelzt;Sie schmelzen;3
swell;puchnąć;Indikativ Präsens;ich schwelle;du schwillst;er/sie/es schwillt;wir schwellen;ihr schwellt;Sie schwellen;4
see;widzieć;Indikativ Präsens;ich sehe;du siehst;er/sie/es sieht;wir sehen;ihr seht;Sie sehen;1
be;być;Indikativ Präsens;ich bin;du bist;er/sie/es ist;wir sind;ihr seid;Sie sind;1
shall, be supposed to;mieć powinność;Indikativ Präsens;ich soll;du sollst;er/sie/es soll;wir sollen;ihr sollt;Sie sollen;4
speak;mówić, rozmawiać;Indikativ Präsens;ich spreche;du sprichst;er/sie/es spricht;wir sprechen;ihr sprecht;Sie sprechen;1
prick, sting;kłuć;Indikativ Präsens;ich steche;du stichst;er/sie/es sticht;wir stechen;ihr stecht;Sie stechen;4
steal;kraść;Indikativ Präsens;ich stehle;du stiehlst;er/sie/es stiehlt;wir stehlen;ihr stehlt;Sie stehlen;3
die;umierać;Indikativ Präsens;ich sterbe;du stirbst;er/sie/es stirbt;wir sterben;ihr sterbt;Sie sterben;3
bump, push;pchnąć, uderzyć;Indikativ Präsens;ich stoße;du stößt;er/sie/es stößt;wir stoßen;ihr stoßt;Sie stoßen;2
wear, carry;nosić;Indikativ Präsens;ich trage;du trägst;er/sie/es trägt;wir tragen;ihr tragt;Sie tragen;1
meet;spotykać;Indikativ Präsens;ich treffe;du triffst;er/sie/es trifft;wir treffen;ihr trefft;Sie treffen;1
step;podejść, nadepnąć;Indikativ Präsens;ich trete;du trittst;er/sie/es tritt;wir treten;ihr tretet;Sie treten;2
do;robić, czynić;Indikativ Präsens;ich tue;du tust;er/sie/es tut;wir tun;ihr tut;Sie tun;2
ruin;psuć, gnić;Indikativ Präsens;ich verderbe;du verdirbst;er/sie/es verdirbt;wir verderben;ihr verderbt;Sie verderben;3
forget;zapominać;Indikativ Präsens;ich vergesse;du vergisst;er/sie/es vergisst;wir vergessen;ihr vergesst;Sie vergessen;1
grow;rosnąć;Indikativ Präsens;ich wachse;du wächst;er/sie/es wächst;wir wachsen;ihr wachst;Sie wachsen;3
wash;myć, prać;Indikativ Präsens;ich wasche;du wäschst;er/sie/es wäscht;wir waschen;ihr wascht;Sie waschen;2
advertise, recruit;werbować, reklamować;Indikativ Präsens;ich werbe;du wirbst;er/sie/es wirbt;wir werben;ihr werbt;Sie werben;3
become;stać się, zostać;Indikativ Präsens;ich werde;du wirst;er/sie/es wird;wir werden;ihr werdet;Sie werden;1
throw;rzucać;Indikativ Präsens;ich werfe;du wirfst;er/sie/es wirft;wir werfen;ihr werft;Sie werfen;2
know;wiedzieć;Indikativ Präsens;ich weiß;du weißt;er/sie/es weiß;wir wissen;ihr wisst;Sie wissen
Indikativ Präsens;ich weiß;du weißt;er/sie/es weiß;wir wissen;ihr wißt;Sie wissen;1
want;chcieć;Indikativ Präsens;ich will;du willst;er/sie/es will;wir wollen;ihr wollt;Sie wollen;4`;

  constructor() {
    this.parsedVerbConjunctions = of(this.rawVerbConjunctions)
      .pipe(mergeMap(csv => fromArray(csv.split('\n'))))
      .pipe(map(line => line.split(';')))
      .pipe(shareReplay());
  }

  find(predicate: Predicate<TrainingRowModel>): Observable<TrainingRowModel> {
    return this.parsedVerbConjunctions
      .pipe(map(columns => new TrainingRowModel(columns[0], columns[1], +columns[9], [
      new Answer('ich', this.extractVerb(columns[3])),
      new Answer('du', this.extractVerb(columns[4])),
      new Answer('er/sie/es', this.extractVerb(columns[5])),
      new Answer('ihr', this.extractVerb(columns[7]))
      ])))
      .pipe(filter(predicate));
  }

  private extractVerb = (definition: string) => definition.substring(definition.indexOf(' ') + 1)
}
