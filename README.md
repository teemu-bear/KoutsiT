# KoutsiT – TPV naisten viikkorytmi

Verkkosovellus Edustuksen ja Naiset 2:n kaudesta 2026–27: seuraava harjoitus, kausi viikoittain harjoitesisältöineen, viikkomallit, lukion aikataulu ja RPE-kysely.
Toimii selaimessa, sen voi asentaa puhelimen kotinäytölle, ja se toimii myös ilman verkkoyhteyttä.

Osoite: `https://teemu-bear.github.io/KoutsiT/` · RPE-näkymä suoraan: `https://teemu-bear.github.io/KoutsiT/#rpe`

## Julkaisu (GitHub Pages)

1. GitHub → repositorion **Settings → Pages**
2. *Source*: **Deploy from a branch**, *Branch*: `main` ja kansio `/ (root)` → **Save**

Puhelimessa: avaa osoite ja valitse *Lisää Koti-valikkoon* (iPhone, Safari) tai *Asenna sovellus* (Android, Chrome).

## Tiedostot

| Tiedosto | Sisältö |
|---|---|
| `index.html` | Koko sovellus yhdessä tiedostossa: ulkoasu, kauden harjoitusdata ja toiminnallisuus |
| `sw.js` | Offline-tuki (verkko ensin, välimuisti varalla). `VERSION` nousee jokaisessa julkaisussa |
| `manifest.webmanifest`, `icons/` | Asennettavuus, kuvakkeet ja pikakomento *Anna RPE* |

## Mistä sisältö tulee

- **Harjoitukset** tulevat Claude Docs -harjoitedokumentista. `index.html` rakennetaan siitä, joten muutokset tehdään dokumenttiin eikä suoraan tähän tiedostoon.
- **Kellonajat** haetaan Jopoxista sivun avautuessa seuran Apps Script -verkkosovelluksen kautta (`jopox-ajat`). Jos haku ei onnistu, käytetään viimeksi haettuja tai sivuun tallennettuja aikoja.
- **RPE-vastaukset** lähetetään taustalla Google-lomakkeelle, ja ne tallentuvat seuran Google-taulukkoon. Ilman verkkoa vastaus jää jonoon ja lähtee, kun yhteys palaa.

## Paikallinen testaus

```sh
python3 -m http.server 8000
```

ja avaa http://localhost:8000
