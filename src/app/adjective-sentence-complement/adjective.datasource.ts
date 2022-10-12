import {of} from 'rxjs';
import {CsvParser} from '../shared/csv-parser';

export const adjective = new CsvParser().parseToMatrix(of(`verängstigt;scared;wystraszony, zatrwożony;verängstigt;1
horizontal;horizontal;horyzontalny;horizontal;1
kindlich;like a child, childlike;dziecięco, dziecinnie;kindlich;1
dickköpfig;stubbornly, pigheadedly, bullishly;twardogłowy;dickköpfig;1
eckig;angular, square;kwadratowy, kanciasty;eckig;1
unnormal;abnormal;abnormal, subnormal, anormal, normal;unnormal;1
zwanglos;casual,informal;nieskrępowanie, dowolnie, niewymuszenie, bez przymusu, swobodnie, bezceremonialnie;zwanglos;1
wellig;wavily;pofalowane;wellig;1
geistreich;witty, brilliant;błyskotliwie;geistreich;1
erhältlich;obtainable, procurable;do dostania;erhältlich;1
entscheidend;decisive;decydujący, poważny;entscheidend;1
deutlich;clear, distinct, obvious;wyraźnie, wyraźny;deutlich;1
intelligent;smart, intelligent;inteligentny;intelligent;1
persönlich;personal, private;osobisty, sam;persönlich;1
spät;late;późno;spät;1
indirekt;indirect;pośredni;indirekt;1
nostalgisch;nostalgic;nostalgiczny;nostalgisch;1
heiter;cheerful;beztroski, pogodny, jowialny;heiter;1
engstirnig;narrow-minded;tępy;engstirnig;1
zerstreut;absent-minded, confused;roztargniony;zerstreut;1
übertragbar;communicable, infectious;przenośny;übertragbar;1
kräftig;strong,hearty;silny;kräftig;1
infantil;in an infantile way;infantylny;infantil;1
gewissenhaft;diligent;skrupulatny;gewissenhaft;1
eisig;icy,frosty;mroźny, lodowaty, blady;eisig;1
unbeholfen;clumsy;niezręcznie, nieporadnie, niezdarnie, niezgrabnie, dziwacznie, niedołężnie;unbeholfen;1
exzentrisch;eccentric;ekscentryczny;exzentrisch;1
amüsiert;amused;rozerwać, śmieszyć;amüsiert;1
aufgeklärt;enlightened, well-informed;oświecony, uświadomiony;aufgeklärt;1
hilfreich;helpful;pomocny;hilfreich;1
gewiss;certain, sure;pewny, pewien;gewiss;1
sonstig;other,sundry;inny, pozostały;sonstig;1
herzlos;heartless, unfeeling;bez serca;herzlos;1
kritisch;critical;krytyczny;kritisch;1
charmant;charming;szarmancki;charmant;1
schutzlos;defenceless, defenseless, unprotected, vulnerable;bezbronny;schutzlos;1
edel;lofty, noble-minded, noble, nobly;szlachetny;edel;1
tief;deep;głęboki;tief;1
ungleich;unequal, different;inaczej niż, w odróżnieniu od;ungleich;1
möglich;possible;możliwy;möglich;1
blondine;blond;blondynka;blondine;1
besonder;special,exceptional;szczególny, osobny, oddzielny, nadzwyczajny;besonder;1
schnell;quick, fast;szybko;schnell;1
lebhaft;lively, active;żywy, ożywiony, fertyczny, wartki;lebhaft;1
nonchalant;nonchalant, nonchalantly;nonszalancki;nonchalant;1
abergläubisch;superstitious;zabobonny, przesądny;abergläubisch;1
dicht;dense;gęsty;dicht;1
todunglücklich;desperately unhappy, extremely unhappy;śmiertelnie nieszczęśliwy;todunglücklich;1
bedrückt;glum;przygnębiony;bedrückt;1
verbissen;uptight, mean, spiteful;zacięcie, zaciekle, z zaciętym spojrzeniem, poważnie, na serio;verbissen;1
abstehend;distant, sticking out;odstające;abstehend;1
schwer;heavy,difficult;ciężki;schwer;1
offen;open, open-minded;otwarty;offen;1
wahnsinnig;mad;straszny, okropny, absurdalny, szalony, obłąkany;wahnsinnig;1
tropfnass;dripping wet;#N/A;tropfnass;1
geschätzt;valued, dear, appreciated;ceniony;geschätzt;1
melancholisch;melancholy, pensive;melancholijny;melancholisch;1
undeutlich;indistinct;ciemny, nieczytelny;undeutlich;1
verdorben;spoilt, ruined, perverted, addled, rotten, foul, vicious, perverse, spoiled;zepsuty;verdorben;1
berührt;touched;dotykać, dotknąć, ruszać, ruszyć, poruszać, ruszać się, ruszyć się;berührt;1
einfarbig;plain, monochrome;jednokolorowy, jednobarwny;einfarbig;1
ruhig;quiet, calm;spokojny;ruhig;1
ansteckend;contagious;zaraźliwy, zakaźny;ansteckend;1
kleinlich;petty, nitpicking, fussy;małostkowy;kleinlich;1
ausgezeichnet;excellent;znakomicie;ausgezeichnet;1
introvertiert;introverted;introwertyczny;introvertiert;1
besser;better;lepszy;besser;1
weich;soft, smooth;miękki;weich;1
barsch;short, abruptly, curtly;opryskliwy;barsch;1
muskulös;muscular, brawny, mesomorph, muscularly;muskularny;muskulös;1
inspiriert;inspired;inspirować;inspiriert;1
besitzlos;unpropertied;bez  majątku;besitzlos;1
rau;rough;chropawy, ochrypły, ostry, dziki, surowy, nierówny, chropowaty, nieokrzesany, opryskliwy, szorstki, zaczerwieniony;rau;1
entscheidungsfreudig;decisive;stanowczy, zdecydowany;entscheidungsfreudig;1
beharrlich;persistent, dogged;uparty, wytrwaly;beharrlich;1
großspurig;pretentious, pompous, pontifical;pyszny;großspurig;1
verärgert;upset;gniewny, zirytowany;verärgert;1
furchtbar;terrible;straszny;furchtbar;1
sorgenvoll;sorrowful;zmartwiony;sorgenvoll;1
federleicht;as light as a feather, feathery, featherweight;lekki jak piórko;federleicht;1
genügend;adequate,sufficient;wystarczająco;genügend;1
groß;tall;duże;groß;1
breit;wide;szeroki;breit;1
lässig;easy-going, laid-back;luzacki;lässig;1
emotional;emotional;uczuciowy;emotional;1
naß;wet;mokry;naß;1
realistisch;realistic;realistyczny;realistisch;1
wenig;little;niewiele, mało;wenig;1
geradlinig;straightforward, linear, rectilinear, rectilineal, straight-line, linearly;prostolinijny;geradlinig;1
sterbenslangweilig;volume_up deadly boring, dryasdust;śmiertelnie nudny;sterbenslangweilig;1
friedlich;tranquil;nastawiony pokojowo;friedlich;1
seriös;serious;poważnie, na serio;seriös;1
eifersüchtig;jealous;zawistny;eifersüchtig;1
arbeitsscheu;work-shy;leniwy;arbeitsscheu;1
hartnäckig;stubborn;uporczywie;hartnäckig;1
herrisch;volume_up magisterial, peremptory, domineering;władczy;herrisch;1
vertikal;vertical;prostopadły;vertikal;1
kompliziert;complicated;skomplikowany, złożony;kompliziert;1
blasiert;in a blasé way;zblazowany;blasiert;1
gemütlich;pleasant, cozy;przytulny, przyjemny;gemütlich;1
energisch;energetic;energiczny;energisch;1
mütterlich;maternal, maternally, motherly;macierzyński;mütterlich;1
neidisch;envious;zazdrosny;neidisch;1
niedergeschlagen;depressed, dejected;przygnębiony;niedergeschlagen;1
betrogen;betrayed, deceived;oszukany;betrogen;1
aalglatt;slippery;sprytny;aalglatt;1
flexibel;flexible;elastyczny;flexibel;1
frankiert;stamped;frankować, ofrankować, nalepić znaczek, ofrankowywać;frankiert;1
rutschig;slippery;#N/A;rutschig;1
diszipliniert;disciplined;zdyscyplinowany;diszipliniert;1
verschwiegen;discreet;przemilczeć, taić;verschwiegen;1
gültig;valid;ważny, aktualny;gültig;1
zufrieden;satisfied, content, happy;zadowolony;zufrieden;1
gebefreudig;generous, open-handed;hojny;gebefreudig;1
gemeinsam;together;wspólny;gemeinsam;1
nah;near;bliski;nah;1
unreif;immature;niedojrzały;unreif;1
trocken;dry;suchy;trocken;1
aufdringlich;pushing, intrusive, brash, meddlesome, officious, pushy, gratingly;natrętny;aufdringlich;1
unrecht;wrong;bezprawie, krzywda;unrecht;1
früh;early;wcześnie;früh;1
prächtig;rich, fine, bonny, flamboyant;okazały,z przepychem;prächtig;1
schokoladenbraun;chocolate, chocolate-brown;brązowy jak czekolada;schokoladenbraun;1
missgünstig;resentful, malevolent;zazdrosny;missgünstig;1
geräuchert;smoke-dried;wędzony;geräuchert;1
verantwortungsvoll;responsible;odpowiedzialnie;verantwortungsvoll;1
farbenfroh;colorful;kolorowy, barwny, pstrokaty;farbenfroh;1
miserabel;miserable;mizerny;miserabel;1
beschäftigt;busy;zajęty;beschäftigt;1
schmal;narrow;wąskie;schmal;1
leichtsinnig;shallow;lekkomyślny;leichtsinnig;1
erfahren;experienced;doświadczony;erfahren;1
beeindruckt;impressed;imponować, wywrzeć wrażenie;beeindruckt;1
ideenreich;volume_up inventive, imaginative, full of ideas;pomysłowy;ideenreich;1
gesellig;sociable, friendly;towarzyski;gesellig;1
narbig;volume_up scarred, pitted, foveal, scarredly;pokryty bliznami;narbig;1
gutaussehend;handsome;przystojny;gutaussehend;1
unentschlossen;undecided;niezdecydowany;unentschlossen;1
glücklich;happy, lucky, blessed;szczęśliwy;glücklich;1
langhaarig;volume_up long-haired;długowłosy;langhaarig;1
anwesend;present;obecny;anwesend;1
fit;fit, feeling good;w dobrej kondycji;fit;1
blitzschnell;fast as lightning;bardzo szybko, jak błyskawica;blitzschnell;1
traubig;botryoidal;groniasty;traubig;1
bierernst;volume_up solemn, deadly serious;bardzo poważny;bierernst;1
fruchtbar;productive, fruitful, fertile, reproductive, seminal, prolific, copious, procreative, generative, fecund, reproductively, rankly, seminally, fructuous, fecundly, rank;urodzajny;fruchtbar;1
unfreundlich;unfriendly;nieprzyjacielski;unfreundlich;1
mollig;plump, chubby;pulchny;mollig;1
fertig;finished,ready;gotowy, skończony, zrobiony;fertig;1
normal;normal;normalny;normal;1
scharf;spicy;ostry;scharf;1
unscheinbar;nondescript, unspectacular, unimpressive;niepozorny, niepokaźny;unscheinbar;1
sarkastisch;sarcastic;szyderczy;sarkastisch;1
antriebslos;volume_up powerless, torpid;apatyczny;antriebslos;1
verwundert;astonished;zdziwiony;verwundert;1
sympatisch;friendly;sympatyczny;sympatisch;1
verbildet;spoiled;#N/A;verbildet;1
diplomatisch;diplomatic;dyplomatyczny;diplomatisch;1
moralisch;moral, ethical;moralny;moralisch;1
akzeptabel;acceptable;akceptowalny, do przyjęcia;akzeptabel;1
interessant;interesting;interesujący;interessant;1
religiös;religious;religijny, pobożny;religiös;1
schlecht;bad;zły;schlecht;1
lustig;funny, amusing;wesoły;lustig;1
viel;many, a lot;wiele, dużo;viel;1
bildschön;ravishing beauty;piękny jak obrazek;bildschön;1
bedeutungslos;meaningless, insignificant, irrelevant, meaninglessly;bez  znaczenia;bedeutungslos;1
erfreut;pleased;cieszyć, ucieszyć, radować, uradować;erfreut;1
freundschaftlich;in a friendly way;przyjacielski;freundschaftlich;1
spontan;spontaneous;spontaniczny;spontan;1
erschrocken;shocked;przestraszony;erschrocken;1
arrogant;arrogant;arogancki;arrogant;1
blass;pale;blada;blass;1
unnatürlich;unnatural;nienaturalny;unnatürlich;1
tatkräftig;energetic, active;energiczny;tatkräftig;1
meisterhaft;expertly, in a masterly manner, masterfully;mistrzowski;meisterhaft;1
unwiderstehlich;irresistible;urzekająco;unwiderstehlich;1
gnadenlos;ruthless, merciless, pitiless;bezlitosny;gnadenlos;1
distanziert;distant;zdystansowany;distanziert;1
nächste;next;następna;nächste;1
steif;stiff;sztywny, ceremonialny;steif;1
leer;empty;pusty;leer;1
dünn;thin;chudy;dünn;1
verschimmelt;mouldy, moldy, mildewed, got mouldy;spleśniały;verschimmelt;1
arbeitslos;unemployed;bez robotny;arbeitslos;1
gelassen;volume_up collected, philosophical, philosophic, imperturbable, as cool as a cucumber, easy-going;opanowany;gelassen;1
toll;great;fajny;toll;1
gehorsam;obedient;posłuszny;gehorsam;1
laut;noisy, loud;głośny;laut;1
fern;remote;daleki, odległy;fern;1
unhöflich;impolite,rude;nieuprzejmy, niegrzeczny;unhöflich;1
kostenlos;free,at no charge;za darmo, darmowy, bezpłatny;kostenlos;1
durstig;thirsty;spragniony;durstig;1
geduldig;patient;cierpliwy;geduldig;1
sonnenklar;plain as a pikestaff, as plain as the nose in your face, clear as daylight;jasny jak słońce;sonnenklar;1
chaotisch;chaotic, disorganised;chaotyczny;chaotisch;1
schlechter;worse;gorzej;schlechter;1
materiell;financially, materialistically;materialny;materiell;1
eitel;vain;próżny;eitel;1
einfach;simple, plain, simply;łatwy;einfach;1
bitterböse;very bad;bardzo zły;bitterböse;1
direkt;straightforward;bezpośredni;direkt;1
durchdacht;well thought out;przemyślany,obmyślony;durchdacht;1
bargeldlos;cashless;bez gotówkowy;bargeldlos;1
bezaubernd;spellbinding, fascinating;czarujący, uroczy, czarowny, czarodziejski, olśniewający;bezaubernd;1
rücksichtsvoll;thoughtful;taktownie;rücksichtsvoll;1
eklig;gross, disgusting;obrzydliwy;eklig;1
unsozial;antisocial;#N/A;unsozial;1
krumm;crooked, hunched, bent;krzywo;krumm;1
spitz;pointed, sharp, spiked;spiczasty;spitz;1
verlockend;enticingly, temptingly, tantalizingly;kuszący, nęcący;verlockend;1
maschinell;machine, mechanical;maszynowy;maschinell;1
ernst;serious;poważny;ernst;1
fest;solid, strong, firm;stały, twardy, mocny, tęgi, krzepki, silny;fest;1
wettbewerbsfähig;competitive;konkurencyjny;wettbewerbsfähig;1
unangenehm;unpleasant;nieprzyjemny, przykry, antypatyczny;unangenehm;1
himmlisch;divine, heavenly, celestial, elysian, ethereal, wonderful, too-too;boski, niebiański;himmlisch;1
ausdauernd;persistent, persevering;wytrzymały, wieloletni, wytrwały, usilny;ausdauernd;1
pitschnass;soaking wet;#N/A;pitschnass;1
berechnend;charging, accounting, calculating, working out, invoicing;wyrachowany;berechnend;1
mürrisch;grumpy, crusty, moody, sulky, peevish, morose, surly, cantankerous, crabby, dour, fractious, sullen, peckish, dourly, glumly, morosely, querulous, liverish;mrukliwy;mürrisch;1
entspannt;relaxed;wyluzowany, zrelaksowany, rozluźniony, odprężony;entspannt;1
alt;old;stary;alt;1
ehrgeizig;ambitious;ambitny;ehrgeizig;1
fließend;fluent;biegle;fließend;1
sorgenfrei;carefree, free of worries;bezproblemowo;sorgenfrei;1
bieder;staid, trusting, unsophisticated, stolid, unadventurous, upright;prostoduszny;bieder;1
eingeschüchtert;awed;skrępowany;eingeschüchtert;1
gesprächig;talkative;rozmowny;gesprächig;1
ehrlich;honest;uczciwy;ehrlich;1
schüchtern;shy;nieśmiały;schüchtern;1
mager;thin, meagre, lean, skinny, meager, scrawny, gaunt, rawboned, scraggy, jejune, meagerly, leanly, fatless;chudy;mager;1
weltoffen;open-minded;otwarty na świat;weltoffen;1
autoritär;authoritarian;autorytatywny;autoritär;1
pickelig;spotty, pimply, spottily;pryszczata;pickelig;1
talentiert;talented;utalentowany;talentiert;1
gleichzeitig;simultaneous;jednocześnie, naraz;gleichzeitig;1
ungeduldig;impatient;niecierpliwy;ungeduldig;1
voreingenommen;prejudiced;tendencyjny;voreingenommen;1
bärenstark;volume_up strong as an ox;silny jak niedźwiedź;bärenstark;1
stark;strong, powerful;silny;stark;1
sympathisch;sympathetic;sympatyczny;sympathisch;1
enthusiastisch;enthusiastic;entuzjastycznie;enthusiastisch;1
hässlich;ugly;brzydki;hässlich;1
loyal;loyal;lojalny;loyal;1
taufrisch;as fresh as a daisy;świeży jak rosa;taufrisch;1
fristlos;instant, summary;bez terminowy;fristlos;1
jährlich;annually;roczny;jährlich;1
recht;right;prawo, sprawiedliwość, słuszność;recht;1
scheißegal;open_in_new Link zur Quelle, warning Überarbeitung erbitten;totalnie obojętny;scheißegal;1
amüsant;amusing;zabawny, śmieszny, wesoły;amüsant;1
bettelarm;destitute, penniless, dead beat, dirt poor;biedny jak żebrak;bettelarm;1
beschwipst;tipsy;podchmielony, podpity;beschwipst;1
durchsetzungsfähig;assertive;asertywny, przebojowy;durchsetzungsfähig;1
endgültig;final,definite;definitywnie;endgültig;1
lebendig;alive, lively;ożywiony,żwawy;lebendig;1
unbeugsam;inflexible, uncompromising;niezłomny;unbeugsam;1
selbstbewusst;self-confident;pewny siebie;selbstbewusst;1
aufgeschlossen;outgoing;otwarty;aufgeschlossen;1
neblig;foggy;mglisty;neblig;1
nörgelig;moaning, grumbling, grumbly, peevish;zrzędliwy;nörgelig;1
schlimm;awful;zły;schlimm;1
bösartig;curst, mean, cancerous;złośliwy;bösartig;1
bunt;colorful;kolorowy, pstry;bunt;1
kummervoll;sad, sorrowful, lugubrious, woebegone, grief-stricken;stroskany;kummervoll;1
natürlich;of course;naturalny;natürlich;1
freigebig;generous, open-handed, freely;szczodry;freigebig;1
unvorsichtig;careless;nieostrożny;unvorsichtig;1
positiv;positive;dodatni, pozytywny, dobry;positiv;1
ungezogen;ill-mannered;niegrzeczny;ungezogen;1
dreist;forward, unapologetic, brash, impudent, audacious, uppity, brazen, nervy, ballsy, arrant, confident, cheeky;bezczelny;dreist;1
unwirsch;volume_up ill-naturedly;szorstki;unwirsch;1
historisch;historical, historically;historyczny;historisch;1
ungenau;inaccurate;niedokładny;ungenau;1
einwandfrei;perfectly, flawlessly, impeccably, beyond doubt, beyond question;bez zarzutu, bezsprzeczny;einwandfrei;1
hungrig;hungry;głodny;hungrig;1
winzig;tiny;malutki, niewielki, maleńki, malusi, miniaturowy;winzig;1
wichtigtuerisch;importantly, pompously, bumptiously, in a self-important manner;pretensjonalny;wichtigtuerisch;1
verschlossen;withdrawn;zamknięty;verschlossen;1
boshaft;mean, spiteful;podstępny;boshaft;1
nachtragend;resentful, vindictive;pamiętliwy, mściwy;nachtragend;1
barbarisch;barbaric, barbarian, barbarous, barbarously, barbarically, barbarianly;barbarzyński;barbarisch;1
fehlerlos;faultlessly, without a mistake, perfectly;bez błędny;fehlerlos;1
verantwortungslos;irresponsible;nieodpowiedzialnie;verantwortungslos;1
unangebracht;inappropriate;open_in_new Link do źródła, warning Prośba o sprawdzenie;unangebracht;1
egoistisch;selfish, egoistic;egoistyczny;egoistisch;1
geizig;stingy, cheap, tight;skąpy;geizig;1
höflich;polite;uprzejmy;höflich;1
gefühlskalt;volume_up cold, unfeeling, callous, cold-hearted, frigid;nieczuły;gefühlskalt;1
beschämt;ashamed;zawstydzony;beschämt;1
künstlerisch;artistic;artystyczny;künstlerisch;1
ängstlich;anxious;strachliwy;ängstlich;1
klatschnass;wet all over;przemoknięty na wskroś;klatschnass;1
aggressiv;aggressive;agresywny;aggressiv;1
erfolgreich;successful;odnoszący sukcesy, udany;erfolgreich;1
feige;cowardly, fainthearted;tchórzliwy;feige;1
frei;free;wolny (nie uwięziony);frei;1
artig;well behaved;grzeczny;artig;1
dynamisch;vibrant, dynamic;dynamiczny, dzieci;dynamisch;1
unverschämt;imprudent,rude;bezczelny, bezwstydny;unverschämt;1
belastbar;tough, resilient;wytrzymały;belastbar;1
charakterstark;strong, of strong character;o silnym charakterze;charakterstark;1
humorvoll;humorous;wesoły, dowcipny, żartobliwy, humorystyczny;humorvoll;1
enthaltsam;abstemiously, abstinently;wstrzemięźliwy;enthaltsam;1
fasziniert;intrigued;fascynować, intrygować, pasjonować;fasziniert;1
felsenfest;firm, rock-like;mocny jak skała;felsenfest;1
unbekannt;unknown;nieznany, obcy;unbekannt;1
vergeblich;in vain, vain, no avail, unsuccessful, vainly, unavailing, without avail, unavailingly, of no avail, no purpose, futilely, futile;próżny;vergeblich;1
entschieden;stalwart, definite, energetic, stout, resolute;zdecydowany;entschieden;1
steil;steep;stromy, spadzisty;steil;1
renommiert;prestige;reomowany;renommiert;1
zickig;touchy;kapryśnie;zickig;1
erster;first;pierwszy;erster;1
nüchtern;sober;trzeźwy;nüchtern;1
zuvorkommend;volume_up accommodatingly, courteously;uprzejmy;zuvorkommend;1
pfeilschnell;as fast as an arrow;szybki jak strzała;pfeilschnell;1
mangelhaft;inadequate,deficient;z wadami, wybrakowany, z brakami, wadliwy, mierny;mangelhaft;1
eigenartig;unique;osobliwy;eigenartig;1
hell;pale;jasny;hell;1
lockig;curly;pokręcone;lockig;1
brav;well-behaved, good;dobrze wychowany;brav;1
klasse;great, awesome;super, ekstra;klasse;1
stockdumm;utterly stupid;głupi jak but;stockdumm;1
örtlich;local;miejscami;örtlich;1
erwerbbar;acquirable;dający się kupić;erwerbbar;1
ausgewogen;in a balanced way;zrównoważony,wyważony;ausgewogen;1
asketisch;austerely, ascetically;ascetyczny;asketisch;1
stolz;proud;dumny;stolz;1
preiswert;inexpensive;niedrogi;preiswert;1
gefährlich;dangerous;niebezpieczny;gefährlich;1
fromm;pious;pobożny;fromm;1
verantwortlich;responsible;odpowiedzialny;verantwortlich;1
wertlos;worthless;bezwartościowy;wertlos;1
modern;modern;nowoczesny;modern;1
übel;evil;brzydki, przykry, paskudny, nieprzyjemny, niedobry, wstrętny, zły, cuchnący, podły, zdemoralizowany;übel;1
gutherzig;kind-hearted;dobroduszny;gutherzig;1
spottbillig;dirt cheap;śmiesznie tani;spottbillig;1
blöd;stupid, ignorant;głupi, idiotyczny;blöd;1
geringwertig;inferior;marny, mierny, niskocenny;geringwertig;1
gleich;similar;taki sam;gleich;1
hochmütig;haughty, proud;butny, buńczuczny;hochmütig;1
salzig;salty, savoury;słony;salzig;1
gut angezogen;well-dressed;#N/A;gut angezogen;1
quicklebendig;animatedly, bright as a button;bardzo żywy;quicklebendig;1
rauh;rough;szorstki, chropowaty, ochrypły, chrapliwy, opryskliwy, surowy;rauh;1
ständig;constant;ciągle, bezustannie, nagminnie;ständig;1
lieb;dear,sweet;drogi, kochany, miły, mile widziany;lieb;1
schmackhaft;volume_up palatably, toothsomely, in a tasty way;smaczny;schmackhaft;1
sauteuer;expensive as heck;#N/A;sauteuer;1
angeberisch;show-off;skłonny do przechwałek;angeberisch;1
warm;warm/hot;ciepły;warm;1
erschöpft;exhausted;zmęczony, wycieńczony;erschöpft;1
besitzergreifend;possessive;zaborczy;besitzergreifend;1
souverän;sovereign, electorate;suwerenny;souverän;1
stocksteif;stiff as a poker;sztywny jakby kij połknął;stocksteif;1
staubig;dusty;zakurzony;staubig;1
redegewandt;eloquent;elokwentny;redegewandt;1
wertvoll;precious, valuable;cenny, wartościowy, kosztowny, bezcenny, drogocenny;wertvoll;1
leidenschaftlich;passionate, serious;namiętny;leidenschaftlich;1
negativ;negative;negatywny, ujemny;negativ;1
sportlich;sporty, athletic, fit;wysportowany;sportlich;1
feig;cowardly;tchórzliwy;feig;1
kompetent;competent;kompetentnie;kompetent;1
stinklangweilig;deadly boring, as dull as ditchwater;okropnie nudny;stinklangweilig;1
letzter;worst, most dreadful;ostatni;letzter;1
sonderbar;weird;dziwny;sonderbar;1
kühl;cool;chłodny;kühl;1
unsicher;unsure;nieśmiały, niepewny siebie, niebezpieczny, niepewny;unsicher;1
schuldig;guilty, owing;winny;schuldig;1
täglich;daily;codzienny;täglich;1
unbequem;uncomfortable, inconvenient, uncomfortably, inconveniently;niewygodny;unbequem;1
rabenschwarz;jet-black, pitch-dark, black as a crow, caracinous;czarny jak kruk;rabenschwarz;1
wütend;furious;wściekły;wütend;1
unmöglich;impossible;niemożliwy;unmöglich;1
regional;regional;regionalny;regional;1
samtweich;soft as velvet, velvety-soft;miękki jak aksamit;samtweich;1
arbeitsam;volume_up hardworking, laborious, industrious, plodding, painstaking, ploddingly, hard-working;pracowity;arbeitsam;1
aufgeweckt;woken, aroused, wakened, awoken, awaked;bystry;aufgeweckt;1
existenziell;volume_up existential;egzystencjalny;existenziell;1
arglos;volume_up innocently, artlessly;ufny;arglos;1
fürchten;be afraid of;bać się;fürchten;1
geschlossen;closed, reserved;zamknięty;geschlossen;1
duldsam;tolerant, indulgent, forbearing, tolerative, forbearant;cierpliwy;duldsam;1
bemerkenswert;remarkable;zasługujący na uwagę,znaczący;bemerkenswert;1
eigennützig;selfish;interesowny;eigennützig;1
modisch;fashionable, stylish;modny;modisch;1
beeindruckend;impressive;imponujący;beeindruckend;1
fein;fine, refined;dobry;fein;1
verträumt;dreamy;oniryczny;verträumt;1
überrascht;surprised;zaskoczony;überrascht;1
beste;best;najlepsza;beste;1
lernbegierig;eager to learn, studious;#N/A;lernbegierig;1
liebenswürdig;lovable, amiable;uprzejmie;liebenswürdig;1
unterschiedlich;different, diverse, varied;różnie, w różny sposób;unterschiedlich;1
typisch;typical, normal;typowy;typisch;1
vertrauenswürdig;trustworthy;godny zaufania;vertrauenswürdig;1
unabhängig;independent;samodzielny, autonomiczny;unabhängig;1
heimlich;sneaking, underhanded, surreptitious, quiet, stolen;tajemniczy/skryty;heimlich;1
herausragend;volume_up pre-eminently;wybitny;herausragend;1
allein;alone;Ładuję...;allein;1
knapp;short;zaledwie;knapp;1
mutig;courageous, gutsy;odważny;mutig;1
müde;tired;zmęczony;müde;1
hoffnungslos;hopeless;beznadziejny;hoffnungslos;1
lecker;tasty, delicious;smaczny;lecker;1
schnurgerade;unswerving, dead straight, point-blank;prosto jak po sznurku;schnurgerade;1
phlegmatisch;phlegmatic, calm, unemotional;nieruchliwy;phlegmatisch;1
sinnlos;needless, purposeless, idle, mindless, senseless, meaningless, aimless, mad;bez sensowny;sinnlos;1
wegweisend;revolutionary, pioneering, groundbreaking, path-breaking, ground-breaking;przełomowy, prekursorski;wegweisend;1
oval;oval, oval-shaped;owalna;oval;1
original;original;oryginał;original;1
schrecklich;terrible;okropny;schrecklich;1
verwöhnt;pampered, spoilt;hołubić, rozpieścić, rozpieszczać;verwöhnt;1
nagelneu;volume_up brand new;nowiuteńki;nagelneu;1
sorgsam;careful, solicitous;troskliwy;sorgsam;1
prima;goody;wspaniale;prima;1
stockfinster;pitch-dark, pitch-black;ciemniuteńko;stockfinster;1
wöchentlich;volume_up weekly, by the week;tygodniowy;wöchentlich;1
selten;rare;rzadki;selten;1
festlich;formally, ceremonially;odświętny;festlich;1
schwül;humid,stuffy;duszny, parny;schwül;1
kultiviert;sophisticated, refined;kultywować;kultiviert;1
fabelhaft;wonderful;fantastycznie, bajecznie;fabelhaft;1
pessimistisch;pessimistic;pesymistyczny;pessimistisch;1
waagerecht;horizontally, across;poziomy;waagerecht;1
zuckersüß;sugar-sweet, as sweet as sugar;jak cukier;zuckersüß;1
unpünktlich;unpunctual, tardy;niepunktualny;unpünktlich;1
selbständig;independent;samodzielnie, niezależnie;selbständig;1
senkrecht;normal, perpendicular, plumb;pionowy;senkrecht;1
ausreichend;adequate,sufficient;wystarczający, dostateczny, mierny, dopuszczający;ausreichend;1
begabt;talented, gifted;zdolny;begabt;1
extrovertiert;extroverted;ekstrawertyczny;extrovertiert;1
bewundernswert;volume_up in an admirable fashion, applaudably, admirably;godny podziwu;bewundernswert;1
tolerant;tolerant;tolerancyjny;tolerant;1
reif;ripe;dojrzały;reif;1
erwartungsvoll;expectant;oczekujący;erwartungsvoll;1
treu;loyal, true, faithful;wierny;treu;1
verlegen;embarrassed, self-conscious;zmieszany;verlegen;1
verlässlich;reliable;odpowiedzialny, zaufany, rzetelny, pewny, godny zaufania, niezawodny;verlässlich;1
emsig;industrious;zapalony,pilny;emsig;1
leise;quite;cichy;leise;1
verlobt;engaged;zaręczony;verlobt;1
anziehend;attractive;zakładać, ubrać, włożyć, wkładać, przyodziać;anziehend;1
spöttisch;mocking, scornful;szyderczy;spöttisch;1
verständlich;understandable, comprehensible, intelligible, understandably, tangible, easily comprehensible, comprehensibly, conceptional, graspable, comprehendible;zrozumiały;verständlich;1
vertrauensvoll;trustful;ufny, pełen zaufania;vertrauensvoll;1
gestrig;yesterday’s;wczorajszy;gestrig;1
eifrig;eager;pilny,pracowity;eifrig;1
zornig;wrathful;gniewny;zornig;1
mittelgroß;volume_up medium-sized, middle-sized, medium-size, middle-size, of medium height;średniego wzrostu;mittelgroß;1
akkurat;correct, accurate, exact, precise, sedulous, meticulous;dokładny;akkurat;1
gegrillt;grilled, barbecued, broiled, charbroiled, had a barbecue;grilowany;gegrillt;1
interessiert;interested;zainteresowany, zaciekawiony;interessiert;1
international;international;międzynarodowy;international;1
passiv;passive;pasywny;passiv;1
aktiv;active;aktywny;aktiv;1
unbestimmt;indefinite;nieokreślony, niepewny, niewyraźny, mglisty, niesprecyzowany;unbestimmt;1
öffentlich;public, official;publiczny;öffentlich;1
bewegungslos;stock-still, motionless, immobile, immovable;bez  ruchu, nieruchomy;bewegungslos;1
depressiv;depressed;skłonny do depresji;depressiv;1
gelähmt;paralyzed;sparaliżowany, bezwładny;gelähmt;1
verbittert;jaundiced, acerbates, embitters, filled with bitterness, acerbated, fills with bitterness, embittered;rozgoryczony;verbittert;1
seelisch;mental, psychological, emotional, psychical, mental and emotional, spiritual;duchowy;seelisch;1
fassungslos;stunned;z zaskoczeniem, ze zdziwieniem;fassungslos;1
hemmungslos;uninhibited, unworried;niepohamowany, wyuzdany, rozpasany, bezwzględny;hemmungslos;1
ungeschickt;clumsy;niezręcznie;ungeschickt;1
verschiebbar;relocatable;przesuwny;verschiebbar;1
selbstsüchtig;selfish;samolubny, egoistyczny, interesowny;selbstsüchtig;1
grausam;cruel;okrutny;grausam;1
abenteurerlich;adventurous;#N/A;abenteurerlich;1
fett;fat;tłusty;fett;1
kalt;cold, unfriendly;zimny;kalt;1
wund;sore;otarty, odparzony;wund;1
anstrengend;tiring;męczący;anstrengend;1
erschüttert;aghast;zszokowany;erschüttert;1
verdrießlich;glum, ill-humoured, annoyed;markotny, przykry, nieprzyjemny;verdrießlich;1
aufhebbar;liftable, abolishable, annullable, repealable, rescindable;dający się podnieść;aufhebbar;1
gepflegt;neat, sophisticated, smart, trim, spruce, attended, sleek, cared, cherished, fostered;zadbany;gepflegt;1
froh;happy, pleased, glad;pogodny;froh;1
taub;deaf;głuchy, odrętwiały, ścierpnięty;taub;1
gut gelaunt;cheerful, in a good mood;w dobrym nastroju;gut gelaunt;1
genial;ingenious, brilliant;genialny;genial;1
asozial;antisocial;aspołeczny;asozial;1
raffiniert;refined, elegant;z wyrafinowaniem;raffiniert;1
geschickt;skillful, clever;zgrabnie;geschickt;1
behämmert;crazy, mad;stuknięty;behämmert;1
abhängig;dependent;zależny;abhängig;1
entzückend;charming, dear, delightful, cute;zachwycający;entzückend;1
häuslich;domestic, home-loving;domowy, gospodarny;häuslich;1
traurig;sad;smutny;traurig;1
sensibel;sensitive;wrażliwy;sensibel;1
lammfromm;as gentle as a little lamb, as gentle as a lamb, as meek as a lamb, as meek as a little lamb, gentle;pobożny jak baranek;lammfromm;1
richtig;right,correct;prawdziwy;richtig;1
beherzt;feisty, spirited, stout-hearted;odważny/zdecydowany;beherzt;1
übrig;left over,remaining;Ładuję...;übrig;1
träge;lethargic, lazy, sluggish;ociężały;träge;1
berühmt;famous;sławny,słynny;berühmt;1
stur;stubborn;uparty;stur;1
kuschelweich;beautifully soft;bardzo miękki, jak kaczuszka;kuschelweich;1
schweigsam;uncommunicative, reserved, taciturn;milczący;schweigsam;1
aufsässig;fractious, truculent, bolshie, implike, restive;przekorny;aufsässig;1
liberal;liberal, tolerant;liberalny;liberal;1
atemlos;out of breath, breathlessly;bez  tchu;atemlos;1
erzfaul;lazy;arcyleniwy;erzfaul;1
neu;new;nowy;neu;1
gesund;healthy;zdrowy;gesund;1
konservativ;conservative;konserwatywny, zachowawczy;konservativ;1
letzte;last;ostatnia;letzte;1
taktvoll;tactful, discreet;taktownie;taktvoll;1
reinlichkeitsliebend;cleanliness-loving;schludny;reinlichkeitsliebend;1
himmelblau;volume_up azure, sky blue;błękitny jak niebo;himmelblau;1
lebensfroh;full of zest for life;cieszący się życiem;lebensfroh;1
notwendig;necessary;niezbędny, potrzebny, konieczny;notwendig;1
optimistisch;optimistic;optymistyczny;optimistisch;1
kommunikativ;communicative;komunikacyjny, komunikatywny;kommunikativ;1
unzufrieden;dissatisfied, discontent, unhappy;niezadowolony;unzufrieden;1
oberflächlich;superficial, shallow;powierzchowny;oberflächlich;1
anregend;volume_up invigorating;pobudzający,interesujący;anregend;1
unähnlich;different;ansehnlich, unehelich, unehrlich, ähnlich;unähnlich;1
wunderschön;gorgeous;przepięknie, prześlicznie;wunderschön;1
selbstlos;unselfish;bezinteresowny;selbstlos;1
wahrscheinlich;probable, plausible;prawdopodobny;wahrscheinlich;1
sensationell;sensational;sensacyjny;sensationell;1
strebsam;ambitious and industrious;pilny/ambitny;strebsam;1
verantwortungsbewusst;responsible;odpowiedzialnie;verantwortungsbewusst;1
rücksichtslos;ruthless, inconsiderate;bezwzględny;rücksichtslos;1
gebraten;fried, baked, roasted;smażony;gebraten;1
unsportlich;unathletic, unsporting, out of shape;niesportowy, niewysportowany;unsportlich;1
erschreckt;frightened;przestraszyć, przerazić, przestraszyć się, zlęknąć się, zląc się;erschreckt;1
schwerfällig;cumbersome, heavy, sluggish;ciężki, nieruchliwy, kanciasty;schwerfällig;1
cholerisch;choleric;choleryczny;cholerisch;1
schwermütig;gloomy, melancholic;#N/A;schwermütig;1
windig;windy;wietrzny;windig;1
Humor haben;open_in_new Link zur Quelle, warning Überarbeitung erbitten;mieć poczucie humoru;Humor haben;1
hellwach;wide awake;bardzo bystry, całkiem rozbudzony;hellwach;1
wild;wild;dziko, bujnie, zaciekły;wild;1
romantisch;romantic;romantyczny;romantisch;1
verletzlich;vulnerable;wrażliwy;verletzlich;1
halb;half;w pół do;halb;1
unerfahren;inexperienced;niedoświadczony;unerfahren;1
monatlich;monthly;miesięczny;monatlich;1
kaputt;broken;zepsuty;kaputt;1
riesig;huge;wielki;riesig;1
nachdenklich;thoughtful;zamyślony;nachdenklich;1
bissig;acidly, caustically, waspishly, maliciously, cuttingly, scathingly;zjadliwy;bissig;1
fröhlich;cheerful, merry;wesoły;fröhlich;1
einfühlsam;empathetic;ciepły, wrażliwy, wyrozumiały, empatyczny;einfühlsam;1
unordentlich;messy;niezorganizowany, nieporządny;unordentlich;1
faul;lazy;leniwy;faul;1
aufmerksam;attentive;uważny;aufmerksam;1
langweilig;boring;nudny;langweilig;1
besonders;special;szczególnie, zwłaszcza, specjalnie;besonders;1
schwierig;difficult;trudny;schwierig;1
stocksauer;furious;stinksauer;stocksauer;1
unerschrocken;intrepidly, undauntedly, dauntlessly;nieustraszony;unerschrocken;1
erleichtert;relieved;z ulgą;erleichtert;1
charismatisch;charismatic;charyzmatyczny;charismatisch;1
unklar;not clear, obscure;niejasny, niezrozumiały, niewyjaśniony, mętny, niewyraźny;unklar;1
formell;formal;oficjalnie, formalnie;formell;1
großartig;great,wonderful;świetny, genialny, klawy;großartig;1
köstlich;delicious;wyborny;köstlich;1
bewölkt;cloudy;pochmurnie;bewölkt;1
ungewiss;uncertain;z dozą niepewności;ungewiss;1
athletisch;athletic;atletyczny;athletisch;1
zögernd;hesitant;wahać się;zögernd;1
günstig;good value, cheap;korzystny, przyjazny, dogodny, pomyślny, sprzyjający, konkurencyjny;günstig;1
musikalisch;musical;musikalisch;musikalisch;1
widerlich;repulsive, disgusting;poczwarny, zmierzły, obmierzły;widerlich;1
tierlieb;fond of animals;lubiący zwierzęta;tierlieb;1
risikofreudig;likes taking risks;lubiący ryzyko;risikofreudig;1
rund;round;okrągła;rund;1
gekocht;boiled, seethed, cooked, fumed;ugotowany;gekocht;1
pechschwarz;pitch dark, pitch-black, as black as pitch;czarny jak smoła;pechschwarz;1
unempfindlich;insensitive;empfindlich;unempfindlich;1
übervorsichtig;overcautious, overcareful, excessively cautious;nadmiernie ostrożny;übervorsichtig;1
tüchtig;well done!;solidny;tüchtig;1
beeinflussbar;susceptible, impressionable, manipulable, suggestible, influenceable, amenable to influence, capable of being influenced;podatny na wpływy;beeinflussbar;1
abenteuerlustig;adventurous;żądny przygód;abenteuerlustig;1
pedantisch;pedantic, fussy;pedantyczny;pedantisch;1
misstrauisch;mistrustful, wary;nieufny;misstrauisch;1
beunruhigt;concerned;niespokojny;beunruhigt;1
versehentlich;accidental;omyłkowy;versehentlich;1
schwungvoll;energetically, spiritedly, with verve, with great vigour;energiczny;schwungvoll;1
fade;insipid, flavorless, flavourless, dull, flat, tasteless, vapid, platitudinous, commonplace, trite;mdły, nijaki;fade;1
intellektuell;intellectual;intelektualnie;intellektuell;1
eingebildet;vain, conceited;zarozumiały;eingebildet;1
nachlässig;careless, slack, sloppy;niedbały;nachlässig;1
blind;blind;niewidomy, ślepy;blind;1
verzweifelt;desperate, in despair;zrozpaczony, desperacki;verzweifelt;1
schlank;slim;szczupły;schlank;1
abwesend;absent;nieobecny;abwesend;1
bodenständig;rooted in the soil, local;stąpający twardo po ziemi;bodenständig;1
heroisch;heroical;heroiczny;heroisch;1
betrunken;drunk;pijany;betrunken;1
erstaunlich;prodigious;zdumiewający;erstaunlich;1
despotisch;arbitrary, despotic, despotically;despotyczny;despotisch;1
gespannt;excited;napięty;gespannt;1
beherrscht;with self-control;panujacy nad sobą;beherrscht;1
frech;saucy, cheeky;zuchwaly;frech;1
gefühlvoll;sensitive, emotional;z uczuciem, sentymentalnie, ekspresyjnie;gefühlvoll;1
warmherzig;warm-hearted;serdeczny;warmherzig;1
bekannt;well-known;znany;bekannt;1
heilbar;curable, remediable, curably, healable, remediably;uleczalny;heilbar;1
bestimmt;specific, definite, certain;na pewno;bestimmt;1
halsstarrig;stubborn;#N/A;halsstarrig;1
leistungsfähig;capable, efficient;dobry, sprawny, wydajny, wysokowydajny, sprawnie funkcjonujący;leistungsfähig;1
enttäuscht;disappointed;rozczarowany;enttäuscht;1
falsch;wrong, false;fałszywy;falsch;1
unelegant;inelegant;elegant;unelegant;1
empfindsam;sensitive, feeling;wrażliwie, sentymentalnie;empfindsam;1
aufbrausend;volume_up hot-tempered, quick-tempered, short-tempered, irascible;popędliwy;aufbrausend;1
eiskalt;ice cold,freezing;zimny jak lód;eiskalt;1
zänkisch;shrewishly;kłótliwy;zänkisch;1
stinkfaul;bonelazy, bone idle, lazy as hell;śmierdząco leniwy;stinkfaul;1
ehrbar;decent, respectable, reputable, respectably;czcigodny,zacny;ehrbar;1
vertraulich;confidential, familiar;poufny;vertraulich;1
ungültig;invalid;nieważny;ungültig;1
anpassungsfähig;adaptable;elastyczny;anpassungsfähig;1
benutzerfreundlich;user friendly, user-friendly;łatwy w obsłudze;benutzerfreundlich;1
gleichgültig;indifferent;obojętny;gleichgültig;1
lang;long;długi;lang;1
fantastisch;fantastic;fantastyczny;fantastisch;1
messerscharf;volume_up incisive, trenchant;ostry jak nóż;messerscharf;1
länglich;oblong, prolate, longish;pociągła;länglich;1
stockdunkel;pitch dark;ciemniutki, ciemny, choć oko wykol;stockdunkel;1
beruhigend;restful, depressant;uspokajający;beruhigend;1
frustriert;frustrated;sfrustrowany;frustriert;1
gerecht;just;sprawiedliwy;gerecht;1
fruchtlos;fruitless, barren, unfertile, effectless;bez owocny;fruchtlos;1
angespannt;tensed;napięty;angespannt;1
ausgeglichen;well-balanced, stable;zrównoważony;ausgeglichen;1
scheu;shy;nieśmiały;scheu;1
populär;popular;popularny;populär;1
schlampig;messy, sloppy;niechlujny;schlampig;1
klar;clear;przejrzysty, czysty, jasny, klarowny, wyraźny, pogodny, zrozumiały;klar;1
geil;cool;fajny, cool, super, tłusty, żyzny, wybujały, napalony, lubieżny, ekstra, odlotowy, odjazdowy, zajebisty;geil;1
hilflos;helpless;bezradny, bezsilny, nieporadny, nieudolny;hilflos;1
jung;young;młody;jung;1
hörbar;audibly, noisily;słyszalny;hörbar;1
regnerisch;rainy;deszczowy, dżdżysty;regnerisch;1
neugierig;curious;ciekawy, wścibski;neugierig;1
roh;raw, crude, gross, rough, rude, coarse, uncooked;surowy;roh;1
elegant;elegant, classy;elegancki, wizytowy, finezyjny;elegant;1
nass;wet;mokry;nass;1
nervig;annoying;wkurzająco, denerwująco;nervig;1
radikal;radical, revolutionary;radykalny, gruntowny, kategoryczny;radikal;1
verwirrt;confused;zdezorientowany, zmieszany, zagubiony;verwirrt;1
bekloppt;crazy, loopy, mad, zany;zakręcony, zwichrowany;bekloppt;1
bescheiden;modest, humble, self-effacing;skromny;bescheiden;1
besorgt;worried;zmartwiony;besorgt;1
fair;fair;fair, uczciwy;fair;1
ungerecht;unfair;niesłuszny, niesprawiedliwy;ungerecht;1
kraftlos;weak, watery, impotent, sickly, adynamic;bez silny;kraftlos;1
erzdumm;volume_up bovine;arcygłupi;erzdumm;1
kurz;short;krótki;kurz;1
überwältigt;overwhelmed;obezwładniać, przejmować do głębi, morzyć, obezwładnić, przejąć do głębi, zmorzyć;überwältigt;1
riesengroß;volume_up huge, enormous, gigantic, terrific;olbrzymi;riesengroß;1
bescheuert;nuts;głupio;bescheuert;1
kreativ;creative;kreatywny;kreativ;1
altmodisch;old-fashioned;staromodny;altmodisch;1
genau;exactly;dokładny;genau;1
privat;private;prywatny;privat;1
rechthaberisch;self-opinionated;upierajacy się przy swoim zdaniu;rechthaberisch;1
machtlos;powerless, powerlessly;bezsilny;machtlos;1
apathisch;apathetic;empathisch, sypathisch;apathisch;1
unglücklich;unhappy;nieszczęśliwy;unglücklich;1
brüderlich;volume_up fraternal, brotherly;braterski;brüderlich;1
kahlköpfig;bald headed, baldheaded;łysy;kahlköpfig;1
intolerant;intolerant;nietolerancyjny;intolerant;1
sonnig;sunny;słoneczny;sonnig;1
zäh;tough;żylasty, łykowaty;zäh;1
unwahrscheinlich;improbable, unlikely;nieprawdopodobny;unwahrscheinlich;1
heiß;hot;gorący;heiß;1
häufig;frequent, common;często;häufig;1
sanft;gently;łagodny, nieagresywny;sanft;1
nervös;nervous;nerwowy;nervös;1
auffallend;striking, remarkable, notable, flaring, sticking out, attracting attention, blazingly, flaringly, eye-catching, boldly, conspicuously, flamboyantly;wyzywający;auffallend;1
unruhig;restless;niespokojny;unruhig;1
respektlos;disrespectful;lekceważąco, bez szacunku;respektlos;1
abweisend;unfriendly;odpychający;abweisend;1
cool;cool;cool, bajerancki;cool;1
geschmacklos;indelicately, distastefully, in bad taste, vulgarly, tastelessly;bez smaku;geschmacklos;1
fies;mean,nasty;wstrętnie, ohydnie, wrednie;fies;1
temperamentvoll;spirited, lively;pełen temperamentu;temperamentvoll;1
ausgeflippt;crazy, flipped-out;oszaleć, tracić głowę, szaleć z radości, uciekać w narkotyki;ausgeflippt;1
behilflich;helpful;pomocny;behilflich;1
satt;full;najedzony, syty;satt;1
verblüfft;stunned;zadziwiać, zadziwić;verblüfft;1
seltsam;strange, weird;dziwny;seltsam;1
schulisch;school, at school, scholastic;szkolny;schulisch;1
süß;sweet,cute;słodki;süß;1
entmutigt;discouraged;zniechęcić, załamać, załamywać, dołować, zdołować, zniechęcać;entmutigt;1
mitfühlend;sympathetic;współczujący;mitfühlend;1
entschlossen;determined;zdecydowanie;entschlossen;1
undankbar;ungrateful;niewdzięczny, trudny;undankbar;1
kompromissfähig;ready to compromise;zdolny do kompromisu;kompromissfähig;1
rein;pure, clean, clear;czysty;rein;1
überempfindlich;hypersensitive;nadwrażliwie, alergicznie;überempfindlich;1
attraktiv;attractive;atrakcyjny;attraktiv;1
kontaktfreudig;sociable, outgoing;otwarty, komunikatywny;kontaktfreudig;1
unwesentlich;inessential, insignificant;bez znaczenia;unwesentlich;1
frisch;fresh,cool;świeży;frisch;1
klebrig;sticky;kleić się;klebrig;1
verlogen;mendacious, mendaciously;zakłamany;verlogen;1
munter;alert, lively, upbeat;wesoło;munter;1
anliegend;enclosed;przylegające;anliegend;1
umweltbewusst;concerned for the environment;świadomy zagrożeń dla środowiska naturalnego, ekologiczny;umweltbewusst;1
wirksam;effectively;skteczny;wirksam;1
habgierig;rapaciously, greedily;chciwy;habgierig;1
verständnisvoll;understanding;wyrozumiały;verständnisvoll;1
erste;first;jedynka;erste;1
kindisch;childish, puerile, silly;dziecinny;kindisch;1
sommersprossig;freckle-faced;piegowata;sommersprossig;1
niedrig;low;niski;niedrig;1
einzeln;single, individual, lone, odd;poszczególny, pojedynczy, osobny, odosobniony, sporadyczny;einzeln;1
erwachsen;mature;dorosły;erwachsen;1
naturverbunden;close to nature, fond of being outdoors;związany z naturą;naturverbunden;1
stumm;mute;niemy;stumm;1
pflichtbewusst;dutiful, conscientious;sumiennie;pflichtbewusst;1
ideell;ideally;ideowy;ideell;1
unsympathisch;unsympathetic;niesympatyczny, antypatyczny;unsympathisch;1
heutig;today’s;dzisiejszy;heutig;1
rebellisch;rebellious;zbuntowany, buntowniczy, wybuchowy;rebellisch;1
spießig;narrow-minded;filisterski, kołtuński, drobnomieszczański;spießig;1
industriell;industrial, industrially;przemysłowy;industriell;1
unfrei;unfree;w niewoli, kontrolowany, zniewolony, nieopłacony;unfrei;1
dunkel;dark;ciemny;dunkel;1
inspirierend;inspiring, inspiriting, spiriting up;inspirujący;inspirierend;1
anständig;decent, moral;przyzwoity;anständig;1
großzügig;generous;hojny;großzügig;1
taghell;as bright as day;jasny jak dzień;taghell;1
atemberaubend;cliffhanging, giddy;zapierający dech w piersiach;atemberaubend;1
übergeschnappt;crazy, too tightly wound;ogłupiały;übergeschnappt;1
egozentrisch;self-centred;egocentryczny;egozentrisch;1
flach;flat, shallow;płaski, płytki;flach;1
engagiert;dedicated, committed;zaangażowany;engagiert;1
seelenruhig;volume_up unruffled, as cool as a cucumber;bardzo spokojny;seelenruhig;1
beliebt;popular;lubiany,ulubiony;beliebt;1
zurückhaltend;reserved;powściągliwy;zurückhaltend;1
irritiert;irritated;poirytowany;irritiert;1
langsam;slow;wolny (powolny);langsam;1
pudelnass;drenched, soaked to the skin;przemoczony do suchej nitki;pudelnass;1
zahm;tame;oswajać, oswoić, obłaskawiać, obłaskawić, poskramiać, poskromić;zahm;1
feucht;humid,moist;wilgotny, mokry, zwilgotniały;feucht;1
rachsüchtig;vengeful, vindictive;żądny zemsty;rachsüchtig;1
unbeeindruckt;unimpressed;rozczarowany;unbeeindruckt;1
klug;wise, smart;mądry;klug;1
zielstrebig;single-minded, purposeful, determined;dążący do celu, konsekwentny w dążeniu do celu, uparcie zmierzający do celu;zielstrebig;1
vergesslich;oblivious;zapominalski;vergesslich;1
weit;loose, far;daleki;weit;1
dick;thick,fat;gruby;dick;1
überschäumend;exuberant;musujący;überschäumend;1
zögern;volume_up hesitation, hesitate, procrastinate, lag, pause, falter, tarry, waver, hold back, demur;wahać się;zögern;1
feuerrot;crimson, fiery, flaming, fiery red, flaming red;ognisty;feuerrot;1
parteiisch;partial, biased, one-sided;stronniczy;parteiisch;1
komisch;strange, funny, weird;śmieszny, komiczny;komisch;1
voll;full;pełny;voll;1
unbekümmert;easy-going;beztroski;unbekümmert;1
konsequent;consistent;logicznie, konsekwentnie;konsequent;1
herablassend;patronizingly;protekcjonalny;herablassend;1
entspannend;laidback;dobroczynny, relaksujący;entspannend;1
kerngesund;sound as a bell;zdrowy jak rydz;kerngesund;1
rothaarig;red-headed;rudy;rothaarig;1
originell;original,creative;oryginalny, pomysłowy;originell;1
östlich;eastern;wschodni;östlich;1
aufrichtig;sincere, honest;szczery;aufrichtig;1
fürsorglich;thoughtful, considerate;opiekuńczy;fürsorglich;1
mild;mild, smooth, benign, mellow, mildly, bland, meek, lenient, genial, balmy, clement, placid, benignant;łagodny;mild;1
klein;small, tiny;mały;klein;1
regelmäßig;regular;regularny, cykliczny;regelmäßig;1
wissbegierig;eager for knowledge;ciekawy, dociekliwy, żądny wiedzy;wissbegierig;1
fettig;greasy;tłusty;fettig;1
vegetarisch;vegetarian;jarski, bezmięsny, wegetariański;vegetarisch;1
begeistert;excited, enthusiastic, thrilled;zachwycony, entuzjastyczny, zadowolony, rad;begeistert;1
schwindlig;dizzy;Kręci mi się w głowie.;schwindlig;1
verletzt;hurt;skaleczony;verletzt;1
erträglich;tolerable;znośny;erträglich;1
weiter;further, another;dalszy;weiter;1
kurzhaarig;shorthaired, short-haired;krótkowłosy;kurzhaarig;1
dumm;stupid,dumb;głupi;dumm;1
behindert;disabled;niepełnosprawny, kaleki;behindert;1
glaubwürdig;reliable, trustworthy;wiarygodny;glaubwürdig;1
farbig;colourfully;barwny;farbig;1
ungepflegt;uncared-for, scruffy, untidy, untended;niezadbany;ungepflegt;1
beschreibbar;write-once;dający się opisać;beschreibbar;1
motiviert;motivated;zmotywowany;motiviert;1
reich;rich, wealthy;bogaty;reich;1
tapfer;brave;dzielny;tapfer;1
schmutzig;dirty, not clean;brudny;schmutzig;1
irre;crazy;stuknięty;irre;1
taktlos;tactless, indiscreet;nietaktowny, gruboskórny;taktlos;1
angriffslustig;aggressive;skory do krytyki;angriffslustig;1
weise;wise;sposób;weise;1
ärgerlich;annoying, angry;nieprzyjemny, przykry, gniewny;ärgerlich;1
gutmütig;good-natured;dobroduszny;gutmütig;1
unternehmungslustig;enterprising, adventurous, keen to do things;aktywny, przedsiębiorczy, pełen inicjatywy;unternehmungslustig;1
bewegt;moved;wzruszony, wzburzony, niespokojny, burzliwy;bewegt;1
blitzsauber;squeaky clean;lśniący;blitzsauber;1
splitternackt;buck naked;nagusieńki;splitternackt;1
extravertiert;extraverted;ekstrawertyczny;extravertiert;1
unpraktisch;impractical;niepraktyczny, niefunkcjonalny, nieżyciowy;unpraktisch;1
ungehorsam;disobedient;gehorsam, Gehorsam;ungehorsam;1
teuer;expensive, dear;drogi;teuer;1
verliebt;in love;zakochany;verliebt;1
gelangweilt;bored;znudzony;gelangweilt;1
merkwürdig;unusual, strange;dziwny;merkwürdig;1
streitsüchtig;quarrelsome, loves to argue, aggressive;kłótliwy;streitsüchtig;1
freiheitsliebend;freedom-loving;kochający wolność;freiheitsliebend;1
pünktlich;punctual, prompt, on time;punktualny;pünktlich;1
empfindlich;touchy, sensitive;czuły;empfindlich;1
unpersönlich;impersonal;bezosobowy;unpersönlich;1
locker;relaxed;wyluzowany;locker;1
unsympatisch;unfriendly;niesympatyczny;unsympatisch;1
launisch;moody, temperamental;humorzasty, kapryśny, grymaśny;launisch;1
faszinierend;fascinating;fascynujący;faszinierend;1
draufgängerisch;daring, audacious, swashbuckling, laddish, bullish, ballsy, gung-ho, foolhardy, go-getting;zawadiacki;draufgängerisch;1
pingelig;fussy, finicky;dokładny, skrupulatny, drobiazgowy, pedantyczny;pingelig;1
wesentlich;essential, significant;istotny;wesentlich;1
unbeherrscht;lacking self-control;ekspansywny;unbeherrscht;1
heimtückisch;treacherously, maliciously, sneakily, perfidiously, sneakingly, insidiously;perfidny;heimtückisch;1
sozial;social;społeczny, socjalny;sozial;1
ungemütlich;uncomfortable;nieprzyjemny, niewygodny, nieprzytulny;ungemütlich;1
wacklig;wobbly,;wątpliwy, chwiejny, kulawy, chwiejący się, chybotliwy, ruszający się, niepewny, zachwiany, niestabilny;wacklig;1
kreideweiß;chalky;biały jak kreda;kreideweiß;1
beständig;constant, permanent, reliable, stable, steadfast;stały;beständig;1
lästig;volume_up annoying, irritating, burdensome, cumbersome, bothersome, onerous, undesirable, vexatious, vexing, irksome, worrisome, importunate, cumbrous, onerously, burdensomely, cumbrously, incommodious;uciążliwy;lästig;1
art;kind;sposób, rodzaj, gatunek;art;1
sauber;clear;czysty;sauber;1
morgig;tomorrow’s;jutrzejszy;morgig;1
hoch;high, tall;wysoki;hoch;1
nett;nice person;miły;nett;1
knochentrocken;bone dry, tinder-dry;suchy na kość;knochentrocken;1
stinknormal;in a dead ordinary way;śmierdząco normalny;stinknormal;1
witzig;witty;dowcipny;witzig;1
schick;smart;elegancki;schick;1
farblos;colorless, sallow, drab, colourless, colorlessly, colourlessly;bez barwny;farblos;1
doof;stupid;głupi;doof;1
abgelenkt;distracted;rozproszony;abgelenkt;1
freundlich;kind, nice, friendly;przyjazny/ przyjacielski;freundlich;1
jetzig;current;dzisiejszy;jetzig;1
knusprig;crusty, crispy, crisply;chrupiący;knusprig;1
fortgeschritten;advanced;zaawansowany, podeszły;fortgeschritten;1
gnädig;mercifully;łaskawy;gnädig;1
gläubig;devout, trusting;wierzący;gläubig;1
hochnäsig;snooty, stuck up;zarozumiały, pyszałkowaty;hochnäsig;1
blutjung;very young;bardzo młody;blutjung;1
labil;unstable, moody;bluszczowaty, niestabilny, labilny, chwiejny, chorowity, nieodporny;labil;1
sauer;sour, angry;kwaśny;sauer;1
erstklassig;first-class, high-quality, topnotch;pierwszej klasy, pierwszoligowy;erstklassig;1
hilfsbereit;helpful;pomocny;hilfsbereit;1
schön;lovely, nice;piękny;schön;1
stumpf;dull;tępy, rozwarty;stumpf;1
butterweich;gently;miękki jak masło;butterweich;1
aufgeregt;upset, excited;zdenerwowany;aufgeregt;1
erfinderisch;inventive,innovative;twórczy, pomysłowy, wynalazczy;erfinderisch;1
symbolisch;in representational form, emblematically, symbolically;symboliczny;symbolisch;1
schleunig;speedy;szybki;schleunig;1
westlich;west of, to the west of;zachodni;westlich;1
beneidenswert;enviable, enviably;godny pozazdroszczenia;beneidenswert;1
berauschend;fascinatingly;odurzający;berauschend;1
gestresst;stressed out;zestresowany;gestresst;1
einmalig;unique, matchless;unikalny, niepowtarzalny, unikatowy, jednokrotny;einmalig;1
sorgenlos;carefree;beztroski;sorgenlos;1
wichtig;important;ważny;wichtig;1
unartig;naughty;niegrzeczny;unartig;1
befriedigt;satisfied;zaspokoić, zaspokajać, dogadzać, dogodzić, zaspakajać, usatysfakcjonować;befriedigt;1
gereizt;cranky,edgy,querulous,niggly,ratty,testy,huffy;zirytowany;gereizt;1
hinter;back;za, poza;hinter;1
bereit;ready;gotowy, skłonny;bereit;1
eigensinnig;opinionated,obstinate;uparty;eigensinnig;1
selbstsicher;self-confident;pewny siebie;selbstsicher;1
dreckig;dirty,muddy;bezczelnie, kiepsko;dreckig;1
rege;alive, buoyant, animated, keen, busy, eager, lively, hale;żwawy;rege;1
mäuschenstill;utterly silent, dead quiet, quiet as a mouse, stock-still;cichy jak myszka;mäuschenstill;1
leichtgläubig;credulous, gullible, credulously, gullibly, credent;łatwowierny;leichtgläubig;1
epochal;monumental, world-shattering;epokowy;epochal;1
katastrophal;disastrous, catastrophic, dire, cataclysmic, ruinous, atrocious, chronic, abysmal, appalling, outrageous;katastrofalny;katastrophal;1
dankbar;thankful, grateful;wdzięczny;dankbar;1
vorsichtig;careful, cautious;ostrożny, asekuracyjny;vorsichtig;1
schmerzhaft;painful;bolesny, bolący;schmerzhaft;1
herrlich;wonderful, magnificent, marvelous;wspaniały, cudowny, pyszny, boski, przepyszny;herrlich;1
feigling;coward;tchórz;feigling;1
tollkühn;daring;nieroztropny;tollkühn;1
unsanft;rude, ungentle;niegrzeczny;unsanft;1
ätzend;very irritating;palący;ätzend;1
bewährt;proven, approved, experienced, stood the test, tried and tested, well-tried, proved;sprawdzony,wypróbowany;bewährt;1
national;national;narodowy;national;1
vernünftig;sensible, reasonable;rozsądny;vernünftig;1
sparsam;thrifty, careful with money;ekonomiczny, oszczędny;sparsam;1
überheblich;boastful;arogancko, pysznie, butnie;überheblich;1
ahnungslos;clueless, innocent;nieświadomy;ahnungslos;1
nutzlos;useless;bez użyteczny;nutzlos;1
hübsch;pretty, handsome;ładny/ przystojny;hübsch;1
anhänglich;clingy;przywiązany;anhänglich;1
eng;tight, narrow, close, snug;wąski, ciasny;eng;1
sicher;safe, secure, certainly;bezpieczny, pewny;sicher;1
seidig;silky, satiny, flossy, silkily;jedwabisty;seidig;1
überraschend;unexpected, startling, counter-intuitive;zaskakujący;überraschend;1
ganz;whole, all, complete;całkiem;ganz;1
pfiffig;bright, smart, artful;sprytnie, przebiegle;pfiffig;1
befangen;shy, timid;skrępowany;befangen;1
hinterlistig;deceitful, tricky;podstępny;hinterlistig;1
gut;good, well;dobry;gut;1
leicht;light,easy;lekki;leicht;1
feuerfest;fire-proof;ognioodporny, ogniotrwały, żaroodporny;feuerfest;1
hundemüde;dog-tired;bardzo zmęczony;hundemüde;1
wach;awake;obudzony, czujny;wach;1
empfehlenswert;advisable, recommendable, be recommended;godny polecenia;empfehlenswert;1
untreu;unfaithful;niewierność;untreu;1
unmoralisch;immoral;amoralisch, moralisch;unmoralisch;1
impulsiv;impulsive;impulsywny;impulsiv;1
angenehm;pleasant, enjoyable;miły,przyjemny;angenehm;1
saftig;juicy, luscious, mellow, succulent, sappy, lushly, juicily, sappily, succulently;soczysty;saftig;1
schief;angled, wonky, askant, asquint, agley, crooked, worn;krzywy;schief;1
dickhäutig;pachidermatous;gruboskórny;dickhäutig;1
argwöhnisch;suspicious, wary;podejrzliwy;argwöhnisch;1
bienenfleißig;bee-diligent;bardzo pilny, pracowity;bienenfleißig;1
billig;cheap, inexpensive;tani;billig;1
hinterhältig;sneaky, underhanded;przewrotny;hinterhältig;1
unaufgefordert;uninvited;dobrowolny;unaufgefordert;1
schlau;smart;chytry, przebiegły, pomysłowy;schlau;1
beschränkt;bounded, limited, witless, narrow-minded, dull-witted;ograniczony;beschränkt;1
gastfreundlich;hospitable, generous;gościnny;gastfreundlich;1
grob;coarse, uncouth, rude;nieokrzesany;grob;1
idealistisch;idealistic;realistisch;idealistisch;1
barmherzig;compassionate, charitable;miłosierny;barmherzig;1
züchtig;volume_up virgin, decent, disciplined, blushing, maidenlike;skromny/wstydliwy;züchtig;1
naiv;naive;naiwny;naiv;1
gemein;rude, low, ignorant;podły;gemein;1
endlos;volume_up infinitely, ceaselessly;bez  końca, nieskończony;endlos;1
krank;sick, ill;chory;krank;1
üblich;usual, common;zwykły, normalny;üblich;1
kinderlieb;fond of children;#N/A;kinderlieb;1
deprimiert;depressed;przygnębiony, przybity, załamany;deprimiert;1
geschwätzig;talkative, chatty;elokwentny;geschwätzig;1
umsichtig;prudently, circumspectly, cannily, cautiously;rozważny;umsichtig;1
fortschrittlich;progressive, progress-minded;open_in_new Link do źródła, warning Prośba o sprawdzenie;fortschrittlich;1
ungesund;unhealthy;niezdrowy;ungesund;1
verrückt;mad;zwariowany;verrückt;1
einsam;lonely, lonesome;samotny;einsam;1
arm;poor;biedny;arm;1
gescheit;clever, skillful;mądrze, rozsądnie;gescheit;1
jähzornig;irascible, in a bad temper;porywczy;jähzornig;1
bitterkalt;bitterly cold;bardzo zimny;bitterkalt;1
peinlich;embarrassing;przykro;peinlich;1
eloquent;eloquent;elokwentny;eloquent;1
schwach;weak, poor;słaby;schwach;1
lächend;smiling;uśmiechnięty;lächend;1
sorgfältig;thorough, careful;staranny;sorgfältig;1
herzlich;sincere,cordial,hearty;serdeczny;herzlich;1
wortkarg;uncommunicative, reserved, taciturn;małomówny, lakoniczny;wortkarg;1
unehrlich;dishonest;nieuczciwy;unehrlich;1
heuchlerisch;hypocritical;obłudny;heuchlerisch;1
ähnlich;similar;podobny;ähnlich;1
einfallsreich;imaginative,resourceful;pomysłowy;einfallsreich;1
fleißig;hardworking;pilny;fleißig;1
fahrig;erratic, jerky, agitating;nerwowy;fahrig;1
entfernt;distant;oddalony;entfernt;1
glatt;smooth, slippery;proste;glatt;1
haushoch;vastly, as high as a house, overwhelming;bardzo wysoki;haushoch;1
selbstständig;independent;samodzielny;selbstständig;1
ordentlich;tidy, neat, orderly;porządny;ordentlich;1
besoffen;trashed,inebriated;pijany, zalany, nawalony, najebany;besoffen;1
gerade;straight, right, even, direct;właśnie, akurat, dopiero co, w tej chwili, również, ledwie;gerade;1
feindlich;with hostility, in a hostile manner, inimically, antagonistically, adversely;wrogi;feindlich;1
niedlich;cute;śliczny;niedlich;1
ungerade;odd;nieparzysty;ungerade;1
kohlschwarz;coal black;czarny jak węgiel;kohlschwarz;1
bleich;pale;blady, nikły, pobladły;bleich;1
abenteuerlich;adventurous;przygodowy;abenteuerlich;1
traditionell;traditional;tradycjonalny;traditionell;1
böse;spiteful, evil, angry;zły;böse;1
brünett;brunette, dark-haired;o czarnych włosach;brünett;1
fremd;strange, external;obcy, cudzy;fremd;1
ekelhaft;very mean, detestable;wstrętny, obrzydliwy, zmierzły, obmierzły;ekelhaft;1
hart;hard,tough;twardy;hart;1
unwichtig;unimportant;nieważny, błahy;unwichtig;1
eigen;own, proper;swój, właściwy, własny;eigen;1
diskret;discretional, discreet, confidential, subtle, quiet, tactful;dyskretny;diskret;1
schwul;gay;gejowski;schwul;1
wunderbar;wonderful, great, marvellous;cudownie;wunderbar;1
verwegen;keen, daring, audaciously, venturesome, venturous, venturously, venturesomely, bold;zuchwaly;verwegen;1
zuversichtlich;confident;pogodnie;zuversichtlich;1
praktisch;practical, useful;praktyczny, funkcjonalny;praktisch;1
gierig;greedy;zachłanny;gierig;1
zuverlässig;trustworthy;godny zaufania;zuverlässig;1
bequem;comfortable, convenient;wygodny;bequem;1
erstaunt;astonished;zdziwiony;erstaunt;1
bitter;bitter;gorzki;bitter;1
gebildet;well-educated;wykształcony, tworzony;gebildet;1
beleidigt;offended;obrażony, urażony;beleidigt;1
mies;mean,nasty;brzydki, kiepski, podły, lichy;mies;1
hoffnungsvoll;hopeful;pełen nadziei;hoffnungsvoll;1
redlich;honest, sincere, has integrity;słowny, rzetelny, prawidłowy, godny zaufania, rzeczowy;redlich;1
teamfähig;be a team player;zdolny do pracy zespołowej;teamfähig;1`));
