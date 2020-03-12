import React from "react";
import Image from "../components/image";

const Page = () => (
  <div className="container mx-auto d-block" id="materialien">
    <div className="section">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 offset-0 col-12 text-left text-md-center mb-5">
          <h2 className="circle circle--congress-blue">Materialien zum Mietendeckel</h2>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-lg-4">
          <div className="pt-5 pr-5 pl-0 pb-5">
            <Image name="posterzeitung.jpg" />
            <div className="" style={{ position: "relative", top: 0, left: 0 }}>
              Overlay
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="pt-5 pr-5 pl-0 pb-5">
            <Image name="infoblaetter.jpg" />
            <div className="hero__overlay">hallo</div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="pt-5 pr-5 pl-0 pb-5">
            <Image name="drittes.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;
