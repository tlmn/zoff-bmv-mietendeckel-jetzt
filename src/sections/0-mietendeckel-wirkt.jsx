import React from 'react';
import Player from '../components/player';

const Page = () => (
  <>
    <div
      className="container mx-auto d-block pt-3 pt-md-5 pb-3 pb-md-5"
      id="mietendeckel-wirkt"
    >
      <div className="row">
        <div className="col text-center">
          <h2>Mietendeckel wirkt!</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <p className="teaser">
            Seit Jahren ächzt Berlin unter steigenden Mieten, Spekulation und
            Verdrängung. Ob im eigenen Haus, im Block oder im Kiez: gegen diese
            Entwicklungen hat sich breiter Protest gebildet und die Politik zum
            Handeln bewegt. Ende Februar 2020 trat darum in Berlin ein
            Mietendeckel in Kraft.
          </p>

          <p>
            Mieterhöhungen, Verdrängung aus dem eigenen Kiez oder auf engstem
            Raum wohnen müssen: Damit macht der Mietendeckel Schluss. Er ist
            eine Verschnaufpause für Berlin und die Gelegenheit, die
            Wohnungpolitik grundlegend neuzudenken. Erfahren Sie auf dieser
            Seite, was der Mietendeckel ist, wie er für Sie wirkt und erzählen
            Sie es weiter!
          </p>
        </div>
      </div>
    </div>
    <div className="container mx-auto d-block pb-5">
      <div className="row">
        <Player
          classNames="col-12 offset-0 col-sm-10 offset-sm-1"
          videoURL="https://www.youtube.com/watch?v=XTsaZRKx9UI"
        />
      </div>
    </div>
  </>
);

export default Page;
