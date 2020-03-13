import React from "react";

const Page = () => (
  <>
    <div className="section" id="warum-mietendeckel">
      <div className="container mx-auto d-block">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h2 className="circle circle--congress-blue" style={{hyphens:'none'}}>
              Warum braucht Berlin einen Mie&shy;ten&shy;deckel?
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="teaser mb-3 md-md-5 pb-3 pt-md-5 pt-3">
              Berlin hat eine Wohnungskrise! Mieten und Immobilienpreise sind in
              den vergangenen Jahren rasant gestiegen. Die Bundesregierung hat
              dieser Entwicklung weitgehend tatenlos zugesehen.
              Gemeinwohlorientierter Neubau, Bodenpreisregulierung,
              Umwandlungsverbot: Der Mietendeckel verschafft uns die Chance,
              jetzt den Wohnungsmarkt nachhaltig und gerecht zu gestalten.
              Deshalb brauchen wir den Mietendeckel!
            </p>
          </div>
        </div>
        <div className="row contentItems">
          <div className="col-12 col-lg-4 pb-4 pb-md-0">
            <h3>
              Hohe Mieten bei neuen Mietverträgen
            </h3>
            <p className="text--small-running--wo-circle">
              Der Wohnungswechsel ist zu einem Glücksspiel geworden. Klar, durch
              einen Mietendeckel entstehen nicht mehr Wohnungen. Aber 11 bis 12
              Euro pro Quadratmeter nettokalt im Schnitt sind für viele nur
              unter großen Einschränkungen leistbar, für manche Menschen leider
              gar nicht. Bis zu 10 Prozent sind die Mieten pro Jahr bei
              Wiedervermietung angestiegen. Für eine Wohnung innerhalb des
              S-Bahn-Ringes braucht es jetzt zumeist ein überdurchschnittliches
              Einkommen. Eine „Stadt für alle“ stellen wir uns anders vor.
            </p>
          </div>
          <div className="col-12 col-lg-4 pb-4 pb-md-0">
            <h3>
              Mieterhöhungen bedrohen das Mietverhältnis
            </h3>
            <p className="text--small-running--wo-circle">
              Schon 2017 machte eine Studie des Mietervereins deutlich: Auch in
              bestehenden Mietverhältnissen steigt durch Mieterhöhungen das
              Armutsrisiko. Rund 70 Euro monatlich betrug der durchschnittliche
              Mieterhöhungsbetrag. Teure Modernisierungen und die hohen Mieten
              bei neuen Verträgen ließen auch die Mietspiegelwerte stark
              ansteigen. Zudem ignorierten zwei Drittel aller Vermieter die
              mietrechtlichen Vorgaben, um höhere Mieten zu erzielen.
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h3>
              Modernisierung führt oft zur Verdrängung
            </h3>
            <p className="text--small-running--wo-circle">
              Modernisierungsmaßnahmen vor allem zwecks Energieeinsparung aber
              auch durch Aufzug- oder Balkonanbau führen zu starken
              Mieterhöhungen – teilweise mehr als einer Verdoppelung der Miete.
              Härtefallregelungen greifen zumeist nicht hinreichend. Vielfach
              bleibt nur der Auszug. Die seit Januar 2019 geltende Neuregelung
              lässt immer noch Mieterhöhungen bis zu 3 Euro pro Quadratmeter zu.
              Für eine 70 Quadratmeter große Wohnung also bis zu 210 Euro im
              Monat. Solche Mieterhöhungen sind eine komplette Änderung des
              Mietverhältnisses und dürfen nicht sein!
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Page;
