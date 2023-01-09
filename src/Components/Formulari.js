import React from "react";
import "../Styles/Formulari.css";
import { useState } from "react";
import Inputs from "./Inputs";
import TextResult from "./TextResult";

function Formulari() {
  const [frase, setFrase] = useState();

  const creaFrase = (name, mail, birth) => {
    let userDate = new Date(birth);
    let today = new Date();
    let resta = today.getTime() - userDate.getTime();
    let userAge = Math.trunc(resta / (1000 * 60 * 60 * 24) / 365);
    console.log(userAge);
    setFrase(
      `Hi ${name}, your email is ${mail} and you are ${userAge} years old`
    );
  };

  return (
    <div className="main-formulari">
      <Inputs creaFrase={creaFrase} />
      <TextResult frase={frase} />
    </div>
  );
}

export default Formulari;
