# 📝 Form di Registrazione per Sviluppatori

Questo progetto è un form di registrazione per sviluppatori realizzato in React. Il form implementa campi controllati e non controllati, validazione in tempo reale, e funzionalità extra per migliorare l'usabilità.

---

## 📌 Milestone 1: Creare un Form con Campi Controllati

Il form contiene i seguenti **campi controllati** (gestiti con `useState`):

- ✅ **Nome completo** (input di testo)
- ✅ **Username** (input di testo)
- ✅ **Password** (input di tipo password)
- ✅ **Specializzazione** (select con opzioni: `"Full Stack"`, `"Frontend"`, `"Backend"`)
- ✅ **Anni di esperienza** (input di tipo number)
- ✅ **Breve descrizione sullo sviluppatore** (textarea)

### ✅ Validazione al Submit

- Tutti i campi devono essere compilati
- `Anni di esperienza` deve essere un numero positivo
- La `Specializzazione` deve essere selezionata
- In caso di validazione corretta, i dati vengono stampati in console

---

## 📌 Milestone 2: Validare in Tempo Reale

Viene implementata **validazione in tempo reale** per i seguenti campi:

- ✅ **Username**
  - Solo caratteri alfanumerici
  - Almeno 6 caratteri
  - Niente spazi o simboli

- ✅ **Password**
  - Almeno 8 caratteri
  - Almeno 1 lettera
  - Almeno 1 numero
  - Almeno 1 simbolo

- ✅ **Descrizione**
  - Tra 100 e 1000 caratteri
  - Niente spazi iniziali o finali

### 🔍 Suggerimento per la validazione

```js
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
```

> 🔴 In caso di errore, viene mostrato un messaggio rosso.  
> ✅ In caso di validità, viene mostrato un messaggio verde.

---

## 📌 Milestone 3: Convertire i Campi Non Controllati

Ottimizzazione dell'interfaccia tramite l'uso di campi **non controllati** (`useRef`):

### 🔍 Analisi

- **Campi controllati**: Quelli che richiedono validazione in tempo reale o aggiornamenti dinamici
- **Campi non controllati**: Quelli che non influenzano direttamente l’interfaccia durante la digitazione

### ✅ Azioni

- I campi non controllati vengono gestiti tramite `useRef()` e letti solo al momento del `submit`
- La validazione resta attiva anche per questi campi

---

## 🎯 Bonus: Migliorare l'Usabilità

Sono state implementate le seguenti funzionalità extra:

- ✅ **Focus automatico** sul primo campo (Nome completo) al mount del componente (`useRef`)
- ✅ Bottone **"Reset"**:
  - Reset dei campi controllati (`useState`)
  - Reset dei campi non controllati (`useRef`)
- ✅ **Freccia fissa** in basso a destra:
  - Riporta l’utente all’inizio del form
  - Implementata con `position: fixed`

---

## 🚀 Tecnologie Utilizzate

- React
- Hooks: `useState`, `useRef`, `useEffect`
- HTML5 / CSS3
