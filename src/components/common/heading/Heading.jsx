import React from "react";

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id="subtitle">
        <h3>{subtitle} </h3>
      </div>
      <div id="heading">
        <h1>{title} </h1>
      </div>
    </>
  );
};

export default Heading;
