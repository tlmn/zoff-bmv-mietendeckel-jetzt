import React from "react";
import ReactPlayer from "react-player";
import Claims from "components/accordion";
import Helmet from "components/helmet";
import Footer from "components/footer";

const IndexPage = () => {
  return (
    <>
      <Helmet />
      <div className="container mx-auto d-block pt-5 pb-5">
        <div className="row">
          <div className="col">
            <h2 className="text-center">Mietendeckel wirkt!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <p className="teaser">
              Seit Jahren ächzt Berlin unter steigenden Mieten, Spekulation und
              Verdrängung. Ob im eigenen Haus, im Block oder im Kiez: gegen
              diese Entwicklungen hat sich breiter Protest gebildet und die
              Politik zum Handeln bewegt. Ende Februar 2020 trat darum in Berlin
              ein Mietendeckel in Kraft.
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
      <div className="container mx-auto d-block pt-5 pb-5">
      <div className="row">
        <div className="col-12 text-center">
          <ReactPlayer className="mx-auto d-block" url="https://www.youtube.com/watch?v=FScfGU7rQaM" />
        </div>
      </div>
      </div>
      <div className="bg--yellow pt-5 pb-5">
        <div className="container mx-auto d-block">
          <div className="row text-center">
            <div className="col-12">
              <h2>Was kann der Mietendeckel?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <p className="teaser">
                Der Mietendeckel soll die Entwicklungen auf dem Berliner
                Mietmarkt stoppen. Mit drei Maßnahmen soll das gelingen:
                Mietenstopp, Obergrenzen bei Wiedervermietung und Mietabsenkung.
                Sie wirken bis 2025 und betreffen die Vielzahl der 1,5 Millionen
                Berliner Haushalte. Einige Wohnungsarten wie beispielsweise so
                genannter sozialer Wohnungsbau oder Neubau sind vom Mietendeckel
                ausgenommen.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <h3>Mietenstopp</h3>
              <p>
                Ob Staffelmiete oder einfache Erhöhung: Mieterhöhungen machen
                Wohnen immer teurer. Bis 2025 werden in Berlin die Mieten dank
                Mietenstopp eingefroren. 2022 können sie leicht angehoben
                werden. Auch Modernisierungen können nur noch zu einem
                geringeren Teil auf die Mieter*innen umgelegt werden: mit
                höchstens 1 Euro je Quadratmeter. Endlich keine Angst mehr vor
                Miethöhungen!
              </p>
            </div>
            <div className="col-4">
              <h3>Wiedervermietung</h3>
              <p>
                Bei Mieterwechsel drehen Vermieter*innen oftmals an der
                Preisschraube. So steigen Mietpreise von Mieter*in zu Mieter*in
                besonders stark. Das verhindert jetzt der Mietendeckel. Er legt
                Obergrenzen für Mietpreise bei Wiedervermietungen fest. Diese
                Obergrenzen unterscheiden sich nach Baujahr des Hauses und
                Ausstattung. Vermieter*innen sind verpflichtet, dieser
                Obergrenzen einzuhalten. Welche Höchstwerte genau gelten, verrät
                unser Mietendeckelrechner.
              </p>
            </div>
            <div className="col-4">
              <h3>Mietabsenkung</h3>
              <p>
                Wer in den letzten Jahren das Glück hatte eine Wohnung zu
                finden, muss das häufig teuer bezahlen. Die gute Nachricht dank
                Mietendeckel: Mieten, die mehr als 20 % über den Obergrenzen für
                Wiedervermietung liegen, werden nicht nur eingefroren. Ab
                23.11.2020 können sie abgesenkt werden! Wann genau eine überhöhte
                Miete vorliegt, richtet sich nach Baujahr, Austattung und
                Wohnlage des Hauses. Vermieter sind verpflichtet, ihre
                Mieter*innen zu informieren. Ob Sie Ihre Miete absenken können
                und wie hoch eine Absenkung wäre, berechnet unser
                Mietendeckelrechner.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto d-block pt-5 pb-5">
        <div className="row text-center">
          <div className="col-12">
            <h2>Wie wirkt der Mietendeckel für mich?</h2>
          </div>
          <div className="col-12">
            <iframe
              src="https://mietendeckelrechner.berliner-mieterverein.de"
              id="mdr"
              frameborder="0"
              height="400"
              width="500"
              title="Mietendeckelrechner"
            ></iframe>
            <script type="text/javascript" src="/js/iframe.js" />
          </div>
        </div>
      </div>
      <div className="bg--cornflower-blue pt-5 pb-5">
        <div className="container mx-auto d-block">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Häufig gestellte Fragen zum Mietendeckel</h2>
            </div>
            <div className="col-12">
              <Claims
                items={[
                  {
                    title: "Echte Veränderungen",
                    link: "/",
                    text:
                      "Gemeinsam werden wir unser bestehendes Netzwerk von Cockpit- und Kabinenpersonal in ganz Europa weiter ausbauen. Wir werden gemeinsam die Berufsbilder in Kabine und Cockpit aufwerten und euch stärken."
                  },
                  {
                    title: "Stärkung des Berufsbild Kabine",
                    link: "/",
                    text:
                      "Wir leisten viel! Wir tragen Verantwortung. Wir sorgen für Sicherheit, Komfort und machen das Fliegen zum Erlebnis. Doch warum sehen uns manche Arbeitgeber nur als Hilfskräfte? Unser Beruf ist mehr wert. Unser Beruf braucht Anerkennung, Wertschätzung, Perspektiven und ein klares Berufsbild. Dafür stehen wir ein."
                  },
                  {
                    title: "Faire Einstiegsgehälter",
                    link: "/",
                    text:
                      "Klar ist: 800 Euro netto im Monat sind nicht genug. Wir brauchen existenzsichernde und faire Einstiegsgehälter, die ein unabhängiges Leben ermöglichen und Sicherheit geben. Gehälter, die zum Einstieg in den Beruf ermutigen und am Ende des Monats noch Geld übrig lassen. Der Anfang ist bei den Low-Costern ist erfolgreich geschafft, wir müssen diese Basis jedoch in allen Airlines haben."
                  },
                  {
                    title: "Echte Altersvorsorge",
                    link: "/",
                    text:
                      "Wir fliegen – aber irgendwann ist es an der Zeit am Boden zu bleiben. Die Frage ist, wie sieht das Leben von Flugbegleiterinnen und Flugbegleitern im frühen oder späteren Alter aus? Wir wollen uns nicht zwischen Gesundheit oder Altersarmut entscheiden müssen. Damit Fliegen attraktiv bleibt brauchen wir klare kollektive Regeln, damit wir individuell und autonom entscheiden können, wann die Uniform im Schrank bleibt."
                  },
                  {
                    title: "Internationale Lobbyarbeit",
                    link: "/",
                    text:
                      "Wir sind international für euch unterwegs. Wir sind Mitglied der größten internationalen Transportarbeiter Föderation (ITF) und stärken eure Arbeit, eure Berufsbilder international – auch vor Ort bei der ICAO. Die Airlines und die Luftfahrtindustrie sind globale Player. Unsere Arbeitsbedingungen enden nicht an Landesgrenzen. Wir haben bei der ICAO den internationalen Cabin Crew Day durchgesetzt. Auf europäischer Ebene (ETF) sind wir im Dialog mit der EASA und der Europäischen Kommission und geben den Aircrews eine Stimme."
                  },
                  {
                    title: "Gesundheit",
                    link: "/",
                    text:
                      "Wir sind täglich großen Gesundheitsgefahren und Belastungen ausgesetzt. Fume Events sind nur die Spitze des Eisbergs. Wechselschichten, hohe Arbeitsbelastungen oder auch die stetige Strahlenbelastung im Job zehren an uns und treiben uns zum Teil in die Fluguntauglichkeit. Wir fordern klaren und wirkungsvollen Gesundheitsschutz und ein Ende der kontaminierten Kabinenluft."
                  },
                  {
                    title: "Safety",
                    link: "/",
                    text:
                      "Zero Tolerance gegen Angriffe, sexuelle Belästigung, Sexismus, Diskriminierung und Ausgrenzung der Aircrews. Wir fordern umfassenden Schutz der Aircrews. Die Airlines müssen umfassende Arbeitssicherheitsstandards- und Verfahren gewährleisten, die die Kabine in jeder Situation schützen."
                  },
                  {
                    title: "Vereinbarkeit",
                    link: "/",
                    text:
                      "Die Vereinbarkeit von Familie und Beruf ist für viele von uns eine riesengroße Herausforderung. Nicht nur die Kindererziehung sondern auch die Pflege von Angehörigen sind Alltag. Wenn wir mal am Boden bleiben müssen, brauchen wir verbindliche, stabile und planbare Freizeiten, Teilzeiten und Dienstpläne, auf die wir uns verlassen können und die uns trotzdem weiter normal leben lassen. Auch unsere Studierenden brauchen klare Regelungen, um Studium und Job in Einklang zu bringen."
                  },
                  {
                    title: "Unity strength diversity",
                    link: "/",
                    text:
                      "All das können wir besser schaffen, weil wir die Einzigen sind, die international, über die Airlines hinweg zusammenarbeiten, Vielfalt abbilden und uns gegenseitig stärken."
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto d-block pt-5 pb-5">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <h2 className="text-center">Was kommt nach dem Mietendeckel?</h2>
            <p className="teaser">
              Der Berliner Mietendeckel ist zunächst bis 2025 begrenzt. In
              dieser Verschaufpause für die Mieter*innen ist es an der Berliner
              Politik, nachhaltige Antworten auf die Wohnungsfrage zu finden.
              Wohnraum muss dauerhaft bezahlbar und verfügbar bleiben. Darum ist
              der Mietendeckel der Auftakt für eine Wende in der
              Wohnungspolitik, die viel zu lange Interessen von Spekulant*innen
              vor Mieter*innen gestellt hat.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h3>Deckel auf Grundpreise</h3>
            <p>
              Esse fugiat aliqua exercitation id veniam sit. Sint duis et
              cupidatat consequat tempor nulla. Minim dolor ullamco tempor enim
              voluptate Lorem. Cupidatat eu duis minim do voluptate fugiat
              cupidatat sunt nostrud amet ipsum. Quis eiusmod deserunt amet
              nostrud magna consectetur occaecat in ipsum cupidatat nisi.
              Nostrud ea non aliquip laboris anim. Ad ullamco commodo ut cillum.
              Commodo officia in eiusmod labore ex sunt non duis sit.
            </p>
          </div>
          <div className="col-4">
            <h3>Vergesellschaftung großer Immobilienkonzerne</h3>
            <p>
              Occaecat minim ex quis adipisicing consectetur deserunt aliqua
              ipsum deserunt. Qui sunt veniam ex veniam. Veniam pariatur tempor
              dolor ad ut est dolor quis commodo sit. Id sint fugiat laborum
              aliqua voluptate laborum quis do eiusmod elit sint consequat. Ut
              qui minim aliquip qui adipisicing ullamco cillum cillum culpa.
            </p>
          </div>
          <div className="col-4">
            <h3>Mietendeckel? Bundesweit!</h3>
            <p>
              Dolore eiusmod voluptate eiusmod aute ea. Labore pariatur ad velit
              magna exercitation tempor officia ea. Ea aliquip veniam voluptate
              consequat irure fugiat. Officia minim pariatur ut et sint mollit
              nisi esse culpa velit aute ullamco ut fugiat. Cillum laboris eu
              incididunt voluptate nisi consequat occaecat ipsum reprehenderit
              consequat ullamco sit. Sunt qui consequat nisi ad adipisicing. Sit
              et ex Lorem elit eiusmod qui.
            </p>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
