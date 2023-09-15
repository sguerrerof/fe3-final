import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const nameValidation = () => {
    return name.length > 5;
  };

  const emailValidation = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const formValidation = () => {
    return nameValidation() && emailValidation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      setMessage(`Gracias ${name}, revisa tu correo ${email}`);
    } else {
      setMessage("Por favor, asegurate que la información sea correcta");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleChangeName(e)}
            minLength={5}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="name"
            value={email}
            onChange={(e) => handleChangeEmail(e)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Form;
