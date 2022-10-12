import {of} from 'rxjs';
import {CsvParser} from '../shared/csv-parser';

export const nounDictionary = new CsvParser().parseToMatrix(of(`das Abendessen;dinner,supper;kolacja;Abendessen;1
das Alter;age;wiek;Alter;1
das Auge;eye;oko;Auge;1
das Auto;car;samochód, auto;Auto;1
das Bad;bathroom,bath;kąpiel;Bad;1
das Badezimmer;bathroom;łazienka;Badezimmer;1
das Bein;leg;noga;Bein;1
das Beispiel;example;przykład;Beispiel;1
das Bett;bed;łóżko;Bett;1
das Bier;beer;piwo;Bier;1
das Bild;picture,image;obraz;Bild;1
das Blut;blood;krew;Blut;1
das Boot;boat,boot;łódź;Boot;1
das Bremsseil;brake cable;linka hamulcowa;Bremsseil;1
das Brot;bread;chleb;Brot;1
das Brustbein;sternum;mostek;Brustbein;1
das Buch;book;książka;Buch;1
das Büro;office,bureau;biuro;Büro;1
das Dach;roof;dach;Dach;1
das Datum;date;data;Datum;1
das Dessert;dessert;deser;Dessert;1
das Dorf;village;wieś;Dorf;1
das Ei;egg;jajo;Ei;1
das Eis;ice;lód;Eis;1
das Eisen;iron;żelazo;Eisen;1
das Ende;end;koniec;Ende;1
das Esszimmer;dining room;jadalnia;Esszimmer;1
das Fahrrad;bike,bicycle;rower;Fahrrad;1
das Fenster;window;okno;Fenster;1
das Feuer;fire;ogień;Feuer;1
das Feuerzeug;lighter;zapalniczka;Feuerzeug;1
das Fleisch;flesh,meat;mięso;Fleisch;1
das Flugzeug;plane,airplane;samolot;Flugzeug;1
das Frühstück;breakfast;śniadanie;Frühstück;1
das Gebirge;mountains;pasmo górskie;Gebirge;1
das Gebäude;building;budynek;Gebäude;1
das Gedächtnis;memory;pamięć;Gedächtnis;1
das Gehirn;brain;mózg;Gehirn;1
das Geld;money,cash;pieniądze;Geld;1
das Gepäck;luggage;bagaż;Gepäck;1
das Geschenk;gift,present;prezent;Geschenk;1
das Geschäft;business,store,shop;interes;Geschäft;1
das Gesicht;face;twarz;Gesicht;1
das Getränk;drink;napój;Getränk;1
das Gewehr;rifle;karabin;Gewehr;1
das Gewitter;storm;burza;Gewitter;1
das Glas;glass;szklanka, szkło, słoik;Glas;1
das Glück;luck,fortune;szczęście;Glück;1
das Gold;gold;złoto;Gold;1
das Gras;grass;trawa;Gras;1
das Haar;hair;włos;Haar;1
das Handy;cell phone;telefon komórkowy;Handy;1
das Haus;house;dom;Haus;1
das Hemd;shirt;koszula;Hemd;1
das Herz;heart;serce;Herz;1
das Holz;wood;drewno;Holz;1
das Hotel;hotel;hotel;Hotel;1
das Huhn;chicken;kurczak;Huhn;1
das Interesse;interest;zainteresowanie;Interesse;1
das Jahr;year;rok;Jahr;1
das Jahrhundert;century;wiek, stulecie;Jahrhundert;1
das Kalb;calf;cielak, cielę;Kalb;1
das Kalbfleisch;veal;cielęcina;Kalbfleisch;1
das Kind;child,kid,babe;dziecko;Kind;1
das Kinn;chin;podbródek;Kinn;1
das Kleid;dress,gown;sukienka, suknia;Kleid;1
das Knie;knee;kolano;Knie;1
das Krankenhaus;hospital;szpital;Krankenhaus;1
das Ladegerät;charger;ładowarka;Ladegerät;1
das Land;country,land;kraj;Land;1
das Leben;life;życie;Leben;1
das Leder;leather;skóra;Leder;1
das Licht;light;swiatło;Licht;1
das Loch;hole;dziura;Loch;1
das Magazin;magazine;magazyn;Magazin;1
das Meer;sea;morze;Meer;1
das Messer;knife;nóż;Messer;1
das Metall;metal;metal;Metall;1
das Mittagessen;lunch;obiad;Mittagessen;1
das Mädchen;girl;dziewczynka;Mädchen;1
das Ohr;ear;ucho;Ohr;1
das Paar;pair;para;Paar;1
das Papier;paper;papier;Papier;1
das Pferd;horse;koń;Pferd;1
das Rad;wheel;koło;Rad;1
das Radio;radio;radio;Radio;1
das Recht;right;prawo;Recht;1
das Restaurant;restaurant;restauracja;Restaurant;1
das Rindfleisch;beef;wołowina;Rindfleisch;1
das Salz;salt;sól;Salz;1
das Schiff;ship,vessel;statek, okręt;Schiff;1
das Schlafzimmer;bedroom;sypialnia;Schlafzimmer;1
das Schwein;pig;świnia;Schwein;1
das Schweinefleisch;pork;wieprzowina;Schweinefleisch;1
das Seil;rope;lina;Seil;1
das Silber;silver;srebro;Silber;1
das Steak;steak;stek;Steak;1
das Stockwerk;floor;kondygnacja;Stockwerk;1
das Stück;piece;kawałek;Stück;1
das Tablet;tablet;tablet;Tablet;1
das Taschentuch;handkerchief;chusteczka;Taschentuch;1
das Telefon;phone,telephone;telefon;Telefon;1
das Tier;animal;zwierze;Tier;1
das Verbot;banned;zakaz;Verbot;1
das Verbrechen;crime;przestępstwo;Verbrechen;1
das Vergnügen;pleasure;przyjemność;Vergnügen;1
das Vieh;cattle;bydło;Vieh;1
das Warndreieck;warning triangle;trójkąt ostrzegawczy;Warndreieck;1
das Wasser;water;woda;Wasser;1
das Wetter;weather;pogoda;Wetter;1
das Wort;word;słowo;Wort;1
das Wörterbuch;dictionary;słownik;Wörterbuch;1
das Zentrum;center;centrum;Zentrum;1
das Ziel;target,goal,destination;cel;Ziel;1
das Zimmer;room;pokój;Zimmer;1
das Öl;oil;olej;Öl;1
der Abend;evening;wieczór;Abend;1
der Alkohol;alcohol;alkohol;Alkohol;1
der Anfang;beginning,start;początek;Anfang;1
der Anzug;suit;garnitur;Anzug;1
der Apfel;apple;jabłko;Apfel;1
der Arm;arm;ramie;Arm;1
der Arzt;doctor;lekarz;Arzt;1
der August;August;sierpień;August;1
der Ausgang;exit;wyjście;Ausgang;1
der Bahnhof;station;dworzec kolejowy;Bahnhof;1
der Ball;ball;piłka;Ball;1
der Bart;beard;broda;Bart;1
der Bauernhof;farm;gospodarstwo rolne;Bauernhof;1
der Baum;tree;drzewo;Baum;1
der Berg;mountain,mount;góra;Berg;1
der Besen;broom;miotła;Besen;1
der Blumenkohl;cauliflower;kalafior;Blumenkohl;1
der Boden;floor,ground,bottom;grunt, ziemia;Boden;1
der Brief;letter;list;Brief;1
der Briefumschlag;envelope;kolerta na listy;Briefumschlag;1
der Bruder;brother;brat;Bruder;1
der Brunnen;fountain;studnia;Brunnen;1
der Bus;bus;autobus;Bus;1
der Bäcker;Baker;piekarz;Bäcker;1
der Bär;bear;niedźwiedź, miś;Bär;1
der Computer;computer;komputer;Computer;1
der Cousin;cousin;kuzyn;Cousin;1
der Daumen;thumb;kciuk;Daumen;1
der Dienst;service;służba;Dienst;1
der Donner;thunder;grzmot;Donner;1
der Durchschnitt;average;średnia;Durchschnitt;1
der Durst;thirst;pragnienie;Durst;1
der Ehemann;husband;mąż, małżonek;Ehemann;1
der Eingang;entrance;wejście;Eingang;1
der Elefant;elephant;słoń;Elefant;1
der Ellbogen;elbow;łokieć;Ellbogen;1
der Esel;ass;osioł;Esel;1
der Faden;thread;nić;Faden;1
der Fahrstuhl;elevator;winda;Fahrstuhl;1
der Fahrzeugschein;vehicle registration;numery rejestracyjne;Fahrzeugschein;1
der Fall;case,drop;przypadek;Fall;1
der Fehler;mistake,fault,error;błąd;Fehler;1
der Feind;enemy;wróg;Feind;1
der Feuerlöscher;fire extinguisher;gaśnica;Feuerlöscher;1
der Finger;finger;palec;Finger;1
der Flughafen;airport;port lotniczy, lotnisko;Flughafen;1
der Fluss;river;rzeka;Fluss;1
der Freitag;Friday;piątek;Freitag;1
der Freund;friend,boyfriend;przyjacieł;Freund;1
der Frühling;spring;wiosna;Frühling;1
der Fuchs;fox;lis;Fuchs;1
der Führerschein;driver's license;prawo jazdy;Führerschein;1
der Garten;garden;ogród;Garten;1
der Geburtstag;birthday;urodziny;Geburtstag;1
der Gedankes;thoughts;myśl;Gedankes;1
der Gott;god;bóg;Gott;1
der Grad;degree;stopień;Grad;1
der Grund;reason,matter,cause;powód, dno;Grund;1
der Gurt;strap;pas;Gurt;1
der Hagel;hail;grad;Hagel;1
der Hals;neck,throat;szyja;Hals;1
der Hammer;hammer;młotek;Hammer;1
der Herbst;fall,autumn;jesień;Herbst;1
der Himmel;sky,heaven;niebo;Himmel;1
der Hund;dog;pies;Hund;1
der Hut;hat;kapelusz;Hut;1
der Januar;January;styczeń;Januar;1
der Junge;boy;chłopiec;Junge;1
der Kaffee;coffee;kawa;Kaffee;1
der Kamerad;comrade;kolega;Kamerad;1
der Kamm;comb;grzebień;Kamm;1
der Kassierer;cashier;kasjer;Kassierer;1
der Keller;basement;piwnica;Keller;1
der Kellner;waiter;kelner;Kellner;1
der Knochen;bone;kość;Knochen;1
der Knopf;button,knob;guzik;Knopf;1
der Knöchel;ankle;kostka;Knöchel;1
der Koch;cook;kocharz;Koch;1
der Kopf;head;głowa;Kopf;1
der Korb;basket;kosz;Korb;1
der Kragen;collar;kołnierz;Kragen;1
der Kuchen;cake,pie;ciasto, placek;Kuchen;1
der Kugelschreiber;ballpen;długopis;Kugelschreiber;1
der Kunde;customer;klient;Kunde;1
der Kuss;kiss;pocałunek;Kuss;1
der König;king;król;König;1
der Körper;body;ciało;Körper;1
der Kühlschrank;refrigerator;lodówka;Kühlschrank;1
der Künstler;artist;artysta;Künstler;1
der Laden;store;sklep;Laden;1
der Lastwagen;truck;samochód ciężarowy;Lastwagen;1
der Lehrer;teacher;nauczyciel;Lehrer;1
der Leiter;manager;kierownik;Leiter;1
der Lärm;noise;hałas;Lärm;1
der Löffel;spoon;łyżka;Löffel;1
der Lügner;liar;kłamca;Lügner;1
der Magen;stomach;żołądek;Magen;1
der Mann;man,male;mężczyzna;Mann;1
der Mantel;coat,cloak;płaszcz;Mantel;1
der Mensch;human;człowiek;Mensch;1
der Metzger;butcher;rzeźnik;Metzger;1
der Mittag;lunchtime;południe;Mittag;1
der Moment;moment;moment;Moment;1
der Monat;month;miesiąc;Monat;1
der Mond;moon;księżyc;Mond;1
der Morgen;morning;ranek;Morgen;1
der Mund;mouth;usta;Mund;1
der Nachbar;neighbor;sąsiad;Nachbar;1
der Nachmittag;afternoon;popołudnie;Nachmittag;1
der Nagel;nail;gwóźdź;Nagel;1
der Norden;North;północ;Norden;1
der Ofen;oven;piec;Ofen;1
der Onkel;uncle;wuj;Onkel;1
der Ort;place,location;miejsce;Ort;1
der Osten;east;wschód parcie na wschód;Osten;1
der Papa;daddy;tata, papa;Papa;1
der Pass;pass;paszport;Pass;1
der Personalausweis;identity card;dowód osobisty;Personalausweis;1
der Platz;spot;plac, miejsce;Platz;1
der Preis;price,prize;cena;Preis;1
der Rat;council;rada;Rat;1
der Regen;rain;deszcz;Regen;1
der Reifen;tire;opona;Reifen;1
der Rock;skirt;spódnica;Rock;1
der Rücken;back;plecy;Rücken;1
der Saft;juice;sok;Saft;1
der Salat;salad;sałatka;Salat;1
der Schatten;shadow;cień;Schatten;1
der Schauspieler;actor;aktor;Schauspieler;1
der Schinken;ham;szynka;Schinken;1
der Schirm;forhead;czoło;Schirm;1
der Schlüssel;key,clue;klucz;Schlüssel;1
der Schmetterling;butterfly;motyl;Schmetterling;1
der Schnee;snow;śnieg;Schnee;1
der Schrank;closet;szafa;Schrank;1
der Schriftsteller;writer;pisarz;Schriftsteller;1
der Schuh;shoe;but;Schuh;1
der See;lake;jezioro;See;1
der Sessel;armchair;fotel;Sessel;1
der Sohn;son;syn;Sohn;1
der Sommer;summer;lato;Sommer;1
der Speck;backon;słonina;Speck;1
der Spiegel;mirror;lustro;Spiegel;1
der Stahl;steel;stal;Stahl;1
der Staubsauger;vacuum cleaner;odkurzacz;Staubsauger;1
der Stein;stone,boulder;kamień;Stein;1
der Stern;star;gwiazda;Stern;1
der Strand;beach;plaża;Strand;1
der Stuhl;chair,stool;krzesło;Stuhl;1
der Sturm;storm;burza, nawałnica, sztorm, wichura;Sturm;1
der Süden;south;południe;Süden;1
der Tag;day;dzień;Tag;1
der Tee;tea;herbata;Tee;1
der Teil;part;cześć;Teil;1
der Teller;plate;talerz;Teller;1
der Teppich;carpet,rug;dywan;Teppich;1
der Tiger;tiger;tygrys;Tiger;1
der Tisch;table;stół;Tisch;1
der Topf;pot;garnek;Topf;1
der Traum;dream;sen;Traum;1
der Turm;tower;wieża;Turm;1
der Unfall;accident;wypadek;Unfall;1
der Vater;father,dad;ojciec;Vater;1
der Versuch;attempt;próba;Versuch;1
der Vogel;bird;ptak;Vogel;1
der Vorhang;curtain;zasłona;Vorhang;1
der Vorschlag;suggestion;propozycja;Vorschlag;1
der Wagen;wagon,cart,carriage;wóz, samochód;Wagen;1
der Wald;forest;las;Wald;1
der Wechsel;change;wymiana;Wechsel;1
der Wecker;alarm clock;budzik;Wecker;1
der Weg;way;droga;Weg;1
der Wein;wine;wino;Wein;1
der Westen;west;zachód;Westen;1
der Wind;wind;wiatr;Wind;1
der Winter;winter;zima;Winter;1
der Zahn;tooth;ząb;Zahn;1
der Zahnarzt;dentist;dentysta;Zahnarzt;1
der Zoll;customs;cło;Zoll;1
der Zucker;sugar;cukier;Zucker;1
der Zug;train;pociąg;Zug;1
die Abfahrt;departure;odjazd;Abfahrt;1
die Adresse;address;adres;Adresse;1
die Ameise;ant;mrówka;Ameise;1
die Angst;fear,anxiety;strach;Angst;1
die Ankunft;arrival;przybycie;Ankunft;1
die Antwort;answer,response,reply;odpowiedź;Antwort;1
die Aprikose;apricot;morela;Aprikose;1
die Arbeit;work;praca;Arbeit;1
die Armbanduhr;watch;zegarek;Armbanduhr;1
die Armee;army;armia;Armee;1
die Art;kind,sort;gatunek;Art;1
die Aufgabe;task;zadanie;Aufgabe;1
die Banane;banana;banan;Banane;1
die Bank;bank,bench;bank;Bank;1
die Bank;bank,bench;ławka;Bank;1
die Banknote;banknote;banknot;Banknote;1
die Biene;bee;pszczoła;Biene;1
die Birne;pear;gruszka;Birne;1
die Blume;flower;kwiat;Blume;1
die Bluse;blouse;bluzka;Bluse;1
die Bohne;bean;fasola;Bohne;1
die Bremse;brake;hamulec;Bremse;1
die Briefmarke;stamp;znaczek pocztowy;Briefmarke;1
die Brille;glasses;okulary;Brille;1
die Brust;chest,breast;pierś;Brust;1
die Brücke;bridge;most;Brücke;1
die Brücke;bridge;pod mostem;Brücke;1
die Buchhandlung;bookstore;księgarnia;Buchhandlung;1
die Butter;butter;masło;Butter;1
die Bäckerei;bakery;piekarnia;Bäckerei;1
die Bürste;brush;szczotka;Bürste;1
die Decke;ceiling,blanket,quilt;sufit;Decke;1
die Distanz;distance;dystans;Distanz;1
die Ecke;corner,edge;róg, kąt;Ecke;1
die Ehefrau;wife;żona, małżonka;Ehefrau;1
die Eiche;oak;dąb;Eiche;1
die Eiscreme;ice cream;lody;Eiscreme;1
die Ente;duck;kaczka;Ente;1
die Erbse;pea;groszek;Erbse;1
die Erbsensuppe;pea soup;grochówka;Erbsensuppe;1
die Erdbeere;strawberry;truskawka;Erdbeere;1
die Erde;earth,soil;ziemia;Erde;1
die Fabrik;factory;fabryka;Fabrik;1
die Fahrkarte;ticket;bilet;Fahrkarte;1
die Familie;family;rodzina;Familie;1
die Farbe;color,paint;kolor;Farbe;1
die Ferien;holiday;ferie;Ferien;1
die Feuerwehr;fire department;straż pożarna;Feuerwehr;1
die Flasche;bottle;butelka;Flasche;1
die Fliege;fly;mucha;Fliege;1
die Form;shape,form;kształt;Form;1
die Fremdsprache;foreign language;język obcy;Fremdsprache;1
die Freude;pleasure,delight;radość;Freude;1
die Freundin;girlfriend;przyjaciółka;Freundin;1
die Gabel;fork;widelec;Gabel;1
die Gans;goose;gęś;Gans;1
die Gebrauchsanweisung;instructions for use;instrukcja obsługi;Gebrauchsanweisung;1
die Gefahr;danger;niebezpieczeństwo;Gefahr;1
die Gesellschaft;society;społeczeństwo;Gesellschaft;1
die Gesundheit;health;zdrowie;Gesundheit;1
die Glocke;bell;dzwon;Glocke;1
die Gurke;cucumber;ogórek;Gurke;1
die Haltestelle;bus stop;przystanek;Haltestelle;1
die Hand;hand;dłoń;Hand;1
die Handtasche;handbag;torebka;Handtasche;1
die Haut;skin;skóra;Haut;1
die Hilfe;help;pomoc;Hilfe;1
die Hochzeit;wedding;wesele;Hochzeit;1
die Hose;pant;spodnie;Hose;1
die Insel;island;wyspa;Insel;1
die Jacke;jacket;kurtka;Jacke;1
die Karte;card,map;karta;Karte;1
die Kartoffel;potato;ziemniak, kartofel;Kartoffel;1
die Kassiererin;cashier;kasjerka;Kassiererin;1
die Katze;cat;kot;Katze;1
die Kellnerin;waitress;kelnerka;Kellnerin;1
die Kerze;candle;świeca;Kerze;1
die Kirche;church;kościół;Kirche;1
die Kirsche;cherry;wiśnia;Kirsche;1
die Kleidung;cloth;ubrania, odzież;Kleidung;1
die Klingel;bell;dzwonek;Klingel;1
die Krankenschwester;nurse;pielęgniarka;Krankenschwester;1
die Krankheit;disease,illness;choroba;Krankheit;1
die Krawatte;tie;krawat;Krawatte;1
die Krone;crown;korona;Krone;1
die Kuh;cow;krowa;Kuh;1
die Kunst;art;sztuka;Kunst;1
die Königin;queen;królowa;Königin;1
die Küche;kitchen;kuchnia;Küche;1
die Künstlerin;artist;artystka;Künstlerin;1
die Lampe;lamp;lampa;Lampe;1
die Landkarte;map;mapa;Landkarte;1
die Landstraße;highway;szosa, droga krajowa;Landstraße;1
die Lehrerin;teacher;nauczycielka;Lehrerin;1
die Leiter;ladder;drabina;Leiter;1
die Leute;people;ludzie;Leute;1
die Liebe;love;miłość;Liebe;1
die Lippe;lip;warga;Lippe;1
die Luft;air;powietrze;Luft;1
die Lust;desire;ochota, chęć;Lust;1
die Mahlzeit;meal;posiłek;Mahlzeit;1
die Marmelade;jam;marmolada;Marmelade;1
die Maschine;machine;maszyna;Maschine;1
die Maus;mouse;mysz;Maus;1
die Meisten;most;większość;Meisten;1
die Milch;milk;mleko;Milch;1
die Minute;minute;minuta;Minute;1
die Mitternacht;midnight;północ;Mitternacht;1
die Mutter;mother,nut;matka;Mutter;1
die Mutter;mother,nut;nakrętka, mutra;Mutter;1
die Mücke;mosquito;komar;Mücke;1
die Nachrichten;news;wiadomości;Nachrichten;1
die Nacht;night;noc;Nacht;1
die Nadel;needle;igła;Nadel;1
die Nase;nose;nos;Nase;1
die Natur;nature;natura;Natur;1
die Nuss;Nut;orzech;Nuss;1
die Orange;orange;pomarańcza;Orange;1
die Party;party;party, prywatka, impreza;Party;1
die Person;person;osoba;Person;1
die Pflaume;plum;śliw;Pflaume;1
die Post;post,mail;poczta;Post;1
die Postkarte;postcard;kart;Postkarte;1
die Rechnung;bill;rachunek;Rechnung;1
die Reise;trip,journey,tour,travel;podróż;Reise;1
die Richtung;direction;kierunek;Richtung;1
die Rübe;beet;burak;Rübe;1
die Sache;thing;rzecz;Sache;1
die Sahne;cream;śmietan;Sahne;1
die Schachtel;box;pudło, pudełko;Schachtel;1
die Schale;bowl,tray;misa, salaterka;Schale;1
die Schere;scissors;nożyce;Schere;1
die Schlagsahne;whipped cream;bita śmietana;Schlagsahne;1
die Schlange;snake;wąż;Schlange;1
die Schnecke;snail;ślimak;Schnecke;1
die Schokolade;chocolate;czekolada;Schokolade;1
die Schraube;screw;śruba;Schraube;1
die Schublade;drawer;szuflada;Schublade;1
die Schule;school;szkoła;Schule;1
die Schulter;shoulder;ramię, bark;Schulter;1
die Schwester;sister;siostra;Schwester;1
die Schwierigkeit;difficulty;trudność, kłopot;Schwierigkeit;1
die See;sea;morze;See;1
die Seife;soap;mydło;Seife;1
die Seite;side,page;strona;Seite;1
die Serviette;napkin;serwetka;Serviette;1
die Sicherung;fuse;bezpiecznik;Sicherung;1
die Sommerferien;summer holidays;wakacje;Sommerferien;1
die Sonne;sun;słońce;Sonne;1
die Sprache;language;język, mowa;Sprache;1
die Stadt;city,town;miasto;Stadt;1
die Straße;street,road,avenue;ulica;Straße;1
die Stunde;hour;godzina;Stunde;1
die Suppe;soup;zupa;Suppe;1
die Sünde;sin;grzech;Sünde;1
die Tankstelle;gas station;stacja benzynowa;Tankstelle;1
die Tante;aunt;ciotka, ciocia;Tante;1
die Tasche;pocket;torba;Tasche;1
die Tasse;cup;filiżanka;Tasse;1
die Tastatur;keyboard;klawiatura;Tastatur;1
die Tochter;daughter;córka;Tochter;1
die Toilette;toilet;toaleta, ubikacja;Toilette;1
die Tomate;tomato;pomidor;Tomate;1
die Treppe;stairs;schody;Treppe;1
die Träne;tear;łza;Träne;1
die Tür;door;drzwi;Tür;1
die Uhr;watch,clock;zegarek;Uhr;1
die Unterwäsche;underwear;bielizna;Unterwäsche;1
die Verbindung;connection;związek;Verbindung;1
die Vergangenheit;past;przeszłość;Vergangenheit;1
die Wand;wall;na ścianie;Wand;1
die Wange;cheek;policzek;Wange;1
die Welt;world;świat;Welt;1
die Wette;bet;zakład;Wette;1
die Wiese;meadow;łąka;Wiese;1
die Wissenschaft;science;nauka;Wissenschaft;1
die Woche;week;tydzień;Woche;1
die Wohnung;apartment;mieszkanie;Wohnung;1
die Wolke;cloud;chmura;Wolke;1
die Wolle;wool;wełna;Wolle;1
die Wurst;sausage;kiełbasa;Wurst;1
die Wüste;desert;pustynia;Wüste;1
die Zahl;number;liczba;Zahl;1
die Zahnbürste;toothbrush;szczoteczka do zębów;Zahnbürste;1
die Zange;forceps;szczypce;Zange;1
die Zehe;toe;palec u nogi;Zehe;1
die Zeichnung;drawing;rysunek;Zeichnung;1
die Zeit;time;czas;Zeit;1
die Zeitschrift;magazine;czasopismo;Zeitschrift;1
die Zeitung;newspaper;gazeta;Zeitung;1
die Zigarette;cigarette;papieros;Zigarette;1
die Zitrone;lemon;cytryna;Zitrone;1
die Zukunft;future;przyszłość;Zukunft;1
die Zunge;tongue;język;Zunge;1
die Zwetsch;plum;Śliwka;Zwetsch;1
die Zwiebel;onion;cebula;Zwiebel;1
den Abend;evening;wieczór;Abend;1
den Alkohol;alcohol;alkohol;Alkohol;1
den Anfang;beginning,start;początek;Anfang;1
den Anzug;suit;garnitur;Anzug;1
den Apfel;apple;jabłko;Apfel;1
den Arm;arm;ramie;Arm;1
den Arzt;doctor;lekarz;Arzt;1
den August;August;sierpień;August;1
den Ausgang;exit;wyjście;Ausgang;1
den Bahnhof;station;dworzec kolejowy;Bahnhof;1
den Ball;ball;piłka;Ball;1
den Bart;beard;broda;Bart;1
den Bauernhof;farm;gospodarstwo rolne;Bauernhof;1
den Baum;tree;drzewo;Baum;1
den Berg;mountain,mount;góra;Berg;1
den Besen;broom;miotła;Besen;1
den Blumenkohl;cauliflower;kalafior;Blumenkohl;1
den Boden;floor,ground,bottom;grunt, ziemia;Boden;1
den Brief;letter;list;Brief;1
den Briefumschlag;envelope;kolerta na listy;Briefumschlag;1
den Bruder;brother;brat;Bruder;1
den Brunnen;fountain;studnia;Brunnen;1
den Bus;bus;autobus;Bus;1
den Bäcker;Baker;piekarz;Bäcker;1
den Bär;bear;niedźwiedź, miś;Bär;1
den Computer;computer;komputer;Computer;1
den Cousin;cousin;kuzyn;Cousin;1
den Daumen;thumb;kciuk;Daumen;1
den Dienst;service;służba;Dienst;1
den Donner;thunder;grzmot;Donner;1
den Durchschnitt;average;średnia;Durchschnitt;1
den Durst;thirst;pragnienie;Durst;1
den Ehemann;husband;mąż, małżonek;Ehemann;1
den Eingang;entrance;wejście;Eingang;1
den Elefant;elephant;słoń;Elefant;1
den Ellbogen;elbow;łokieć;Ellbogen;1
den Esel;ass;osioł;Esel;1
den Faden;thread;nić;Faden;1
den Fahrstuhl;elevator;winda;Fahrstuhl;1
den Fahrzeugschein;vehicle registration;numery rejestracyjne;Fahrzeugschein;1
den Fall;case,drop;przypadek;Fall;1
den Fehler;mistake,fault,error;błąd;Fehler;1
den Feind;enemy;wróg;Feind;1
den Feuerlöscher;fire extinguisher;gaśnica;Feuerlöscher;1
den Finger;finger;palec;Finger;1
den Flughafen;airport;port lotniczy, lotnisko;Flughafen;1
den Fluss;river;rzeka;Fluss;1
den Freitag;Friday;piątek;Freitag;1
den Freund;friend,boyfriend;przyjacieł;Freund;1
den Frühling;spring;wiosna;Frühling;1
den Fuchs;fox;lis;Fuchs;1
den Führerschein;driver's license;prawo jazdy;Führerschein;1
den Garten;garden;ogród;Garten;1
den Geburtstag;birthday;urodziny;Geburtstag;1
den Gedankes;thoughts;myśl;Gedankes;1
den Gott;god;bóg;Gott;1
den Grad;degree;stopień;Grad;1
den Grund;reason,matter,cause;powód, dno;Grund;1
den Gurt;strap;pas;Gurt;1
den Hagel;hail;grad;Hagel;1
den Hals;neck,throat;szyja;Hals;1
den Hammer;hammer;młotek;Hammer;1
den Herbst;fall,autumn;jesień;Herbst;1
den Himmel;sky,heaven;niebo;Himmel;1
den Hund;dog;pies;Hund;1
den Hut;hat;kapelusz;Hut;1
den Januar;January;styczeń;Januar;1
den Junge;boy;chłopiec;Junge;1
den Kaffee;coffee;kawa;Kaffee;1
den Kamerad;comrade;kolega;Kamerad;1
den Kamm;comb;grzebień;Kamm;1
den Kassierer;cashier;kasjer;Kassierer;1
den Keller;basement;piwnica;Keller;1
den Kellner;waiter;kelner;Kellner;1
den Knochen;bone;kość;Knochen;1
den Knopf;button,knob;guzik;Knopf;1
den Knöchel;ankle;kostka;Knöchel;1
den Koch;cook;kocharz;Koch;1
den Kopf;head;głowa;Kopf;1
den Korb;basket;kosz;Korb;1
den Kragen;collar;kołnierz;Kragen;1
den Kuchen;cake,pie;ciasto, placek;Kuchen;1
den Kugelschreiber;ballpen;długopis;Kugelschreiber;1
den Kunde;customer;klient;Kunde;1
den Kuss;kiss;pocałunek;Kuss;1
den König;king;król;König;1
den Körper;body;ciało;Körper;1
den Kühlschrank;refrigerator;lodówka;Kühlschrank;1
den Künstler;artist;artysta;Künstler;1
den Laden;store;sklep;Laden;1
den Lastwagen;truck;samochód ciężarowy;Lastwagen;1
den Lehrer;teacher;nauczyciel;Lehrer;1
den Leiter;manager;kierownik;Leiter;1
den Lärm;noise;hałas;Lärm;1
den Löffel;spoon;łyżka;Löffel;1
den Lügner;liar;kłamca;Lügner;1
den Magen;stomach;żołądek;Magen;1
den Mann;man,male;mężczyzna;Mann;1
den Mantel;coat,cloak;płaszcz;Mantel;1
den Mensch;human;człowiek;Mensch;1
den Metzger;butcher;rzeźnik;Metzger;1
den Mittag;lunchtime;południe;Mittag;1
den Moment;moment;moment;Moment;1
den Monat;month;miesiąc;Monat;1
den Mond;moon;księżyc;Mond;1
den Morgen;morning;ranek;Morgen;1
den Mund;mouth;usta;Mund;1
den Nachbar;neighbor;sąsiad;Nachbar;1
den Nachmittag;afternoon;popołudnie;Nachmittag;1
den Nagel;nail;gwóźdź;Nagel;1
den Norden;North;północ;Norden;1
den Ofen;oven;piec;Ofen;1
den Onkel;uncle;wuj;Onkel;1
den Ort;place,location;miejsce;Ort;1
den Osten;east;wschód parcie na wschód;Osten;1
den Papa;daddy;tata, papa;Papa;1
den Pass;pass;paszport;Pass;1
den Personalausweis;identity card;dowód osobisty;Personalausweis;1
den Platz;spot;plac, miejsce;Platz;1
den Preis;price,prize;cena;Preis;1
den Rat;council;rada;Rat;1
den Regen;rain;deszcz;Regen;1
den Reifen;tire;opona;Reifen;1
den Rock;skirt;spódnica;Rock;1
den Rücken;back;plecy;Rücken;1
den Saft;juice;sok;Saft;1
den Salat;salad;sałatka;Salat;1
den Schatten;shadow;cień;Schatten;1
den Schauspieler;actor;aktor;Schauspieler;1
den Schinken;ham;szynka;Schinken;1
den Schirm;forhead;czoło;Schirm;1
den Schlüssel;key,clue;klucz;Schlüssel;1
den Schmetterling;butterfly;motyl;Schmetterling;1
den Schnee;snow;śnieg;Schnee;1
den Schrank;closet;szafa;Schrank;1
den Schriftsteller;writer;pisarz;Schriftsteller;1
den Schuh;shoe;but;Schuh;1
den See;lake;jezioro;See;1
den Sessel;armchair;fotel;Sessel;1
den Sohn;son;syn;Sohn;1
den Sommer;summer;lato;Sommer;1
den Speck;backon;słonina;Speck;1
den Spiegel;mirror;lustro;Spiegel;1
den Stahl;steel;stal;Stahl;1
den Staubsauger;vacuum cleaner;odkurzacz;Staubsauger;1
den Stein;stone,boulder;kamień;Stein;1
den Stern;star;gwiazda;Stern;1
den Strand;beach;plaża;Strand;1
den Stuhl;chair,stool;krzesło;Stuhl;1
den Sturm;storm;burza, nawałnica, sztorm, wichura;Sturm;1
den Süden;south;południe;Süden;1
den Tag;day;dzień;Tag;1
den Tee;tea;herbata;Tee;1
den Teil;part;cześć;Teil;1
den Teller;plate;talerz;Teller;1
den Teppich;carpet,rug;dywan;Teppich;1
den Tiger;tiger;tygrys;Tiger;1
den Tisch;table;stół;Tisch;1
den Topf;pot;garnek;Topf;1
den Traum;dream;sen;Traum;1
den Turm;tower;wieża;Turm;1
den Unfall;accident;wypadek;Unfall;1
den Vater;father,dad;ojciec;Vater;1
den Versuch;attempt;próba;Versuch;1
den Vogel;bird;ptak;Vogel;1
den Vorhang;curtain;zasłona;Vorhang;1
den Vorschlag;suggestion;propozycja;Vorschlag;1
den Wagen;wagon,cart,carriage;wóz, samochód;Wagen;1
den Wald;forest;las;Wald;1
den Wechsel;change;wymiana;Wechsel;1
den Wecker;alarm clock;budzik;Wecker;1
den Weg;way;droga;Weg;1
den Wein;wine;wino;Wein;1
den Westen;west;zachód;Westen;1
den Wind;wind;wiatr;Wind;1
den Winter;winter;zima;Winter;1
den Zahn;tooth;ząb;Zahn;1
den Zahnarzt;dentist;dentysta;Zahnarzt;1
den Zoll;customs;cło;Zoll;1
den Zucker;sugar;cukier;Zucker;1
den Zug;train;pociąg;Zug;1
der Abendessen;dinner,supper;kolacja;Abendessen;1
der Alter;age;wiek;Alter;1
der Auge;eye;oko;Auge;1
der Auto;car;samochód, auto;Auto;1
der Bad;bathroom,bath;kąpiel;Bad;1
der Badezimmer;bathroom;łazienka;Badezimmer;1
der Bein;leg;noga;Bein;1
der Beispiel;example;przykład;Beispiel;1
der Bett;bed;łóżko;Bett;1
der Bier;beer;piwo;Bier;1
der Bild;picture,image;obraz;Bild;1
der Blut;blood;krew;Blut;1
der Boot;boat,boot;łódź;Boot;1
der Bremsseil;brake cable;linka hamulcowa;Bremsseil;1
der Brot;bread;chleb;Brot;1
der Brustbein;sternum;mostek;Brustbein;1
der Buch;book;książka;Buch;1
der Büro;office,bureau;biuro;Büro;1
der Dach;roof;dach;Dach;1
der Datum;date;data;Datum;1
der Dessert;dessert;deser;Dessert;1
der Dorf;village;wieś;Dorf;1
der Ei;egg;jajo;Ei;1
der Eis;ice;lód;Eis;1
der Eisen;iron;żelazo;Eisen;1
der Ende;end;koniec;Ende;1
der Esszimmer;dining room;jadalnia;Esszimmer;1
der Fahrrad;bike,bicycle;rower;Fahrrad;1
der Fenster;window;okno;Fenster;1
der Feuer;fire;ogień;Feuer;1
der Feuerzeug;lighter;zapalniczka;Feuerzeug;1
der Fleisch;flesh,meat;mięso;Fleisch;1
der Flugzeug;plane,airplane;samolot;Flugzeug;1
der Frühstück;breakfast;śniadanie;Frühstück;1
der Gebirge;mountains;pasmo górskie;Gebirge;1
der Gebäude;building;budynek;Gebäude;1
der Gedächtnis;memory;pamięć;Gedächtnis;1
der Gehirn;brain;mózg;Gehirn;1
der Geld;money,cash;pieniądze;Geld;1
der Gepäck;luggage;bagaż;Gepäck;1
der Geschenk;gift,present;prezent;Geschenk;1
der Geschäft;business,store,shop;interes;Geschäft;1
der Gesicht;face;twarz;Gesicht;1
der Getränk;drink;napój;Getränk;1
der Gewehr;rifle;karabin;Gewehr;1
der Gewitter;storm;burza;Gewitter;1
der Glas;glass;szklanka, szkło, słoik;Glas;1
der Glück;luck,fortune;szczęście;Glück;1
der Gold;gold;złoto;Gold;1
der Gras;grass;trawa;Gras;1
der Haar;hair;włos;Haar;1
der Handy;cell phone;telefon komórkowy;Handy;1
der Haus;house;dom;Haus;1
der Hemd;shirt;koszula;Hemd;1
der Herz;heart;serce;Herz;1
der Holz;wood;drewno;Holz;1
der Hotel;hotel;hotel;Hotel;1
der Huhn;chicken;kurczak;Huhn;1
der Interesse;interest;zainteresowanie;Interesse;1
der Jahr;year;rok;Jahr;1
der Jahrhundert;century;wiek, stulecie;Jahrhundert;1
der Kalb;calf;cielak, cielę;Kalb;1
der Kalbfleisch;veal;cielęcina;Kalbfleisch;1
der Kind;child,kid,babe;dziecko;Kind;1
der Kinn;chin;podbródek;Kinn;1
der Kleid;dress,gown;sukienka, suknia;Kleid;1
der Knie;knee;kolano;Knie;1
der Krankenhaus;hospital;szpital;Krankenhaus;1
der Ladegerät;charger;ładowarka;Ladegerät;1
der Land;country,land;kraj;Land;1
der Leben;life;życie;Leben;1
der Leder;leather;skóra;Leder;1
der Licht;light;swiatło;Licht;1
der Loch;hole;dziura;Loch;1
der Magazin;magazine;magazyn;Magazin;1
der Meer;sea;morze;Meer;1
der Messer;knife;nóż;Messer;1
der Metall;metal;metal;Metall;1
der Mittagessen;lunch;obiad;Mittagessen;1
der Mädchen;girl;dziewczynka;Mädchen;1
der Ohr;ear;ucho;Ohr;1
der Paar;pair;para;Paar;1
der Papier;paper;papier;Papier;1
der Pferd;horse;koń;Pferd;1
der Rad;wheel;koło;Rad;1
der Radio;radio;radio;Radio;1
der Recht;right;prawo;Recht;1
der Restaurant;restaurant;restauracja;Restaurant;1
der Rindfleisch;beef;wołowina;Rindfleisch;1
der Salz;salt;sól;Salz;1
der Schiff;ship,vessel;statek, okręt;Schiff;1
der Schlafzimmer;bedroom;sypialnia;Schlafzimmer;1
der Schwein;pig;świnia;Schwein;1
der Schweinefleisch;pork;wieprzowina;Schweinefleisch;1
der Seil;rope;lina;Seil;1
der Silber;silver;srebro;Silber;1
der Steak;steak;stek;Steak;1
der Stockwerk;floor;kondygnacja;Stockwerk;1
der Stück;piece;kawałek;Stück;1
der Tablet;tablet;tablet;Tablet;1
der Taschentuch;handkerchief;chusteczka;Taschentuch;1
der Telefon;phone,telephone;telefon;Telefon;1
der Tier;animal;zwierze;Tier;1
der Verbot;banned;zakaz;Verbot;1
der Verbrechen;crime;przestępstwo;Verbrechen;1
der Vergnügen;pleasure;przyjemność;Vergnügen;1
der Vieh;cattle;bydło;Vieh;1
der Warndreieck;warning triangle;trójkąt ostrzegawczy;Warndreieck;1
der Wasser;water;woda;Wasser;1
der Wetter;weather;pogoda;Wetter;1
der Wort;word;słowo;Wort;1
der Wörterbuch;dictionary;słownik;Wörterbuch;1
der Zentrum;center;centrum;Zentrum;1
der Ziel;target,goal,destination;cel;Ziel;1
der Zimmer;room;pokój;Zimmer;1
der Öl;oil;olej;Öl;1
dem Abend;evening;wieczór;Abend;1
dem Alkohol;alcohol;alkohol;Alkohol;1
dem Anfang;beginning,start;początek;Anfang;1
dem Anzug;suit;garnitur;Anzug;1
dem Apfel;apple;jabłko;Apfel;1
dem Arm;arm;ramie;Arm;1
dem Arzt;doctor;lekarz;Arzt;1
dem August;August;sierpień;August;1
dem Ausgang;exit;wyjście;Ausgang;1
dem Bahnhof;station;dworzec kolejowy;Bahnhof;1
dem Ball;ball;piłka;Ball;1
dem Bart;beard;broda;Bart;1
dem Bauernhof;farm;gospodarstwo rolne;Bauernhof;1
dem Baum;tree;drzewo;Baum;1
dem Berg;mountain,mount;góra;Berg;1
dem Besen;broom;miotła;Besen;1
dem Blumenkohl;cauliflower;kalafior;Blumenkohl;1
dem Boden;floor,ground,bottom;grunt, ziemia;Boden;1
dem Brief;letter;list;Brief;1
dem Briefumschlag;envelope;kolerta na listy;Briefumschlag;1
dem Bruder;brother;brat;Bruder;1
dem Brunnen;fountain;studnia;Brunnen;1
dem Bus;bus;autobus;Bus;1
dem Bäcker;Baker;piekarz;Bäcker;1
dem Bär;bear;niedźwiedź, miś;Bär;1
dem Computer;computer;komputer;Computer;1
dem Cousin;cousin;kuzyn;Cousin;1
dem Daumen;thumb;kciuk;Daumen;1
dem Dienst;service;służba;Dienst;1
dem Donner;thunder;grzmot;Donner;1
dem Durchschnitt;average;średnia;Durchschnitt;1
dem Durst;thirst;pragnienie;Durst;1
dem Ehemann;husband;mąż, małżonek;Ehemann;1
dem Eingang;entrance;wejście;Eingang;1
dem Elefant;elephant;słoń;Elefant;1
dem Ellbogen;elbow;łokieć;Ellbogen;1
dem Esel;ass;osioł;Esel;1
dem Faden;thread;nić;Faden;1
dem Fahrstuhl;elevator;winda;Fahrstuhl;1
dem Fahrzeugschein;vehicle registration;numery rejestracyjne;Fahrzeugschein;1
dem Fall;case,drop;przypadek;Fall;1
dem Fehler;mistake,fault,error;błąd;Fehler;1
dem Feind;enemy;wróg;Feind;1
dem Feuerlöscher;fire extinguisher;gaśnica;Feuerlöscher;1
dem Finger;finger;palec;Finger;1
dem Flughafen;airport;port lotniczy, lotnisko;Flughafen;1
dem Fluss;river;rzeka;Fluss;1
dem Freitag;Friday;piątek;Freitag;1
dem Freund;friend,boyfriend;przyjacieł;Freund;1
dem Frühling;spring;wiosna;Frühling;1
dem Fuchs;fox;lis;Fuchs;1
dem Führerschein;driver's license;prawo jazdy;Führerschein;1
dem Garten;garden;ogród;Garten;1
dem Geburtstag;birthday;urodziny;Geburtstag;1
dem Gedankes;thoughts;myśl;Gedankes;1
dem Gott;god;bóg;Gott;1
dem Grad;degree;stopień;Grad;1
dem Grund;reason,matter,cause;powód, dno;Grund;1
dem Gurt;strap;pas;Gurt;1
dem Hagel;hail;grad;Hagel;1
dem Hals;neck,throat;szyja;Hals;1
dem Hammer;hammer;młotek;Hammer;1
dem Herbst;fall,autumn;jesień;Herbst;1
dem Himmel;sky,heaven;niebo;Himmel;1
dem Hund;dog;pies;Hund;1
dem Hut;hat;kapelusz;Hut;1
dem Januar;January;styczeń;Januar;1
dem Junge;boy;chłopiec;Junge;1
dem Kaffee;coffee;kawa;Kaffee;1
dem Kamerad;comrade;kolega;Kamerad;1
dem Kamm;comb;grzebień;Kamm;1
dem Kassierer;cashier;kasjer;Kassierer;1
dem Keller;basement;piwnica;Keller;1
dem Kellner;waiter;kelner;Kellner;1
dem Knochen;bone;kość;Knochen;1
dem Knopf;button,knob;guzik;Knopf;1
dem Knöchel;ankle;kostka;Knöchel;1
dem Koch;cook;kocharz;Koch;1
dem Kopf;head;głowa;Kopf;1
dem Korb;basket;kosz;Korb;1
dem Kragen;collar;kołnierz;Kragen;1
dem Kuchen;cake,pie;ciasto, placek;Kuchen;1
dem Kugelschreiber;ballpen;długopis;Kugelschreiber;1
dem Kunde;customer;klient;Kunde;1
dem Kuss;kiss;pocałunek;Kuss;1
dem König;king;król;König;1
dem Körper;body;ciało;Körper;1
dem Kühlschrank;refrigerator;lodówka;Kühlschrank;1
dem Künstler;artist;artysta;Künstler;1
dem Laden;store;sklep;Laden;1
dem Lastwagen;truck;samochód ciężarowy;Lastwagen;1
dem Lehrer;teacher;nauczyciel;Lehrer;1
dem Leiter;manager;kierownik;Leiter;1
dem Lärm;noise;hałas;Lärm;1
dem Löffel;spoon;łyżka;Löffel;1
dem Lügner;liar;kłamca;Lügner;1
dem Magen;stomach;żołądek;Magen;1
dem Mann;man,male;mężczyzna;Mann;1
dem Mantel;coat,cloak;płaszcz;Mantel;1
dem Mensch;human;człowiek;Mensch;1
dem Metzger;butcher;rzeźnik;Metzger;1
dem Mittag;lunchtime;południe;Mittag;1
dem Moment;moment;moment;Moment;1
dem Monat;month;miesiąc;Monat;1
dem Mond;moon;księżyc;Mond;1
dem Morgen;morning;ranek;Morgen;1
dem Mund;mouth;usta;Mund;1
dem Nachbar;neighbor;sąsiad;Nachbar;1
dem Nachmittag;afternoon;popołudnie;Nachmittag;1
dem Nagel;nail;gwóźdź;Nagel;1
dem Norden;North;północ;Norden;1
dem Ofen;oven;piec;Ofen;1
dem Onkel;uncle;wuj;Onkel;1
dem Ort;place,location;miejsce;Ort;1
dem Osten;east;wschód parcie na wschód;Osten;1
dem Papa;daddy;tata, papa;Papa;1
dem Pass;pass;paszport;Pass;1
dem Personalausweis;identity card;dowód osobisty;Personalausweis;1
dem Platz;spot;plac, miejsce;Platz;1
dem Preis;price,prize;cena;Preis;1
dem Rat;council;rada;Rat;1
dem Regen;rain;deszcz;Regen;1
dem Reifen;tire;opona;Reifen;1
dem Rock;skirt;spódnica;Rock;1
dem Rücken;back;plecy;Rücken;1
dem Saft;juice;sok;Saft;1
dem Salat;salad;sałatka;Salat;1
dem Schatten;shadow;cień;Schatten;1
dem Schauspieler;actor;aktor;Schauspieler;1
dem Schinken;ham;szynka;Schinken;1
dem Schirm;forhead;czoło;Schirm;1
dem Schlüssel;key,clue;klucz;Schlüssel;1
dem Schmetterling;butterfly;motyl;Schmetterling;1
dem Schnee;snow;śnieg;Schnee;1
dem Schrank;closet;szafa;Schrank;1
dem Schriftsteller;writer;pisarz;Schriftsteller;1
dem Schuh;shoe;but;Schuh;1
dem See;lake;jezioro;See;1
dem Sessel;armchair;fotel;Sessel;1
dem Sohn;son;syn;Sohn;1
dem Sommer;summer;lato;Sommer;1
dem Speck;backon;słonina;Speck;1
dem Spiegel;mirror;lustro;Spiegel;1
dem Stahl;steel;stal;Stahl;1
dem Staubsauger;vacuum cleaner;odkurzacz;Staubsauger;1
dem Stein;stone,boulder;kamień;Stein;1
dem Stern;star;gwiazda;Stern;1
dem Strand;beach;plaża;Strand;1
dem Stuhl;chair,stool;krzesło;Stuhl;1
dem Sturm;storm;burza, nawałnica, sztorm, wichura;Sturm;1
dem Süden;south;południe;Süden;1
dem Tag;day;dzień;Tag;1
dem Tee;tea;herbata;Tee;1
dem Teil;part;cześć;Teil;1
dem Teller;plate;talerz;Teller;1
dem Teppich;carpet,rug;dywan;Teppich;1
dem Tiger;tiger;tygrys;Tiger;1
dem Tisch;table;stół;Tisch;1
dem Topf;pot;garnek;Topf;1
dem Traum;dream;sen;Traum;1
dem Turm;tower;wieża;Turm;1
dem Unfall;accident;wypadek;Unfall;1
dem Vater;father,dad;ojciec;Vater;1
dem Versuch;attempt;próba;Versuch;1
dem Vogel;bird;ptak;Vogel;1
dem Vorhang;curtain;zasłona;Vorhang;1
dem Vorschlag;suggestion;propozycja;Vorschlag;1
dem Wagen;wagon,cart,carriage;wóz, samochód;Wagen;1
dem Wald;forest;las;Wald;1
dem Wechsel;change;wymiana;Wechsel;1
dem Wecker;alarm clock;budzik;Wecker;1
dem Weg;way;droga;Weg;1
dem Wein;wine;wino;Wein;1
dem Westen;west;zachód;Westen;1
dem Wind;wind;wiatr;Wind;1
dem Winter;winter;zima;Winter;1
dem Zahn;tooth;ząb;Zahn;1
dem Zahnarzt;dentist;dentysta;Zahnarzt;1
dem Zoll;customs;cło;Zoll;1
dem Zucker;sugar;cukier;Zucker;1
dem Zug;train;pociąg;Zug;1
der Abfahrt;departure;odjazd;Abfahrt;1
der Adresse;address;adres;Adresse;1
der Ameise;ant;mrówka;Ameise;1
der Angst;fear,anxiety;strach;Angst;1
der Ankunft;arrival;przybycie;Ankunft;1
der Antwort;answer,response,reply;odpowiedź;Antwort;1
der Aprikose;apricot;morela;Aprikose;1
der Arbeit;work;praca;Arbeit;1
der Armbanduhr;watch;zegarek;Armbanduhr;1
der Armee;army;armia;Armee;1
der Art;kind,sort;gatunek;Art;1
der Aufgabe;task;zadanie;Aufgabe;1
der Banane;banana;banan;Banane;1
der Bank;bank,bench;bank;Bank;1
der Bank;bank,bench;ławka;Bank;1
der Banknote;banknote;banknot;Banknote;1
der Biene;bee;pszczoła;Biene;1
der Birne;pear;gruszka;Birne;1
der Blume;flower;kwiat;Blume;1
der Bluse;blouse;bluzka;Bluse;1
der Bohne;bean;fasola;Bohne;1
der Bremse;brake;hamulec;Bremse;1
der Briefmarke;stamp;znaczek pocztowy;Briefmarke;1
der Brille;glasses;okulary;Brille;1
der Brust;chest,breast;pierś;Brust;1
der Brücke;bridge;most;Brücke;1
der Brücke;bridge;pod mostem;Brücke;1
der Buchhandlung;bookstore;księgarnia;Buchhandlung;1
der Butter;butter;masło;Butter;1
der Bäckerei;bakery;piekarnia;Bäckerei;1
der Bürste;brush;szczotka;Bürste;1
der Decke;ceiling,blanket,quilt;sufit;Decke;1
der Distanz;distance;dystans;Distanz;1
der Ecke;corner,edge;róg, kąt;Ecke;1
der Ehefrau;wife;żona, małżonka;Ehefrau;1
der Eiche;oak;dąb;Eiche;1
der Eiscreme;ice cream;lody;Eiscreme;1
der Ente;duck;kaczka;Ente;1
der Erbse;pea;groszek;Erbse;1
der Erbsensuppe;pea soup;grochówka;Erbsensuppe;1
der Erdbeere;strawberry;truskawka;Erdbeere;1
der Erde;earth,soil;ziemia;Erde;1
der Fabrik;factory;fabryka;Fabrik;1
der Fahrkarte;ticket;bilet;Fahrkarte;1
der Familie;family;rodzina;Familie;1
der Farbe;color,paint;kolor;Farbe;1
der Ferien;holiday;ferie;Ferien;1
der Feuerwehr;fire department;straż pożarna;Feuerwehr;1
der Flasche;bottle;butelka;Flasche;1
der Fliege;fly;mucha;Fliege;1
der Form;shape,form;kształt;Form;1
der Fremdsprache;foreign language;język obcy;Fremdsprache;1
der Freude;pleasure,delight;radość;Freude;1
der Freundin;girlfriend;przyjaciółka;Freundin;1
der Gabel;fork;widelec;Gabel;1
der Gans;goose;gęś;Gans;1
der Gebrauchsanweisung;instructions for use;instrukcja obsługi;Gebrauchsanweisung;1
der Gefahr;danger;niebezpieczeństwo;Gefahr;1
der Gesellschaft;society;społeczeństwo;Gesellschaft;1
der Gesundheit;health;zdrowie;Gesundheit;1
der Glocke;bell;dzwon;Glocke;1
der Gurke;cucumber;ogórek;Gurke;1
der Haltestelle;bus stop;przystanek;Haltestelle;1
der Hand;hand;dłoń;Hand;1
der Handtasche;handbag;torebka;Handtasche;1
der Haut;skin;skóra;Haut;1
der Hilfe;help;pomoc;Hilfe;1
der Hochzeit;wedding;wesele;Hochzeit;1
der Hose;pant;spodnie;Hose;1
der Insel;island;wyspa;Insel;1
der Jacke;jacket;kurtka;Jacke;1
der Karte;card,map;karta;Karte;1
der Kartoffel;potato;ziemniak, kartofel;Kartoffel;1
der Kassiererin;cashier;kasjerka;Kassiererin;1
der Katze;cat;kot;Katze;1
der Kellnerin;waitress;kelnerka;Kellnerin;1
der Kerze;candle;świeca;Kerze;1
der Kirche;church;kościół;Kirche;1
der Kirsche;cherry;wiśnia;Kirsche;1
der Kleidung;cloth;ubrania, odzież;Kleidung;1
der Klingel;bell;dzwonek;Klingel;1
der Krankenschwester;nurse;pielęgniarka;Krankenschwester;1
der Krankheit;disease,illness;choroba;Krankheit;1
der Krawatte;tie;krawat;Krawatte;1
der Krone;crown;korona;Krone;1
der Kuh;cow;krowa;Kuh;1
der Kunst;art;sztuka;Kunst;1
der Königin;queen;królowa;Königin;1
der Küche;kitchen;kuchnia;Küche;1
der Künstlerin;artist;artystka;Künstlerin;1
der Lampe;lamp;lampa;Lampe;1
der Landkarte;map;mapa;Landkarte;1
der Landstraße;highway;szosa, droga krajowa;Landstraße;1
der Lehrerin;teacher;nauczycielka;Lehrerin;1
der Leiter;ladder;drabina;Leiter;1
der Leute;people;ludzie;Leute;1
der Liebe;love;miłość;Liebe;1
der Lippe;lip;warga;Lippe;1
der Luft;air;powietrze;Luft;1
der Lust;desire;ochota, chęć;Lust;1
der Mahlzeit;meal;posiłek;Mahlzeit;1
der Marmelade;jam;marmolada;Marmelade;1
der Maschine;machine;maszyna;Maschine;1
der Maus;mouse;mysz;Maus;1
der Meisten;most;większość;Meisten;1
der Milch;milk;mleko;Milch;1
der Minute;minute;minuta;Minute;1
der Mitternacht;midnight;północ;Mitternacht;1
der Mutter;mother,nut;matka;Mutter;1
der Mutter;mother,nut;nakrętka, mutra;Mutter;1
der Mücke;mosquito;komar;Mücke;1
der Nachrichten;news;wiadomości;Nachrichten;1
der Nacht;night;noc;Nacht;1
der Nadel;needle;igła;Nadel;1
der Nase;nose;nos;Nase;1
der Natur;nature;natura;Natur;1
der Nuss;Nut;orzech;Nuss;1
der Orange;orange;pomarańcza;Orange;1
der Party;party;party, prywatka, impreza;Party;1
der Person;person;osoba;Person;1
der Pflaume;plum;śliw;Pflaume;1
der Post;post,mail;poczta;Post;1
der Postkarte;postcard;kart;Postkarte;1
der Rechnung;bill;rachunek;Rechnung;1
der Reise;trip,journey,tour,travel;podróż;Reise;1
der Richtung;direction;kierunek;Richtung;1
der Rübe;beet;burak;Rübe;1
der Sache;thing;rzecz;Sache;1
der Sahne;cream;śmietan;Sahne;1
der Schachtel;box;pudło, pudełko;Schachtel;1
der Schale;bowl,tray;misa, salaterka;Schale;1
der Schere;scissors;nożyce;Schere;1
der Schlagsahne;whipped cream;bita śmietana;Schlagsahne;1
der Schlange;snake;wąż;Schlange;1
der Schnecke;snail;ślimak;Schnecke;1
der Schokolade;chocolate;czekolada;Schokolade;1
der Schraube;screw;śruba;Schraube;1
der Schublade;drawer;szuflada;Schublade;1
der Schule;school;szkoła;Schule;1
der Schulter;shoulder;ramię, bark;Schulter;1
der Schwester;sister;siostra;Schwester;1
der Schwierigkeit;difficulty;trudność, kłopot;Schwierigkeit;1
der See;sea;morze;See;1
der Seife;soap;mydło;Seife;1
der Seite;side,page;strona;Seite;1
der Serviette;napkin;serwetka;Serviette;1
der Sicherung;fuse;bezpiecznik;Sicherung;1
der Sommerferien;summer holidays;wakacje;Sommerferien;1
der Sonne;sun;słońce;Sonne;1
der Sprache;language;język, mowa;Sprache;1
der Stadt;city,town;miasto;Stadt;1
der Straße;street,road,avenue;ulica;Straße;1
der Stunde;hour;godzina;Stunde;1
der Suppe;soup;zupa;Suppe;1
der Sünde;sin;grzech;Sünde;1
der Tankstelle;gas station;stacja benzynowa;Tankstelle;1
der Tante;aunt;ciotka, ciocia;Tante;1
der Tasche;pocket;torba;Tasche;1
der Tasse;cup;filiżanka;Tasse;1
der Tastatur;keyboard;klawiatura;Tastatur;1
der Tochter;daughter;córka;Tochter;1
der Toilette;toilet;toaleta, ubikacja;Toilette;1
der Tomate;tomato;pomidor;Tomate;1
der Treppe;stairs;schody;Treppe;1
der Träne;tear;łza;Träne;1
der Tür;door;drzwi;Tür;1
der Uhr;watch,clock;zegarek;Uhr;1
der Unterwäsche;underwear;bielizna;Unterwäsche;1
der Verbindung;connection;związek;Verbindung;1
der Vergangenheit;past;przeszłość;Vergangenheit;1
der Wand;wall;na ścianie;Wand;1
der Wange;cheek;policzek;Wange;1
der Welt;world;świat;Welt;1
der Wette;bet;zakład;Wette;1
der Wiese;meadow;łąka;Wiese;1
der Wissenschaft;science;nauka;Wissenschaft;1
der Woche;week;tydzień;Woche;1
der Wohnung;apartment;mieszkanie;Wohnung;1
der Wolke;cloud;chmura;Wolke;1
der Wolle;wool;wełna;Wolle;1
der Wurst;sausage;kiełbasa;Wurst;1
der Wüste;desert;pustynia;Wüste;1
der Zahl;number;liczba;Zahl;1
der Zahnbürste;toothbrush;szczoteczka do zębów;Zahnbürste;1
der Zange;forceps;szczypce;Zange;1
der Zehe;toe;palec u nogi;Zehe;1
der Zeichnung;drawing;rysunek;Zeichnung;1
der Zeit;time;czas;Zeit;1
der Zeitschrift;magazine;czasopismo;Zeitschrift;1
der Zeitung;newspaper;gazeta;Zeitung;1
der Zigarette;cigarette;papieros;Zigarette;1
der Zitrone;lemon;cytryna;Zitrone;1
der Zukunft;future;przyszłość;Zukunft;1
der Zunge;tongue;język;Zunge;1
der Zwetsch;plum;Śliwka;Zwetsch;1
der Zwiebel;onion;cebula;Zwiebel;1`));
