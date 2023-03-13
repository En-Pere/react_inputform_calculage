import React from "react";
import PromoBanner from "./PromoBanner";

const data = {
  header: "90%",
  text: "descuento en todas las prendas",
};

function PromoMain() {
  return <PromoBanner props={data} />;
}

export default PromoMain;
