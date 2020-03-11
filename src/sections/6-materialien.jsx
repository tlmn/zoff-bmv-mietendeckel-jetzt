import React from "react";
import Image from "../components/image";

const Page = () => (
  <div className="container mx-auto d-block pt-5 pb-5" id="materialien">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 offset-0 col-12 text-left text-md-center mb-5">
        <h2 className="circle circle--flamingo">Materialien</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-lg-4">
        <h3 className="circle circle--yellow">Posterzeitung</h3>
        <div className="pt-5 pr-5 pl-0 pb-5">

        <Image name="posterzeitung.jpg" />
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <h3 className="circle circle--flamingo">BMV-Infoblätter</h3>
        <div className="pt-5 pr-5 pl-0 pb-5">
        <Image name="infoblaetter.jpg" />
        <div className="hero__overlay">hallo</div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <h3 className="circle circle--blue">Etwas Drittes</h3>
        <div className="pt-5 pr-5 pl-0 pb-5">
        <Image name="drittes.jpg" />
        </div>
      </div>
    </div>
  </div>
);

export default Page;
