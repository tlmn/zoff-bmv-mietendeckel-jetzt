import React from "react";
import Player from "../components/player";

const Page = () => (
  <>
    <div
      className="container mx-auto d-block pt-3 pt-md-5 pb-5"
      id="mietendeckel-wirkt"
    >
      <div className="row">
        <div className="col text-center mt-5">
          <h2>Der Mietendeckel wirkt!</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-8 offset-lg-2">
          <p className="teaser">
            Seit Jahren ächzt Berlin unter steigenden Mieten, Spekulation und
            Verdrängung. Ob in der eigenen Hausgemeinschaft, im Block oder im
            Kiez: gegen diese Entwicklungen hat sich breiter Protest gebildet
            und die Politik zum Handeln bewegt. Seit 23.2.2020 ist in Berlin der
            bundesweit erste Mietendeckel in Kraft.
          </p>
          <p>
            Mieterhöhungen, Verdrängung aus dem eigenen Kiez oder auf engstem
            Raum wohnen müssen: Damit macht der Mietendeckel jetzt Schluss. Er
            bedeutet für die Berliner Mieter*innen eine Verschnaufpause und
            könnte die Basis für eine grundlegend neue Wohnungspolitik sein.
            Erfahre auf dieser Seite, was der Mietendeckel ist, wie er für Dich
            wirkt und erzähl es weiter!
          </p>
        </div>
      </div>
    </div>
    <div className="container mx-auto d-block pb-3 pb-md-5">
      <div className="row mb-5">
        <Player
          classNames="col-12 offset-0 col-sm-10 offset-sm-1"
          videoURL="https://www.youtube.com/watch?v=P8ouPFgjgIQ"
        />
      </div>
    </div>
  </>
);

export default Page;
