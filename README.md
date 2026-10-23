# KoutsiT – TPV naisten viikkorytmi

Verkkosovellus Edustuksen ja Naiset 2:n viikkorytmistä ja harjoitusrungoista (marraskuu 2026 – huhtikuu 2027).
Toimii selaimessa, sen voi asentaa puhelimen kotinäytölle, ja se toimii myös ilman verkkoyhteyttä.

## Julkaisu (GitHub Pages)

1. GitHub → repositorion **Settings → Pages**
2. *Source*: **Deploy from a branch**, *Branch*: `main` ja kansio `/ (root)` → **Save**
3. Sovellus löytyy hetken päästä osoitteesta `https://teemu-bear.github.io/KoutsiT/`

Puhelimessa: avaa osoite ja valitse *Lisää Koti-valikkoon* (iPhone, Safari) tai *Asenna sovellus* (Android, Chrome).

## Tiedostot

| Tiedosto | Sisältö |
|---|---|
| `data.js` | Kaikki harjoitukset, vaiheet ja lukion aikataulu – **muokkaa tätä**, kun ohjelma muuttuu |
| `app.js` | Näkymän piirtäminen |
| `index.html`, `style.css` | Sivun rakenne ja ulkoasu |
| `sw.js` | Offline-tuki. Nosta `VERSION`-arvoa (v1 → v2), kun muutat tiedostoja |
| `manifest.webmanifest`, `icons/` | Asennettavuus ja kuvakkeet |

## Paikallinen testaus

```sh
python3 -m http.server 8000
```

ja avaa http://localhost:8000
