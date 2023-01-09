import React from "react";
import "../Styles/Formulari.css";
import { useState } from "react";

function Inputs({ creaFrase }) {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [birth, setBirth] = useState();

  const enviaData = () => {
    creaFrase(name, mail, birth);
  };

  return (
    <>
      <form className="form">
        <label className="label-name">Name</label>
        <input
          onInput={(e) => setName(e.target.value)}
          type="text"
          className="input-text"
          placeholder="Here your name"
        ></input>
        <label className="label-email">Email</label>
        <input
          onInput={(e) => setMail(e.target.value)}
          type="email"
          className="input-email"
          placeholder="Here your email"
        ></input>
        <label className="label-birthday">Birthday</label>
        <input
          onInput={(e) => setBirth(e.target.value)}
          type="date"
          className="input-birthday"
          placeholder="Here your birthday"
        ></input>
      </form>
      <button type="submit" onClick={enviaData}>
        Submit
      </button>
    </>
  );
}

export default Inputs;
