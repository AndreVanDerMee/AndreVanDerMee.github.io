# Rijschool Ride2Go - Website

Welkom bij de professionele website voor Rijschool Ride2Go!

## 🎉 Nieuw: Gratis Proefles Inschrijfformulier!

De website heeft nu een volledig werkend inschrijfformulier voor gratis proeflessen. Hieronder vind je de verschillende opties om formulier inzendingen te ontvangen.

---

## 📋 Formulier Inzendingen Ontvangen - OPTIES

### ✅ OPTIE 1: WhatsApp (Standaard - Direct Werkend!)

**Status:** ✅ **Al actief in form-handler.js**

Wanneer iemand het formulier invult, wordt de data automatisch naar WhatsApp gestuurd.

**Voordelen:**
- ✅ Direct werkend, geen setup nodig
- ✅ Gratis
- ✅ Je ontvangt alle info via WhatsApp
- ✅ Persoonlijk contact

**Setup:**
1. Open `form-handler.js`
2. Zoek regel met `https://wa.me/31612345678`
3. Vervang `31612345678` met jouw WhatsApp nummer (formaat: landcode + nummer zonder 0)
   - Voorbeeld: Nederland 06 12345678 wordt 31612345678

**Klaar!** Het formulier werkt nu.

---

### OPTIE 2: Formspree (Gratis Email Service)

**Gratis tot 50 inzendingen per maand**

**Hoe werkt het:**
1. Ga naar [https://formspree.io](https://formspree.io)
2. Maak een gratis account
3. Maak een nieuw formulier aan
4. Kopieer je Form ID (bijv. `mqazzzzz`)
5. Open `form-handler.js`
6. Zoek de Formspree sectie (OPTIE 2)
7. Verwijder de `/*` en `*/` (uncomment)
8. Vervang `YOUR_FORM_ID` met je eigen ID
9. Comment de WhatsApp sectie uit (zet `/*` en `*/` eromheen)

**Voordelen:**
- ✅ Professioneel
- ✅ Email notificaties
- ✅ Dashboard met alle inzendingen
- ✅ Spam bescherming

---

### OPTIE 3: Netlify Forms (Als je op Netlify host)

**100% Gratis op Netlify**

**Setup:**
1. Upload je website naar [Netlify](https://www.netlify.com)
2. Open `index.html`
3. Voeg toe aan de `<form>` tag: `data-netlify="true"`
4. Verwijder of comment uit het JavaScript in `form-handler.js`

**Voorbeeld:**
```html
<form id="proeflesForm" class="contact-form" method="POST" data-netlify="true">
```

**Voordelen:**
- ✅ Helemaal gratis
- ✅ Automatische spam filtering
- ✅ Email notificaties
- ✅ Dashboard met inzendingen
- ✅ Zeer betrouwbaar

---

### OPTIE 4: Email (Mailto - Eenvoudig maar beperkt)

**Setup:**
1. Open `form-handler.js`
2. Zoek de MAILTO sectie (OPTIE 1)
3. Verwijder de `/*` en `*/` (uncomment)
4. Vervang `info@ride2go.nl` met jouw email
5. Comment de andere opties uit

**Nadelen:**
- ⚠️ Opent email programma van bezoeker
- ⚠️ Werkt niet op mobiel als geen email app
- ⚠️ Minder professioneel

---

### OPTIE 5: Google Forms

**Gratis en onbeperkt**

**Setup:**
1. Maak een Google Form op [forms.google.com](https://forms.google.com)
2. Maak dezelfde velden aan
3. Klik op "Verzenden" → "Embed HTML" → kopieer de iframe code
4. Vervang het huidige formulier in `index.html` met de iframe

**Voordelen:**
- ✅ Helemaal gratis
- ✅ Onbeperkte inzendingen
- ✅ Automatisch in Google Sheets
- ✅ Email notificaties mogelijk

---

### OPTIE 6: Eigen Backend/Server

Als je een eigen server hebt met PHP, Node.js, Python, etc:

**PHP Voorbeeld:**
1. Maak `submit.php` aan op je server
2. Gebruik `$_POST` om formulier data te ontvangen
3. Stuur email met `mail()` functie
4. Vervang form action naar `submit.php`

---

## 🎯 Aanbeveling

**Voor meeste gebruikers:**
- ✅ **WhatsApp** (standaard, werkt direct!)
- ✅ **Formspree** (voor professionele uitstraling)
- ✅ **Netlify Forms** (als je op Netlify host)

---

## 📸 Instagram Foto's Toevoegen

De website heeft een mooie galerij voor geslaagde leerlingen.

### Stap 1: Download de foto's van Instagram
1. Ga naar https://www.instagram.com/ride2go_rijschool/
2. Klik op een foto van een geslaagde leerling
3. Klik rechts op de foto → "Afbeelding opslaan als..."

### Stap 2: Plaats de foto's
Je hebt al 4 foto's toegevoegd:
- `ride2go1.jpg` ✅
- `ride2go2.jpg` ✅
- `ride2go3.jpg` ✅
- `ride2go4.jpg` ✅

Om meer toe te voegen, voeg ze toe aan dezelfde map en update de HTML.

---

## 📱 Contactgegevens Aanpassen

Pas de volgende gegevens aan in `index.html` en `form-handler.js`:

1. **Telefoonnummer**: Zoek naar `06 12 34 56 78` en vervang met jouw nummer
2. **WhatsApp**: Zoek naar `31612345678` en vervang met jouw nummer (internationaal formaat)
3. **E-mail**: Zoek naar `info@ride2go.nl` en vervang met jouw e-mailadres
4. **Instagram**: Staat al goed: `@ride2go_rijschool`

---

## 🚀 Website Online Zetten

### Gratis Hosting Opties:

**1. Netlify (Aanbevolen)**
- Ga naar [netlify.com](https://www.netlify.com)
- Sleep je hele map naar Netlify
- Krijg direct een gratis URL
- ✅ Netlify Forms werkt automatisch!

**2. GitHub Pages**
- Maak een GitHub account
- Upload deze bestanden
- Activeer GitHub Pages in de instellingen

**3. Vercel**
- Upload naar [vercel.com](https://vercel.com)
- Gratis hosting met custom domein support

---

## 🎯 Features van de Website

✅ Volledig responsive (werkt op alle apparaten)
✅ Moderne, professionele uitstraling
✅ **Gratis Proefles Inschrijfformulier**
✅ Directe links naar WhatsApp en Instagram
✅ Smooth scrolling en mooie animaties
✅ Gallery met echte geslaagde leerlingen
✅ 3 pakket opties
✅ SEO geoptimaliseerd

---

## 📋 Checklist Voordat Je Live Gaat

- [ ] WhatsApp nummer aangepast in `form-handler.js`
- [ ] Telefoonnummer aangepast in `index.html`
- [ ] E-mailadres aangepast
- [ ] Formulier getest (vul in en kijk of het werkt!)
- [ ] Instagram foto's gecontroleerd
- [ ] Website getest op mobiel en desktop
- [ ] Alle links werken

---

## 🆘 Hulp Nodig?

Heb je vragen? Je kunt:
- De HTML, CSS en JS bestanden openen met een teksteditor
- Online tutorials zoeken voor HTML/CSS/JavaScript
- Hulp vragen aan iemand met webdesign ervaring

---

**Veel succes met Rijschool Ride2Go! 🚗💨**
