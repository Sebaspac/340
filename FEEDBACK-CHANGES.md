# 340 Consultancy — Feedback umgesetzt (Stand: 2026-06-24)

## Deploy-Status
- **https://340consultancy-demo.netlify.app** → zeigt bewusst die **alte, kundenfreigegebene Version** (Deploy `6a104a92`, zurückgerollt).
- **Diese Feedback-Umsetzung läuft nur lokal** (`localhost:8080`) und ist **nicht deployed**. Erst auf explizite Ansage live schalten.

Legende:
- ✅ **Erledigt** — umgesetzt & deployed
- ⚠️ **Erledigt, bitte prüfen** — umgesetzt, aber mit einer Annahme (Pin-Position war im PDF nicht sichtbar)
- ❓ **Brauche Input** — Kommentar ist ohne die genaue Pin-Position / fehlenden Kontext nicht eindeutig
- ⛔ **Blockiert** — fehlende Datei oder Font, die ich nicht habe

> Wichtiger Hinweis: Das exportierte Pastel-PDF enthält nur die **Kommentar-Texte**, nicht die visuelle Pin-Position auf der Seite. Bei einigen Kommentaren („hate it", „don't like this quote", „these buttons") ist dadurch nicht eindeutig, auf welches Element sie zeigen. Diese habe ich unter ❓ gesammelt — sag mir kurz das Element und ich erledige sie sofort.

---

## HOMEPAGE

| # | Feedback | Status | Was gemacht / was fehlt |
|---|----------|--------|--------------------------|
| 1 | „hate it" | ❓ | Unklar, auf welches Element sich der Pin bezieht. Bitte Element nennen. |
| 2 | Ausgehöhltes 340 im Hintergrund in Monument-Font (wie Logo) | ⛔ | **Monument-Font fehlt** (kommerziell, nicht im Projekt). 340 ist aber jetzt **pink** (siehe #37). Sobald du die `.otf/.woff` schickst, baue ich den Font ein. |
| 13 | Bild `CONTACTUSPAGE` platzieren | ⛔ | Datei nicht vorhanden. Bitte als Datei in Downloads legen. |
| 20 | „Nancy & Linda (since im on the left)" | ✅ | Founders-Titel auf **„Nancy & Linda"** geändert + Bio-Reihenfolge angepasst (Nancy zuerst). |
| 21 | Bild ersetzen mit `homepagesuggestionimage` | ⛔ | Datei nicht vorhanden. |
| 22 | Bild von Linda auf Stuhl einsetzen | ⛔ | Datei nicht vorhanden. |
| 23 | Slides als Reihen von oben nach unten (wie „how we work" auf Services), Platz für Phone-Animation | ❓ | Die 3 „Slides" sind aktuell ein **horizontales Scroll-Erlebnis** (ScrollAdventure). Umbau auf vertikale Reihen + Phone-Animation ist größer und der Bezug zur Phone-Animation ist unklar. Möchtest du das? Dann skizziere ich es separat. |
| 29 | Text klebt am Rand | ❓ | Welcher Abschnitt? (Hero-Padding habe ich bereits großzügiger gemacht.) Bitte Stelle nennen. |
| 31 | Buttons so machen, dass Menü/Seite kommt | ❓ | Welche Buttons genau? |
| 35 | Text unter den Headlines entfernen (nur Services nennen) | ❓ | Welche Headline-Sektion? |
| 36 | Alle Texte auf Englisch | ✅ | **Komplette Site auf Englisch**: Homepage-Headline („EVERYONE WANTS MORE REACH"), UP2DATE-Seite, Kontakt-Formular, YesCTA („Ready to level up?", „LET'S GO →"), Phone-Animation, alle Toast-Meldungen. |
| 37 | 340 in pink | ✅ | Hero-Wasserzeichen 340 ist jetzt deutlich pink (Stroke 0.14 → 0.42). |
| 39 | Reihenfolge: 1. Services 2. Nancy & Linda 3. How we work | ✅ | Slides neu sortiert. |
| 41 | Augen „zittern" beim Hovern | ✅ | HoverEyes-Spring weicher gemacht (smoother, kein Jitter). |

---

## SERVICES

| # | Feedback | Status | Was gemacht / was fehlt |
|---|----------|--------|--------------------------|
| 6 | Statt Preis „custom" | ✅ | Strategy-Karte zeigte „€550–€1,000" → jetzt **„Custom"** (Drawer ebenfalls). |
| 9 | Add-ons-Sektion (Blocks mit Name + kurzem Text) | ⚠️ | Sektion **„Add-ons" gebaut mit 6 Blocks**, Texte sind aber **Platzhalter**. Bitte echte Add-on-Namen/Texte aus eurem Dokument schicken. |
| 30 | „Our Services" nach oben | ✅ | Services-Bento steht jetzt direkt unter dem Hero, vor Content/Industries. |
| 43 | Nur Foundation/Basics listen, Specifics im Dokument | ⛔ | Brauche euer Dokument mit den konkreten Inhalten. Aktuell unverändert. |
| 44 | „don't like this quote" | ❓ | Welches Zitat genau? (z. B. „Each piece serves a purpose…" oder Hero-Tagline?) |
| 45 | „Every industry"-Sektion minimalistischer, links/rechts → eine Sektion | ✅ | Content + Industries sind jetzt **je eine clean minimalistische Sektion** (kein Foto-Split mehr). |
| 46 | #3 streichen, nur 4 Steps | ✅ | Schritt 03 entfernt, neu nummeriert auf **4 Steps**, Copy „Four steps". |
| 47 | Font minimalistischer, „body" Font | ⚠️ | „How it works"-Beschreibungen jetzt **Body-Font (Syne)** statt Serif. Bitte prüfen, ob das die gemeinte Stelle war. |
| 48 | Sektion zu groß | ✅ | „How it works" füllt nicht mehr den ganzen Viewport, kompakter. |
| 49 | Button beim Klick grün/pink wechseln | ❓ | Welcher Button? (CTA-Buttons wechseln bereits pink→grün beim Hover; „beim Klick"-Active-State unklar.) |
| 50 | #340consultancy | ✅ | Als pink-Akzent unten bei „How it works" eingefügt. |

---

## ABOUT US

| # | Feedback | Status | Was gemacht / was fehlt |
|---|----------|--------|--------------------------|
| 17 | Bild hochziehen (sitzt tief) | ⚠️ | **Nancy-Founder-Foto** hochgezogen (objectPosition 45% → 22%). Bitte prüfen, ob das gemeinte Bild. |
| 25 | Grün für die Sprach-Bubbles | ✅ | Language-Chips jetzt **CI-Grün**. |
| 26 | Font wie auf den anderen Seiten | ✅ | About-Hero-Headline „WE ARE 340" → **Kelson** (wie OUR WORK / OUR SERVICES). |
| 27 | 340 in Monument-Font | ⛔ | **Monument-Font fehlt** (siehe #2). |
| 28 | Grün integrieren (Stelle für Grün) | ✅ | Grün auf den **Values-Icons** integriert (Best-Guess-Stelle). |
| 34 | Green fill | ✅ | Values-Icon-Kreise jetzt **grün gefüllt**. |
| 40 | Echte Values einfügen | ⛔ | Brauche eure echten Unternehmenswerte. Aktuell 3 Platzhalter-Values. |
| 42 | Foto ersetzen mit `about_us_nancy` (Bra wegretuschiert) | ⛔ | Datei nicht vorhanden. |

---

## WORK

| # | Feedback | Status | Was gemacht / was fehlt |
|---|----------|--------|--------------------------|
| 51 | Client-Namen unter den Metriken entfernen | ✅ | Im Stat-Marquee entfernt. |
| 52 | Nur 3 Case Studies, 1. Reihe entfernen | ✅ | Die 2 breiten Karten (Studio Displays, AlbaNova) entfernt → 3 bleiben. **⚠️ Achtung:** genau diese 2 hatten die einzigen fertigen Detailseiten; 2 der verbleibenden 3 haben (noch) keine Detailseite. Falls du lieber die mit Detailseite behalten willst, sag Bescheid. |
| 53 | Wie Services | ✅ | Content-Sektion zu minimalistischer Einzel-Sektion (wie Services). |
| 54 | Wie Services | ✅ | Industries-Sektion zu minimalistischer Einzel-Sektion (wie Services). |

---

## ABOUT / UP2DATE

| # | Feedback | Status | Was gemacht / was fehlt |
|---|----------|--------|--------------------------|
| 55 | „doesn't look like us lol" | ℹ️ | Zur Kenntnis genommen — das Visual ist ein Platzhalter-Bild, das ihr ersetzt. Kein Code-Change. |
| 56 | Freebie = free social media content calendar | ✅ | Lead-Magnet-Copy auf **„Content Calendar"** umgestellt (+ Englisch). |
| 57 | Sektion etwas kleiner | ⚠️ | **Newsletter-Sektion** verkleinert (Padding + Headline). Bitte prüfen, ob die gemeinte Sektion. |

---

## CONTACT

| # | Feedback | Status | Was gemacht / was fehlt |
|---|----------|--------|--------------------------|
| 16 | Workshops als Option (+ „not sure yet") | ✅ | „Workshops" zum Dropdown hinzugefügt („Not sure yet" bleibt). |
| 58 | Visual-Vorschlag `CONTACTUSPAGE.JPG` | ⛔ | Datei nicht vorhanden. |

---

## WORK / CASE STUDY (Studio Displays etc.)

| # | Feedback | Status | Was gemacht / was fehlt |
|---|----------|--------|--------------------------|
| 59 | Zu viele Bilder, lieber 3 kleine quadratische Bilder in einer Reihe | ✅ | Die 3 großen Bild-Module ersetzt durch **eine Reihe mit 3 quadratischen Bildern**. |

---

## Was ich von dir brauche, um den Rest zu erledigen

**Dateien (bitte in den Downloads-Ordner legen):**
- `CONTACTUSPAGE.JPG` (für #13 Homepage + #58 Contact)
- `homepagesuggestionimage` (#21)
- Bild „Linda auf Stuhl" (#22)
- `about_us_nancy` (#42)

**Font:**
- **Monument** (Monument Extended o. ä.) als `.otf`/`.woff2` für #2 + #27 — kommerzieller Font, den ich nicht beschaffen kann.

**Inhalte:**
- Echte **Add-on-Liste** (#9) — Namen + kurze Beschreibung
- **Foundation/Basics**-Inhalte für Services (#43)
- Eure echten **Unternehmenswerte** (#40)

**Pin-Position klären (sag mir das Element):**
- #1 „hate it", #23 (Slides-Umbau), #29 (welcher Text am Rand), #31 (welche Buttons), #35 (welche Headline), #44 (welches Zitat), #49 (welcher Button)

**Kleiner Rest:**
- Die Passwort-Maske (Private Preview) ist noch auf Deutsch („Passwort eingeben…", „ZUGANG →"). Da es nur das Vorschau-Gate ist, habe ich es gelassen — sag Bescheid, wenn ich es auch übersetzen soll.
