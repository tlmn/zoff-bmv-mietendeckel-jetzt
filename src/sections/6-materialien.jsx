import React from "react";

const Page = () => (
  <div className="container mx-auto d-block pt-5 pb-5" id="materialien">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 offset-0 col-12 text-center mb-5">
        <h2 className="circle circle--flamingo">Materialien</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-4">
        <h3 className="circle circle--yellow">Posterzeitung</h3>
        <p></p>
      </div>
      <div className="col-12 col-lg-4">
        <h3 className="circle circle--flamingo">BMV-Infoblätter</h3>
        <p></p>
      </div>
      <div className="col-12 col-lg-4">
        <h3 className="circle circle--blue">Etwas Drittes</h3>
        <p></p>
      </div>
    </div>
  </div>
);

export default Page;
