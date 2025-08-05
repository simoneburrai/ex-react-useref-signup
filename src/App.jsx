import { useState } from "react";

function App() {




   const usernameValidationString = "Inserire un username valido, composto solo da caratteri alfanumerici e maggiore o uguale a 6 caratteri";
   const passwordValidationString = "Inserire password valido, maggiore o uguale a 8 caratteri, compresa di un simbolo, un numero e una lettera";
   const descriptionValidationString = "Inserire descrizione valida, tra 100 e 1000 caratteri. Non inserire spazi ne all'inizio ne alla fine";


  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
    description: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    specialization: "",
    expYear: 0,
    description: ""
  })

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]|\\:;"'<>,.?/~`]).{8,}$/;
    
    setFormData(prev => ({
        ...prev,
        password: value
    }));

    if (passwordRegex.test(value)) {
        setValidationErrors(prev => ({
            ...prev,
            password: "" // Rimuovo l'errore se la password è valida
        }));
    } else {
        setValidationErrors(prev => ({
            ...prev,
            password: passwordValidationString // Imposto l'errore se non è valida
        }));
    }
  }

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    const usernameRegex = /^[a-zA-Z0-9]{6,}$/;

    setFormData(prev => ({
        ...prev,
        username: value
    }));

    if (usernameRegex.test(value)) {
        setValidationErrors(prev => ({
            ...prev,
            username: "" 
        }));
    } else {
        setValidationErrors(prev => ({
            ...prev,
            username: usernameValidationString 
        }));
    }
  }

   const handleDescriptionChange = (e) => {
    const { value } = e.target;
    const isDescriptionValid = value[0] !== " " && value[value.length - 1] !== " " && value.length >= 100 && value.length < 1000;


    setFormData(prev => ({
        ...prev,
        description: value
    }));

    if (isDescriptionValid) {
        setValidationErrors(prev => ({
            ...prev,
            description: "" 
        }));
    } else {
        setValidationErrors(prev => ({
            ...prev,
            description: descriptionValidationString 
        }));
    }
  }

  
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
          onChange={handleUsernameChange}
          value={formData.username}
           type="text" 
           name="username"
           placeholder="Inserisci l'username"/>
          {validationErrors.username && <strong>{validationErrors.username}</strong>}
        </section>

        {/*PASSWORD*/}
        <section>
          <label htmlFor="password">Password</label>
          <input 
          onChange={handlePasswordChange}
          value={formData.password}
          type="password" 
          name="password"  
          placeholder="Inserisci la password"/>
          {validationErrors.password && <strong>{validationErrors.password}</strong>}
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
          onChange={handleDescriptionChange}
          value={formData.description}>
            Inserisci una breve descrizione</textarea>
            {validationErrors.description && <strong>{validationErrors.description}</strong>}
        </section>
        <button type="submit">Invia Form</button>
      </form>
    </div>
  )
}

export default App



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
