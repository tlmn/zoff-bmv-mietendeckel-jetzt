import React from 'react';
import Accordion from '../components/accordion';

const Page = () => (
  <>
    <div className="bg--flamingo pt-5 pb-5" id="faq">
      <div className="container mx-auto d-block">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="circle circle--white">Fragen zum Mietendeckel</h2>
          </div>
          <div className="col-12">
            <Accordion
              items={[
                {
                  title: 'Echte Veränderungen',
                  link: '/',
                  text:
                    'Gemeinsam werden wir unser bestehendes Netzwerk von Cockpit- und Kabinenpersonal in ganz Europa weiter ausbauen. Wir werden gemeinsam die Berufsbilder in Kabine und Cockpit aufwerten und euch stärken.',
                },
                {
                  title: 'Stärkung des Berufsbild Kabine',
                  link: '/',
                  text:
                    'Wir leisten viel! Wir tragen Verantwortung. Wir sorgen für Sicherheit, Komfort und machen das Fliegen zum Erlebnis. Doch warum sehen uns manche Arbeitgeber nur als Hilfskräfte? Unser Beruf ist mehr wert. Unser Beruf braucht Anerkennung, Wertschätzung, Perspektiven und ein klares Berufsbild. Dafür stehen wir ein.',
                },
                {
                  title: 'Faire Einstiegsgehälter',
                  link: '/',
                  text:
                    'Klar ist: 800 Euro netto im Monat sind nicht genug. Wir brauchen existenzsichernde und faire Einstiegsgehälter, die ein unabhängiges Leben ermöglichen und Sicherheit geben. Gehälter, die zum Einstieg in den Beruf ermutigen und am Ende des Monats noch Geld übrig lassen. Der Anfang ist bei den Low-Costern ist erfolgreich geschafft, wir müssen diese Basis jedoch in allen Airlines haben.',
                },
                {
                  title: 'Echte Altersvorsorge',
                  link: '/',
                  text:
                    'Wir fliegen – aber irgendwann ist es an der Zeit am Boden zu bleiben. Die Frage ist, wie sieht das Leben von Flugbegleiterinnen und Flugbegleitern im frühen oder späteren Alter aus? Wir wollen uns nicht zwischen Gesundheit oder Altersarmut entscheiden müssen. Damit Fliegen attraktiv bleibt brauchen wir klare kollektive Regeln, damit wir individuell und autonom entscheiden können, wann die Uniform im Schrank bleibt.',
                },
                {
                  title: 'Internationale Lobbyarbeit',
                  link: '/',
                  text:
                    'Wir sind international für euch unterwegs. Wir sind Mitglied der größten internationalen Transportarbeiter Föderation (ITF) und stärken eure Arbeit, eure Berufsbilder international – auch vor Ort bei der ICAO. Die Airlines und die Luftfahrtindustrie sind globale Player. Unsere Arbeitsbedingungen enden nicht an Landesgrenzen. Wir haben bei der ICAO den internationalen Cabin Crew Day durchgesetzt. Auf europäischer Ebene (ETF) sind wir im Dialog mit der EASA und der Europäischen Kommission und geben den Aircrews eine Stimme.',
                },
                {
                  title: 'Gesundheit',
                  link: '/',
                  text:
                    'Wir sind täglich großen Gesundheitsgefahren und Belastungen ausgesetzt. Fume Events sind nur die Spitze des Eisbergs. Wechselschichten, hohe Arbeitsbelastungen oder auch die stetige Strahlenbelastung im Job zehren an uns und treiben uns zum Teil in die Fluguntauglichkeit. Wir fordern klaren und wirkungsvollen Gesundheitsschutz und ein Ende der kontaminierten Kabinenluft.',
                },
                {
                  title: 'Safety',
                  link: '/',
                  text:
                    'Zero Tolerance gegen Angriffe, sexuelle Belästigung, Sexismus, Diskriminierung und Ausgrenzung der Aircrews. Wir fordern umfassenden Schutz der Aircrews. Die Airlines müssen umfassende Arbeitssicherheitsstandards- und Verfahren gewährleisten, die die Kabine in jeder Situation schützen.',
                },
                {
                  title: 'Vereinbarkeit',
                  link: '/',
                  text:
                    'Die Vereinbarkeit von Familie und Beruf ist für viele von uns eine riesengroße Herausforderung. Nicht nur die Kindererziehung sondern auch die Pflege von Angehörigen sind Alltag. Wenn wir mal am Boden bleiben müssen, brauchen wir verbindliche, stabile und planbare Freizeiten, Teilzeiten und Dienstpläne, auf die wir uns verlassen können und die uns trotzdem weiter normal leben lassen. Auch unsere Studierenden brauchen klare Regelungen, um Studium und Job in Einklang zu bringen.',
                },
                {
                  title: 'Unity strength diversity',
                  link: '/',
                  text:
                    'All das können wir besser schaffen, weil wir die Einzigen sind, die international, über die Airlines hinweg zusammenarbeiten, Vielfalt abbilden und uns gegenseitig stärken.',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Page;
