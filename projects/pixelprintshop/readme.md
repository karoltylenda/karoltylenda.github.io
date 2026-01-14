# 📠 PixelPrintShop | Enterprise Printing Solutions

![Zasięg: Ogólnopolski](https://img.shields.io/badge/Zasi%C4%99g-Og%C3%B3lnopolski-A855F7)
![Standard: Premium](https://img.shields.io/badge/Standard-Premium-000000)
![UI: Cyber--Noir](https://img.shields.io/badge/Design-Cyber--Noir-black)

## 🚀 O Projekcie
PixelPrintShop to nowoczesna platforma typu showcase dla ogólnopolskiego dostawcy systemów druku klasy Enterprise. Witryna została zaprojektowana w estetyce **Cyber-Noir**, łącząc mroczny, luksusowy design z zaawansowaną interaktywnością.

## 🛠️ Stack Techniczny
- **HTML5**: Semantyczna struktura SEO-friendly.
- **SCSS**: Modułowa architektura stylów (BEM methodology).
- **JavaScript**: Autorski silnik wielokrotnego filtrowania produktów.
- **AOS.js**: Biblioteka animacji typu scroll-triggered.
- **DALL-E 3**: System generowania fotorealistycznych grafik produktowych.

## 📂 Struktura Plików
```text
/pixelprintshop
├── index.html          # Główny plik strony
├── css/
│   └── main.css        # Skompilowane style (wynikowy)
├── scss/               # Pliki źródłowe SASS
│   ├── main.scss       # Główny plik importów
│   ├── _variables.scss # Zmienne (kolory, czcionki)
│   ├── _hero.scss      # Sekcja powitalna
│   ├── _trust.scss     # Pasek zaufania (logotypy branż)
│   ├── _catalog.scss   # Konfigurator floty i system filtrów
│   ├── _pricing.scss   # Sekcja "Cyber-Void" (Pakiety)
│   ├── _workflow.scss  # Protokół wdrożenia
│   ├── _features.scss  # Siatka bento (doświadczenie)
│   ├── _contact.scss   # Formularz z laserowymi polami
│   └── _footer.scss    # Stopka z pulsującym statusem
├── img/                # Grafiki maszyn i ikony
└── js/                 # Skrypty sterujące (filtrowanie)
⚙️ Instrukcja Deweloperska
Kompilacja Stylów
Aby edytować wygląd strony, modyfikuj pliki w folderze scss/, a następnie skompiluj je do folderu css/. Jeśli używasz SASS CLI:

Bash
sass --watch scss/main.scss:css/main.css
Konfiguracja Produktów
Produkty w katalogu są filtrowane na podstawie klas CSS przypisanych do elementu .device-card. Przykład poprawnej konfiguracji:

konica, kyocera - Filtry producenta

a3, a4 - Filtry formatu

color, mono - Filtry kolorystyki

mfp, printer - Filtry typu urządzenia

Kluczowe Funkcjonalności UX
Laser Focus: Pola formularza w sekcji kontaktowej aktywują fioletową linię laserową przy użyciu pseudoelementów i selektora :focus-within.

Dynamiczne Filtrowanie: Skrypt JS w czasie rzeczywistym zarządza widocznością kart produktów bez przeładowania strony.

Pulsing Status Indicator: W stopce znajduje się wskaźnik gotowości operacyjnej (Live Status) z animacją pulsującego światła.

Logistyka 24H: Cała treść strony została zoptymalizowana pod kątem przekazu ogólnopolskiego.

🎨 Design Guide
Primary Color: #A855F7 (Fioletowy Laser)

Background: #050505 (Głęboka Czerń)

Typography: Inter (Wagi: 400, 600, 700, 800, 900)

📄 Prawa Autorskie
Projekt stworzony dla marki PixelPrintShop. Wszystkie prawa zastrzeżone © 2026.