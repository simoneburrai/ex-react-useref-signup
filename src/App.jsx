import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    specialization: "",
    expYear: 0,
    description: ""
  })

  const handleChange = (e) => {
  const { name, value } = e.target; 
  setFormData({
    ...formData, 
    [name]: value 
  });
};

  const handleSubmit = (e) => {
     e.preventDefault();

    const voidInputs = !formData.specialization || 
      !formData.username || 
      !formData.password || 
      !formData.expYear || 
      formData.expYear < 0 ||
      !formData.description

    if(voidInputs){
      console.log("Compilare tutti i campi");
      return;
    }
   
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*NOME*/}
        <section>
          <label htmlFor="name">Nome</label>
          <input 
          onChange={handleChange} 
          value={formData.name}
          type="text"
          name="name" 
           placeholder="Inserisci il tuo nome"/>
        </section>

        {/*USERNAME*/}
        <section>
          <label htmlFor="username">Username</label>
          <input 
          onChange={handleChange}
          value={formData.username}
           type="text" 
           name="username"
           placeholder="Inserisci l'username"/>
        </section>

        {/*PASSWORD*/}
        <section>
          <label htmlFor="password">Password</label>
          <input 
          onChange={handleChange}
          value={formData.password}
          type="password" 
          name="password"  
          placeholder="Inserisci la password"/>
        </section>

        {/*SPECIALIZZAZIONI*/}
        <section>
          <label htmlFor="specialization">Specializzazione</label>
          <select 
          name="specialization"
          onChange={handleChange}
          value={formData.specialization}
          >
            <option value="">Seleziona la specializzazione</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </section>

        {/*ANNI DI ESPERIENZA */}
        <section>
          <label htmlFor="expYear">Anni di Esperienza</label>
          <input 
          type="number" 
          name="expYear"
          onChange={handleChange}
          value={formData.expYear} />
        </section>

        {/*BREVE DESCRIZIONE */}
        <section>
          <label htmlFor="description">Breve Descrizione</label>
          <textarea 
          name="description"
          onChange={handleChange}
          value={formData.description}>
            Inserisci una breve descrizione</textarea>
        </section>
        <button type="submit">Invia Form</button>
      </form>
    </div>
  )
}

export default App

// 📌 Milestone 1: Creare un Form con Campi Controllati
// Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

// ✅ Nome completo (input di testo)

// ✅ Username (input di testo)

// ✅ Password (input di tipo password)

// ✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")

// ✅ Anni di esperienza (input di tipo number)

// ✅ Breve descrizione sullo sviluppatore (textarea)

// Aggiungi una validazione al submit, verificando che:

// Tutti i campi siano compilati
// L'input Anni di esperienza sia un numero positivo
// La Specializzazione sia selezionata

// Al submit, se il form è valido, stampa in console i dati.

// 📌 Milestone 2: Validare in tempo reale
// Aggiungere la validazione in tempo reale dei seguenti campi:

// ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

// ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

// ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

// Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri
//  validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:

// const letters = "abcdefghijklmnopqrstuvwxyz";
// const numbers = "0123456789";
// const symbols = "!@#$%^&*()-_=+[]{}|;:'\\",.<>?/`~";
// Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso)
//  nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.
// 📌 Milestone 3: Convertire i Campi Non Controllati
// Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato.
//  Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, 
//  quindi è possibile gestirli in modo più efficiente.

// Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono
//  essere non controllati senza impattare l’esperienza utente.
// Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore 
// solo al momento del submit.
// Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato,
//  deve comunque essere validato correttamente quando l’utente invia il form.
// 🎯 Bonus: Migliorare l'Usabilità
// Utilizziamo useRef() per migliorare l’esperienza utente, implementando le seguenti funzionalità:

// Focus automatico al primo input (Nome) al mount del componente.
// Bottone "Reset" in fondo al form per ripristinare tutti i valori:
// Gli input controllati devono tornare ai valori iniziali.
// Gli input non controllati devono essere resettati manualmente usando useRef().
// Freccia fissa in basso a destra che, quando cliccata, riporta l'utente all'inizio del form 
// (bisogna usare position: fixed).
