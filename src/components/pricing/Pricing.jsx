import React from "react";
import Back from "../common/back/Back";
import "./price.css";
import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <div className="container grid"></div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
