import React from "react";
import { useState } from "react";

function InputForm() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
  });

  return (
    <>
      <div>
        <input
          value={input.name}
          type="text"
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
          }}
        ></input>
        <input
          value={input.surname}
          type="text"
          onChange={(e) => {
            setInput({ ...input, surname: e.target.value });
          }}
        ></input>
      </div>
      <div>
        Hola {input.name}, tu apellido es {input.surname} ??
      </div>
    </>
  );
}

export default InputForm;
