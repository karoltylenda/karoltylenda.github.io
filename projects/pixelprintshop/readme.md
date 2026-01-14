### 📄 README.md

```markdown
# 📠 PixelPrintShop | Platforma Wynajmu Technologii Enterprise

![Status: Ogólnopolski](https://img.shields.io/badge/Zasi%C4%99g-Og%C3%B3lnopolski-blueviolet)
![Tech: SCSS](https://img.shields.io/badge/Style-SCSS-bf4080)
![UI: Cyber--Noir](https://img.shields.io/badge/Design-Cyber--Noir-black)

## 🚀 O Projekcie
PixelPrintShop to luksusowa witryna typu showcase dla ogólnopolskiego dostawcy systemów druku klasy Premium. Projekt łączy estetykę **cyber-noir** z wysoką wydajnością i intuicyjną nawigacją. Strona została zaprojektowana, aby budować autorytet marki z 20-letnim stażem na rynku ogólnopolskim.

## 🛠️ Stack Techniczny
- **HTML5**: Semantyczna struktura.
- **SCSS (Sass)**: Zaawansowana architektura stylów (modułowa).
- **JavaScript (ES6+)**: Autorski system wielokrotnego filtrowania produktów.
- **AOS (Animate On Scroll)**: System płynnych animacji wejścia.
- **DALL-E 3**: Autorskie grafiki produktowe w klimacie high-tech.

## 📂 Struktura Projektu
```text
/pixelprintshop
├── index.html          # Główny plik strukturalny
├── css/                # Skompilowane pliki CSS
│   └── main.css        # Plik wynikowy (nie edytuj bezpośrednio!)
├── scss/               # Źródła stylów (Edytuj tutaj)
│   ├── main.scss       # Importy i konfiguracja
│   ├── _variables.scss # Kolory, fonty, timingi
│   ├── _hero.scss      # Sekcja nagłówkowa
│   ├── _catalog.scss   # Konfigurator floty i filtry
│   ├── _pricing.scss   # Sekcja "Cyber-Void"
│   ├── _trust.scss     # Social Proof (Logotypy)
│   ├── _contact.scss   # Formularz z mikro-interakcjami
│   └── _footer.scss    # Stopka z systemem statusu
├── img/                # Zasoby graficzne i ikony
└── js/                 # Skrypty

```

## ⚙️ Instalacja i Rozwój

### 1. Kompilacja Stylów

Projekt korzysta z procesora SASS. Aby śledzić zmiany i automatycznie kompilować CSS, użyj komendy:

```bash
sass --watch scss/main.scss:css/main.css

```

### 2. Konfiguracja Kolorystyki

Główny akcent kolorystyczny (fioletowy laser) można zmienić globalnie w pliku `scss/_variables.scss`:

```scss
$color-primary: #A855F7;

```

### 3. Zarządzanie Katalogiem

Urządzenia w katalogu sterowane są za pomocą klas CSS. Aby filtr działał poprawnie, każda karta `.device-card` powinna posiadać klasy odpowiadające atrybutom `data-filter` w panelu filtrów (np. `konica`, `a3`, `color`).

## ✨ Kluczowe Funkcjonalności UX

* **Laserowe Pola Formularza**: Animowane pseudoelementy `::after` reagujące na `:focus-within`.
* **Multifiltracja**: Skrypt JS umożliwiający jednoczesne filtrowanie po producencie i parametrach technicznych.
* **Pulsing Live Status**: Animacja SVG w stopce sygnalizująca gotowość operacyjną 24/7.
* **Cyber-Noir Imagery**: Specjalnie generowane grafiki z oświetleniem typu *rim-light* i *underglow*.

## 📄 Licencja

Projekt autorski dla marki PixelPrintShop. Wszystkie prawa zastrzeżone © 2026.

```