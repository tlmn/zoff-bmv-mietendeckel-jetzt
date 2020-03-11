import React from "react";
import Accordion from "../components/accordion";

const Page = () => (
  <>
    <div className="bg--flamingo pt-5 pb-5" id="faq">
      <div className="container mx-auto d-block">
        <div className="row">
          <div className="col-12 text-left text-md-center">
            <h2 className="circle circle--white">Fragen zum Mietendeckel</h2>
          </div>
          <div className="col-12">
            <Accordion
              items={[
                {
                  title:
                    "Ich habe gehört, dass der Mietendeckel verfassungswidrig sei. Stimmt das?",
                  link: "/",
                  text:
                    "Ob der Mietendeckel verfassungswidrig ist, kann nur von einem Verfassungsgericht festgestellt werden. Eine solche Entscheidung gibt es bislang nicht, also ist er aktuell auch nicht verfassungswidrig, auch wenn Kritiker des Deckels das so formulieren. Richtig ist aber auch, dass CDU und FDP im Bund sowie im Land Berlin eine Normenkontrollklage anstrengen wollen, um den Mietendeckel verfassungsrechtlich zu ‘kippen’. Wann es zu einer Entscheidung kommt ist ungewiss. Bis dahin gilt der Mietendeckel! <br/><b>Wichtig</b> Auch wenn der Berliner Mieterverein optimistisch ist, dass der Mietendeckel der verfassungsrechtlichen Prüfung weitgehend standhält, die Entscheidung der Gerichte kann nicht vorausgesehen werden. Für Mieter*innen ist es daher ratsam, durch Reduktion bzw. Absenkung eingesparte Mieten zunächst beiseite zu legen. Gut zu wissen: Wer noch vor der verfassungsgerichtlichen Entscheidung ein für den Mieter bzw. die Mieterin positives rechtskräftiges Urteil z. B. beim zuständigen Amtsgericht erwirken konnte und ggf. daraus auch gegen den Vermieter vollstreckt hat, ist auch bei negativem Ausgang der Klage vor dem Verfassungsgericht auf der sicheren Seite."
                },
                {
                  title:
                    "Der Mietendeckel soll für bestimmte Wohnungen nicht gelten. Welche sind das?",
                  link: "/",
                  text:
                    "Zum Anwendungsbereich des Mietendeckels gehören rund 1,5 Millionen Berliner Mietwohnungen. Der Mietendeckel gilt nicht bei:<br/><ul><li>Neubauwohnungen, die erstmalig ab dem 1.1.2014 bezugsfertig wurden, Wohnungen, die dauerhaft unbewohnbar und unbewohnt waren und mit Neubauaufwand wieder hergestellt wurden,</li><li>öffentlich geförderten Wohnungen (Sozialwohnungen) </li><li>Wohnungen, die mit öffentlichen Mitteln instandgesetzt und modernisiert wurden und einer Mietpreisbindung unterliegen,</li><li>Wohnraum in Wohnheimen</li><li>Wohnungen von Trägern der Wohlfahrtspflege</li></ul>"
                },
                {
                  title:
                    "Ich habe einer Mieterhöhung nach dem 18.6.2019 zugestimmt. Muss ich weiter die erhöhte Miete zahlen?",
                  link: "/",
                  text:
                    "Nein. Wenn die Wohnung dem Mietendeckel unterliegt (siehe Frage 2), sind Mieterhöhungen, denen nach dem 18. Juni 2019 zugestimmt wurde, ab dem 23. Februar 2020 nicht mehr zu bezahlen. Bei Mieterhöhungen wegen Modernisierungen zwischen dem 18.6.2019 und dem 23.2.20 können die Kosten mit höchstens 1 Euro/m2 ab Inkraftten des Gesetzes umgelegt werden, wenn bestimmte Voraussetzungen erfüllt sind."
                },
                {
                  title:
                    "Meine Miete war schon am 18. Juni 2019 sehr hoch. Kann die jetzt reduziert werden?",
                  link: "/",
                  text:
                    "Neun Monate nach Inkrafttreten des Gesetzes, also ab 23.11.2020, besteht ein Anspruch auf Absenkung überhöhter Mieten. Was überhöht ist, kann man über den Mietendeckelrechner herausbekommen. Kurz gefasst: Es sind die Mieten, die die Mietobergrenzen bei Wiedervermietung in Abhängigkeit von der Wohnlage um mehr als 20% überschreiten. Wichtig: Binnen zwei Monaten nach Inkrafttreten, mithin bis zum 23.4.20, muss der Vermieter den Mieter/die Mieterin über die maßgebliche Mietobergrenze unterrichten. Der Vermieter muss von sich aus ab 23.11.20 die überhöhte Miete senken.Tut er das auch nach Aufforderung des Mieters/der Mieterin nicht, müssen Mieter/Mieterin tätig werden. Mehr dazu unter www.berliner-mieterverein.de/Mietendeckel.htm"
                },
                {
                  title:
                    "Warum sind unter anderem Sozialer Wohnungsbau oder Neubau vom Mietendeckel ausgenommen?",
                  link: "/",
                  text:
                    "Der zukünftige Neubau unterliegt dem Mietendeckel nicht, weil in Berlin mehrere zehntausend Wohnungen fehlen und durch einen Deckel potentielle Investoren sich zurückhalten könnten. Allerdings, der Neubau von preisgünstigen Sozialwohnungen würde dem Mietendeckel ohnehin nicht unterliegen. Denn dessen Mietpreise unterliegen eigenen gesetzlichen Regelungen, nicht nur bei neuen Wohngebäuden, sondern auch bei den rund 96.000 bestehenden Sozialwohnungen."
                },
                {
                  title:
                    "Durch den Mietendeckel wird keine neue Wohnung entstehen. Greift er also nicht viel zu kurz?",
                  link: "/",
                  text:
                    "Mietpreisregulierungen, die die Vereinbarungen zwischen Vermieter*innen und Mieter*innen gestalten, haben noch niemals Wohnraum geschaffen, sie sind aber trotzdem erforderlich. Der Vorwurf an den Mietendeckel, er schaffe keinen Wohnraum ist also absurd.Weil Neubau aus den verschiedensten Gründen in den nächsten fünf Jahren nicht für einen Ausgleich von Angebot und Nachfrage sorgen wird, sind Preisbeschränkungen erforderlich. Der Mietendeckel regelt das Problem zu hoher Mietpreise im Wohnungsbestand. Die Mieten werden weitgehend eingefroren, Preise bei Neuvermietungen gedeckelt und überhöhte Mieten abgesenkt. Damit werden die Berliner Mieter*innen für die nächsten 5 Jahre massiv entlastet. Eine Verschnaufpause. In dieser Zeit gilt es, neuen, leistbaren Wohnraum ebenso wie ein Umwandlungsverbot von Miet- in Eigentumswohnungen zu schaffen und energetische Modernisierungen sozialverträglich zu gestalten."
                },
                {
                  title:
                    "Berlin ist Bundeshauptstadt, sind da hohe Mieten nicht ganz normal? Wer sich den Wohnraum in Berlin nicht leisten kann, sollte nach Brandenburg ziehen, oder?",
                  link: "/",
                  text:
                    "London oder Paris sind eher schlechte Beispiele. Ihre Wohnungsmärkte sind eine Katastrophe. Für Tourist*innen sind die Städte vielleicht ganz schön, aber leben können zumindest im Zentrum dieser beiden Hauptstädte Haushalte mit durchschnittlichem Einkommen nicht mehr. Berlin sollte eine andere Entwicklung gehen, zumal hier die Haushaltseinkommen sogar unter dem Bundesdurchschnitt liegen. Es ist eine schreiende Ungerechtigkeit, dass viele Arbeitnehmer*innen, ohne die unsere Stadt nicht funktionieren würde, leistbaren Wohnraum nur noch im Brandenburger Umland finden und damit tagtäglich oft mehrere Stunden im Auto oder in öffentlichen Verkehrsmitteln zubringen müssen."
                },
                {
                  title: "Ist der Mietendeckel gerecht?",
                  link: "/",
                  text:
                    "Gerechte Mietpreise gibt es nirgendwo. Dann müsste man die Mietzahlungen vom Einkommen abhängig machen. Damit der private Wohnraum nicht nur an die Bestverdienende vergeben würde, müsste man auch die Belegung der Wohnungen regeln. Das aber werden wohl auch die nicht wollen, die den Mietendeckel für ungerecht halten. Richtig ist, dass auch bei der Anwendung des Mietendeckels das Einkommen keine Rolle spielt. Haushalte mit hohem Einkommen, die sich in den vergangenen Jahren die zum Teil absurd hohen Mieten bei Wiedervermietung leisten konnten, werden von der Absenkungsmöglichkeit mehr profitieren als ein Durchschnittsverdiener in einer Stadtrandsiedlung. Mag sein. Aber den Mietenstopp werden alle Mieter*innen für sich verbuchen können. Und bei Wiedervermietung werden die Chancen auch für Haushalte mit unterdurchschnittlichem Einkommen wieder steigen. Der Mietendeckel ist nur so gut, wie er auch von uns allen genutzt wird!"
                },
                {
                  title:
                    "Können mir die Behörden beim Streit mit dem Vermieter über die zulässige Miete helfen?",
                  link: "/",
                  text:
                    "Ja, die Bezirksämter sind grundsätzlich mit der Überwachung des Mietendeckelgesetzes befasst. Bei der Absenkung allerdings muss man sich an die Senatsverwaltung für Stadtentwicklung und Wohnen wenden. In welcher Form die Behörden die Mieter*innen unterstützen, steht ihnen jedoch weitgehend frei. Sie können die Mieter*innen lediglich über die zulässige Miete informieren, sie können aber auch einen Verwaltungsakt erlassen, der den Vermieter dann bindet. Verweigert der Vermieter Auskünfte oder ist er nicht zur Verringerung der Miete bereit, sollte man auf jeden Fall die Behörde informieren. Die hält dafür auch ein Formblatt bereit."
                },
                {
                  title:
                    "Was passiert, wenn der Mietendeckel in 2025 ausläuft?",
                  link: "/",
                  text:
                    "Dazu wird es - wie dies bei früheren Sonderregelungen auch immer der Fall war - eine Übergangsregelung geben."
                },
                {
                  title:
                    "Die Anwendung des Mietendeckels erscheint mir doch etwas kompliziert. Wohin kann ich mich wenden?",
                  link: "/",
                  text:
                    "Für einen ersten Check, wie hoch die Miete bei einem neuen Mietvertrag sein darf oder wieviel ich ab dem 23.11.2020 mit der Absenkung sparen könnte, kann unser Mietendeckelrechner auf dieser Internetseite genutzt werden. Für eine umfassendere Hilfe sollte man sich an eine der Beratungsstellen des Berliner Mietervereins wenden. Orte und Öffnungszeiten finden sich hier: www.berliner-mieterverein/beratung-und-service/persoenliche-rechtsberatung/wohnungsmieter.htm. Für die Beratung ist eine Mitgliedschaft erforderlich, sie kann aber vor Ort abgeschlossen werden."
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Page;
