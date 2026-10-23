// Harjoitusdata. Muokkaa tätä tiedostoa, kun ohjelma muuttuu.
// Päivän tyyppi (t): kova | keski | kevyt | sali | peli | lepo
// rows: [minuutit, kuvaus] – tyhjä minuuttikenttä näkyy viivana.

const T = {
  kova:{n:"Kova",c:"--kova",h:100}, keski:{n:"Keskitaso",c:"--keski",h:66},
  kevyt:{n:"Kevyt",c:"--kevyt",h:38}, sali:{n:"Sali",c:"--sali",h:55},
  peli:{n:"Peli",c:"--peli",h:92}, lepo:{n:"Lepo",c:"--lepo",h:6}
};
const DN=["Ma","Ti","Ke","To","Pe","La","Su"];

// Lukion aikataulu: ph = vaihe, johon tapahtuma kuuluu
const S=[
  {ph:"marraskuu",d:"19.–27.11.",w:"47–48",t:"Koeviikko (2. jakso)",e:"Lukiolaisille vapaaehtoinen. Lopullinen karsinta siirtyy pe 4.12."},
  {ph:"talvi",d:"30.11.–4.12.",w:"49",t:"Try outin viimeinen arviointiviikko",e:"Lopulliset päätökset pe 4.12. harjoituksen jälkeen"},
  {ph:"talvi",d:"19.12.–10.1.",w:"51–1",t:"Joululoma",e:"Joulutauko 21.12.–3.1., omatoiminen ohjelma"},
  {ph:"talvi",d:"1.–9.2.",w:"5–6",t:"Koeviikko (3. jakso)",e:"Lukiolaisille vapaaehtoinen"},
  {ph:"kevat",d:"1.–5.3.",w:"9",t:"Talviloma",e:"Testit siirretty viikolle 10 (ma 8.3. ja to 11.3.)"},
  {ph:"kevat",d:"16.3.–2.4.",w:"11–13",t:"Ylioppilaskirjoitukset",e:"Abi vapaa omana koepäivänään ja edellisenä päivänä"},
  {ph:"kevat",d:"25.–29.3.",w:"12–13",t:"Pääsiäisloma",e:"Pitkäperjantai 26.3. vapaa"},
  {ph:"kevat",d:"5.–13.4.",w:"14–15",t:"Koeviikko (4. jakso)",e:"Lukiolaisille vapaaehtoinen"}
];

const salitaysi={t:"sali",title:"Sali: täysi voimaharjoitus",sub:"Oma salivalmentaja · 48 h ennen torstain kovinta harjoitusta",rpe:"RPE 6",
  rows:[["","Alaraajat: kyykky, askelkyykky, maastaveto, hip thrust – tekniikka ennen kuormaa"],["","Nordic hamstring 1–2 sarjaa"],["","Hyppy- ja alastulotekniikka, polvet linjassa"],["","Keskivartalo, lantio ja nilkat"]]};
const salikevyt={t:"kevyt",title:"Sali: kevennetty",sub:"Pelin jälkeen, ei raskaita jalkaliikkeitä",rpe:"RPE 3–4",
  rows:[["","Ylävartalo ja keskivartalo"],["","Liikkuvuus ja kehonhuolto"],["","Ei raskaita jalkaliikkeitä eikä hyppyjä"]]};
const lepo={t:"lepo",title:"Lepo",sub:"Täysi lepopäivä",rows:[]};
const maKeski={t:"keski",title:"Kenttä: teema ja tekniikka",sub:"90 min · MV-valmentaja · futsalia pelanneille palauttava versio",rpe:"RPE 5–6",
  rows:[["0–20","FIFA 11+ osat 1–3"],["20–35","Rondot 7v3, kaksi kosketusta"],["35–60","Viikon teema asemilla (4 × 10 pelaajaa)"],["60–73","8v8 + MV kahdella puolikkaalla"],["73–85","MAS-juoksu viikoilla, jotka on merkitty (15 s / 15 s tai 30 s / 30 s)"],["85–90","Jäähdyttely ja palaute"],["","Viikonloppuna futsalia pelanneet: teemaosio ja rondot mukana, ei MAS-juoksua eikä 8v8:aa, tilalle 15 min kevyt hölkkä ja liikkuvuus"]]};
