import React from "react";
import Helmet from "components/helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet />
      <div className="container mx-auto d-block pt-5 pb-5">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Datenschutz</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
