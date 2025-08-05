import { useRef, useState } from "react";

function App() {



  const [isFormSent, setIsFormSent] = useState(false); 
   const usernameValidationString = "Inserire un username valido, composto solo da caratteri alfanumerici e maggiore o uguale a 6 caratteri";
   const passwordValidationString = "Inserire password valido, maggiore o uguale a 8 caratteri, compresa di un simbolo, un numero e una lettera";
   const descriptionValidationString = "Inserire descrizione valida, tra 100 e 1000 caratteri. Non inserire spazi ne all'inizio ne alla fine";


  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
    description: "",
  });

  const nameRef = useRef(null);
  const specializationRef = useRef(null);
  const expYearRef = useRef(null);
 
  const initialFormData = {
    name: "",
    username: "",
    password: "",
    specialization: "",
    expYear: 0,
    description: ""
  }
  const [formData, setFormData] = useState(initialFormData);

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
            password: "" 
        }));
    } else {
        setValidationErrors(prev => ({
            ...prev,
            password: passwordValidationString 
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

  


  const handleSubmit = (e) => {
     e.preventDefault();

     if(validationErrors.description || validationErrors.password || validationErrors.username){
      return;
     }

    const finalFormData = {
      ...formData,
      name: nameRef.current.value,
      expYear: expYearRef.current.value,
      specialization: specializationRef.current.value
    }
   
    const voidInputs = !finalFormData.name || 
      !finalFormData.specialization || 
      finalFormData.expYear < 0 ||
      !finalFormData.username.trim() || 
      !finalFormData.password.trim() || 
      !finalFormData.description.trim()

    if(voidInputs){
      console.log("Compilare tutti i campi");
      return;
    }
   
    console.log(finalFormData);
    setFormData(initialFormData);
    setIsFormSent(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*NOME*/}
        <section>
          <label className="form-label" htmlFor="name">Nome</label>
          <input 
          className="form-control" 
          ref={nameRef}
          type="text"
          name="name" 
           placeholder="Inserisci il tuo nome"/>
        </section>

        {/*USERNAME*/}
        <section>
          <label className="form-label" htmlFor="username">Username</label>
          <input 
          className="form-control" 
          onChange={handleUsernameChange}
          value={formData.username}
           type="text" 
           name="username"
           placeholder="Inserisci l'username"/>
          {validationErrors.username && <strong>{validationErrors.username}</strong>}
        </section>

        {/*PASSWORD*/}
        <section>
          <label className="form-label" htmlFor="password">Password</label>
          <input 
          className="form-control" 
          onChange={handlePasswordChange}
          value={formData.password}
          type="password" 
          name="password"  
          placeholder="Inserisci la password"/>
          {validationErrors.password && <strong>{validationErrors.password}</strong>}
        </section>

        {/*SPECIALIZZAZIONI*/}
        <section>
          <label className="form-label" htmlFor="specialization">Specializzazione</label>
          <select 
          className="form-control" 
          name="specialization"
          ref={specializationRef}
          >
            <option value="">Seleziona la specializzazione</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </section>

        {/*ANNI DI ESPERIENZA */}
        <section>
          <label className="form-label" htmlFor="expYear">Anni di Esperienza</label>
          <input 
          className="form-control" 
          type="number" 
          name="expYear"
         ref={expYearRef} />
        </section>

        {/*BREVE DESCRIZIONE */}
        <section>
          <label className="form-label" htmlFor="description">Breve Descrizione</label>
          <textarea 
          className="form-control" 
          name="description"
          onChange={handleDescriptionChange}
          value={formData.description}>
            Inserisci una breve descrizione</textarea>
            {validationErrors.description && <strong>{validationErrors.description}</strong>}
        </section>
        <button type="submit">Invia Form</button>
      </form>
      {isFormSent && <h3 className="text-center text-success">FORM INVIATO</h3>}
    </div>
  )
}

export default App



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