const toKova={t:"kova",title:"Kenttä: viikon kovin",sub:"90 min · MV-valmentaja",rpe:"RPE 7–8",
  rows:[["0–20","FIFA 11+ osat 1–3, plyometria"],["20–30","Nopeus: 4 × 20 m tai 3 × 30 m, täysi palautus"],["30–55","Teemaharjoite isolla alueella, esim. 9v9 kolmella vyöhykkeellä"],["55–85","11v11 edustus vs. N2 + täydennykset, 3 × 10 min"],["85–90","Jäähdyttely"]]};
const peKevyt={t:"kevyt",title:"Kenttä: aktivointi ja erikoistilanteet",sub:"60 min",rpe:"RPE 3–4",
  rows:[["0–15","11+ osa 1 ja dynaaminen liikkuvuus"],["15–30","4v4–5v5 pienellä alueella, 4 × 2 min"],["30–55","Kulmat, vapaat ja rajaheitot vuorotellen"],["55–60","Reaktiolähdöt 4 × 10 m"]]};

const P = {
  marraskuu:{name:"Marraskuu",dates:"vk 45–48 · try out",types:{
    tryout:{name:"Try out -viikko",note:"Maanantai ja torstai ovat try outia (vk 45–46 ryhmät A ja B erikseen, vk 47–48 yhdistetty ryhmä). Perjantai on kaikkien yhteinen, myös futsalviikoilla. Lopullinen karsinta on pe 4.12. Sunnuntaipelien (1.11. ja 8.11.) jälkeen ykkösen pelaajat tekevät maanantain try outista kevennetyn version.",
      days:[
        {t:"keski",title:"Try out: ryhmä A / yhdistetty",sub:"90 min · MV-valmentaja · 2 valmentajaa try outissa, 1 sivuryhmällä",rpe:"RPE 6–7",rows:[["0–20","FIFA 11+ taso 1"],["20–30","Nopeus tai testit (viikolla 45)"],["30–50","Teemaharjoite: 1v1, prässin laukaisija 4v6 tai siirtymä 3v2 → 2v1"],["50–85","8v8 / 9v9 / 11v11, joukkueet sekoitettu, arviointilomake"],["85–90","Jäähdyttely"]]},
        salitaysi,
        lepo,
        {t:"kova",title:"Try out: ryhmä B / yhdistetty",sub:"90 min · MV-valmentaja arvioi maalivahdit",rpe:"RPE 7–8",rows:[["0–20","FIFA 11+ taso 1"],["20–30","Nopeus: N1–N3"],["30–50","Teemaharjoite isolla alueella"],["50–85","11v11 tai 9v9, arviointilomake"],["85–90","Jäähdyttely"]]},
        {t:"keski",title:"Yhteisharjoitus 60–70 pelaajaa",sub:"90 min · koko kenttä neljässä osassa",rpe:"RPE 6–7",rows:[["0–20","11+ neljässä ryhmässä, kapteenit vetävät"],["20–35","Rondot neljällä alueella"],["35–85","4 peliä 7v7–8v8, 8–10 min, joukkueet vaihtuvat"],["85–90","Jäähdyttely"]]},
        {t:"peli",title:"Futsal",sub:"Ykkönen 14.11. ja 21.11. · N2 turnaus 21.11.",rows:[["","Ykkösen ja kolmosen joukkueet pidetään erillään"],["","Viikonloppuna 28.–29.11. ei futsalia"]]},
        {t:"peli",title:"Futsal tai lepo",sub:"Ykkönen su 1.11. ja su 8.11.",rows:[["","Muina sunnuntaina lepo"]]}]}
  }},
  talvi:{name:"Joulu–helmikuu",dates:"vk 49–8 · koko ryhmä",types:{
    n2futsal:{name:"N2: futsalviikko",note:"N2 pelaa futsal kolmosen turnauksen (kaksi peliä samana päivänä) noin kerran kuussa: 19.12., 9.1., 31.1., 13.2. ja 20.2. Turnauksen jälkeisenä maanantaina pelanneet tekevät kenttäharjoituksesta palauttavan version.",
      days:[maKeski,salitaysi,lepo,toKova,peKevyt,
        {t:"peli",title:"Futsal kolmonen: turnaus",sub:"2 peliä samana päivänä",rows:[["","Pelien välissä tankkaus ja lämpimänä pysyminen"],["","Rasitus 1–10 kirjataan pelien jälkeen"]]},lepo]},
    n2:{name:"N2: tavallinen viikko",note:"Ei futsalia viikonloppuna. Koko ryhmä tekee maanantain kenttäharjoituksen täytenä.",
      days:[maKeski,salitaysi,lepo,toKova,peKevyt,lepo,lepo]},
    ykkonen:{name:"Ykkösen pelaajat",note:"Noin 17 edustuksen pelaajaa pelaa futsal ykköstä lähes joka viikonloppu, useimmiten lauantaina. Pelin jälkeisenä maanantaina ykkösen pelaajat tekevät kenttäharjoituksesta palauttavan version. Sunnuntaipelin (14.2.) jälkeen myös tiistain sali kevennetään. Ke 6.1. pelin viikolla torstai on keskitasoinen eikä ykkösen pelaajille ole 11v11-osiota.",
      days:[maKeski,salitaysi,lepo,toKova,peKevyt,
        {t:"peli",title:"Futsal ykkönen",sub:"Yksi peli · useimmiten lauantaina",rows:[["","Vapaat viikonloput: 28.–29.11. ja joulu–uusivuosi"],["","Viimeinen peli la 27.2."]]},lepo]}
  }},
  kevat:{name:"Maalis–huhtikuu",dates:"vk 9–15 · harjoituskausi",types:{
    harj:{name:"Harjoitusotteluviikko",note:"Futsal on ohi. Harjoitusottelu pelataan lauantaina, ja torstai pysyy viikon kovimpana. Maanantain MAS-paikalla tehdään nopeuskestävyyttä (6 × 30 m, 20 s palautus). 2. pääsiäispäivä ma 29.3. ja pitkäperjantai 26.3. ovat vapaita.",
      days:[
        {t:"keski",title:"Kenttä: teema ja nopeuskestävyys",sub:"90 min · MV-valmentaja",rpe:"RPE 6–7",rows:[["0–20","FIFA 11+ taso 3"],["20–35","Rondot tai vastaprässirondo 6v4"],["35–60","Teema: erikoistilanteet, prässi tai joukkuekohtainen pelisuunnitelma"],["60–75","8v8 + MV"],["75–85","SK 2 × 6 × 30 m, 20 s / 4 min palautus"],["85–90","Jäähdyttely"]]},
        salitaysi,
        lepo,
        {t:"kova",title:"Kenttä: ottelusimulaatio",sub:"90 min · MV-valmentaja",rpe:"RPE 8",rows:[["0–20","FIFA 11+ taso 3"],["20–30","Nopeus N2–N4"],["30–85","Siirtymäpeli ja 11v11, huhtikuussa 2 × 25 min ottelusimulaatio"],["85–90","Jäähdyttely"]]},
        {t:"kevyt",title:"Aktivointi ennen ottelua",sub:"60 min",rpe:"RPE 3",rows:[["0–15","11+ osa 1 ja liikkuvuus"],["15–30","4v4–5v5, 4 × 2 min"],["30–55","Ottelun erikoistilanteet"],["55–60","N5 3 × 10 m"]]},
        {t:"peli",title:"Harjoitusottelu",sub:"Edustus ja N2",rows:[["","Ottelut sovitaan viikoille 10–14"]]},lepo]}
  }},
  sarjaan:{name:"Sarjaan",dates:"vk 16–17 · keventäminen",types:{
    kevennys:{name:"Keventämisviikko (vk 16)",note:"Harjoitusmäärää vähennetään 30–40 %, mutta teho säilyy: pelit ja sprintit yhtä kovia, mutta niitä on vähemmän.",
      days:[
        {t:"keski",title:"Kenttä: tekniikka ja teema",sub:"75 min · MV-valmentaja",rpe:"RPE 6",rows:[["0–20","FIFA 11+ taso 3"],["20–35","Rondot 7v3"],["35–55","9v9 + MV joukkueittain, 2 × 7 min"],["55–65","Lentävä 20 m × 2"],["65–75","Jäähdyttely"]]},
        salikevyt,
        lepo,
        {t:"keski",title:"Kenttä: lyhyt ottelusimulaatio",sub:"75 min",rpe:"RPE 7",rows:[["0–20","FIFA 11+ taso 3"],["20–28","3 × 20 m"],["28–68","11v11 2 × 18 min"],["68–75","Jäähdyttely"]]},
        {t:"kevyt",title:"Aktivointi",sub:"50 min",rpe:"RPE 3",rows:[["0–15","11+ osa 1"],["15–30","4v4 3 × 2 min"],["30–45","Erikoistilanteet"],["45–50","N5 3 × 10 m"]]},
        {t:"peli",title:"Harjoitusottelu",sub:"Jos sovittu",rows:[]},lepo]},
    ottelu:{name:"Sarjaviikko (vk 17)",note:"Rytmi rakennetaan sarjan ensimmäisen ottelun mukaan (MD = ottelupäivä). Oletus: ottelu viikonloppuna 1.–2.5. Tarkka päivä vielä auki.",
      days:[
        {t:"keski",title:"MD-5: vastustajakohtainen",sub:"90 min · MV-valmentaja",rpe:"RPE 7",rows:[["0–20","FIFA 11+ taso 3"],["20–35","Rondot ja 3 s vastaprässi"],["35–60","Vastustajan rakentelu ja oma prässi, 9v9 + MV"],["60–80","8v8 + MV 2 × 8 min"],["80–90","3 × 20 m ja jäähdyttely"]]},
        {t:"sali",title:"MD-4: sali, voima ylläpitävästi",sub:"Oma salivalmentaja",rpe:"RPE 5",rows:[["","Alaraajat 2–3 sarjaa, kuorma ennallaan mutta toistoja vähemmän"],["","Nordic hamstring 1 sarja"],["","Keskivartalo ja nilkat"]]},
        lepo,
        {t:"keski",title:"MD-2: lyhyt ja terävä",sub:"75 min",rpe:"RPE 6–7",rows:[["0–20","FIFA 11+ taso 3"],["20–28","4 × 10 m"],["28–58","Avauskokoonpanot vastakkain 2 × 12 min"],["58–70","Ottelun erikoistilanteet"],["70–75","Jäähdyttely"]]},
        {t:"kevyt",title:"MD-1: aktivointi",sub:"45 min",rpe:"RPE 2–3",rows:[["0–10","11+ osa 1"],["10–20","5v2-rondot 3 × 2 min"],["20–40","Erikoistilanteet kävellen"],["40–45","N5 3 × 10 m"]]},
        {t:"peli",title:"Sarjaottelu (MD)",sub:"Kakkonen ja kolmonen",rows:[["","Vappu 1.5. – tarkista ottelupäivä sarjaohjelmasta"]]},
        {t:"lepo",title:"Lepo tai palauttava",sub:"MD+1",rows:[["","Pelanneet: kevyt palauttava. Muut: lepo"]]}]}
  }}
};
