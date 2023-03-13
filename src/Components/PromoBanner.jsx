import React from "react";

function PromoBanner({ props }) {
  return (
    <>
      <h1>{props.header}</h1>
      <h2>{props.text}</h2>
    </>
  );
}

export default PromoBanner;
