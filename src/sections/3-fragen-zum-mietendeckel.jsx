import React from "react";
import Accordion from "../components/accordion";

const Page = () => (
  <>
    <div className="section bg--flamingo" id="faq">
      <div className="container mx-auto d-block">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h2>Fragen zum Mietendeckel</h2>
          </div>
          <Accordion
            items={[
              {
                title:
                  "Ich habe gehört, dass der Mietendeckel verfassungswidrig sei. Stimmt das?",
                link: "/",
                text:
                  "Ob der Mietendeckel verfassungswidrig ist, kann nur von einem Verfassungsgericht festgestellt werden. Eine solche Entscheidung gibt es bislang nicht. Also ist er aktuell auch nicht verfassungswidrig, auch wenn Kritiker des Deckels das so formulieren. Richtig ist: CDU und FDP im Bund sowie im Land Berlin wollen eine Normenkontrollklage bei den Verfassungsgerichten einreichen, um den Mietendeckel zu ‘kippen’. Wann es zu einer Entscheidung kommt, ist ungewiss. Bis dahin gilt der Mietendeckel! <br/><b>Wichtig</b> Auch wenn wir optimistisch sind, dass der Mietendeckel der verfassungsrechtlichen Prüfung weitgehend standhält, kann die Entscheidung der Gerichte nicht vorausgesehen werden. Daher ist es ratsam, durch den Mietendeckel eingesparte Mieten zunächst beiseitezulegen. Gut zu wissen: Wer noch vor der verfassungsgerichtlichen Entscheidung ein mieterfreundliches rechtskräftiges Urteil vor Gericht erwirken konnte und ggf. daraus auch gegen den Vermieter vollstreckt hat, ist auch bei negativem Ausgang der Klage vor dem Verfassungsgericht auf der sicheren Seite."
              },
              {
                title:
                  "Der Mietendeckel soll für bestimmte Wohnungen nicht gelten. Welche sind das?",
                link: "/",
                text:
                  "Zum Anwendungsbereich des Mietendeckels gehören rund 1,5 Millionen Berliner Mietwohnungen. Der Mietendeckel gilt nicht bei:<br/><ul><li>Neubauwohnungen, die erstmalig ab dem 1.1.2014 bezugsfertig wurden, Wohnungen, die dauerhaft unbewohnbar und unbewohnt waren und mit Neubauaufwand wieder hergestellt wurden,</li><li>öffentlich geförderten Wohnungen (Sozialwohnungen),</li><li>Wohnungen, die mit öffentlichen Mitteln instandgesetzt und modernisiert wurden und einer Mietpreisbindung unterliegen,</li><li>Wohnraum in Wohnheimen,</li><li>Wohnungen von Trägern der Wohlfahrtspflege.</li></ul>"
              },
              {
                title:
                  "Ich habe einer Mieterhöhung nach dem 18.6.2019 zugestimmt. Muss ich weiter die erhöhte Miete zahlen?",
                link: "/",
                text:
                  "Nein. Wenn die Wohnung dem Mietendeckel unterliegt (siehe Frage 2), sind Mieterhöhungen, denen nach dem 18.6.2019 zugestimmt wurde, ab dem 23.2.2020 nicht mehr zu bezahlen. Bei Mieterhöhungen wegen Modernisierungen zwischen dem 18.6.2019 und dem 23.2.2020 können die Kosten mit höchstens 1 Euro/qm ab Inkrafttreten des Gesetzes umgelegt werden, wenn bestimmte Voraussetzungen erfüllt sind."
              },
              {
                title:
                  "Meine Miete war schon am 18.6.2019 sehr hoch. Kann die jetzt abgesenkt werden?",
                link: "/",
                text:
                  "Neun Monate nach Inkrafttreten des Gesetzes, also ab 23.11.2020, besteht ein Anspruch auf Absenkung überhöhter Mieten. Ob Deine Miete überhöht ist, kannst Du mit unserem Mietendeckelrechner ermitteln. Wichtig: Binnen zwei Monaten nach Inkrafttreten, spätestens bis zum 23.4.2020, muss der Vermieter Mieter*innen über die maßgebliche Mietobergrenze informieren. Der Vermieter muss von sich aus ab 23.11.2020 die überhöhte Miete senken.Tut er das auch nach Aufforderung der*des Mieter*in nicht, müssen Mieter*innen aktiv werden. Mehr dazu unter <a href='https://www.berliner-mieterverein.de/Mietendeckel.htm'>www.berliner-mieterverein.de/Mietendeckel.htm</a>."
              },
              {
                title:
                  "Warum sind unter anderem Sozialer Wohnungsbau oder Neubau vom Mietendeckel ausgenommen?",
                link: "/",
                text:
                  "Der zukünftige Neubau unterliegt dem Mietendeckel nicht, weil in Berlin mehrere zehntausend Wohnungen fehlen und potentielle Investoren sich durch den Mietendeckel zurückhalten könnten. Allerdings: der Neubau von preisgünstigen Sozialwohnungen würde dem Mietendeckel ohnehin nicht unterliegen. Denn hier gelten für die Mietpreise eigene gesetzliche Regelungen, nicht nur bei neuen Wohngebäuden, sondern auch bei den rund 96.000 bestehenden Sozialwohnungen."
              },
              {
                title:
                  "Durch den Mietendeckel wird keine neue Wohnung entstehen. Greift er also nicht viel zu kurz?",
                link: "/",
                text:
                  "Mietpreisregulierungen, die die Vereinbarungen zwischen Vermieter*innen und Mieter*innen gestalten, haben noch niemals Wohnraum geschaffen. Sie sind aber trotzdem erforderlich. Der Vorwurf, der Mietendeckel schaffe keinen Wohnraum ist also absurd. Weil Neubau aus den verschiedensten Gründen in den nächsten 5 Jahren nicht für einen Ausgleich von Angebot und Nachfrage sorgen wird, sind Preisbeschränkungen erforderlich. Der Mietendeckel regelt das Problem zu hoher Mietpreise im Wohnungsbestand. Die Mieten werden weitestgehend eingefroren, Preise bei Neuvermietungen gedeckelt und überhöhte Mieten abgesenkt. Damit werden die Berliner Mieter*innen bis 2025 massiv entlastet. Eine Verschnaufpause. In dieser Zeit gilt es, neuen, leistbaren Wohnraum ebenso wie ein Umwandlungsverbot von Miet- in Eigentumswohnungen zu schaffen. Darüber hinaus müssen energetische Modernisierungen sozialverträglich gestaltet werden."
              },
              {
                title:
                  "Wer sich Wohnen in Berlin nicht leisten kann, sollte nach Brandenburg ziehen, oder?",
                link: "/",
                text:
                  "Berlin sollte eine andere Entwicklung nehmen als andere EU-Hauptstädte, zumal hier die Haushaltseinkommen sogar unter dem Bundesdurchschnitt liegen. Es ist eine schreiende Ungerechtigkeit, dass viele Arbeitnehmer*innen, ohne die unsere Stadt nicht funktionieren würde, leistbaren Wohnraum nur noch im Brandenburger Umland finden. Sie müssen tagtäglich oft mehrere Stunden im Auto oder in öffentlichen Verkehrsmitteln zubringen."
              },
              {
                title: "Ist der Mietendeckel gerecht?",
                link: "/",
                text:
                  "Gerechte Mietpreise gibt es nirgendwo. Dann müssten Mietzahlungen einkommensabhängig sein. Damit der private Wohnraum nicht nur an Besserverdienende geht, muss auch die Belegung der Wohnungen geregelt werden. Richtig ist, dass auch bei der Anwendung des Mietendeckels das Einkommen keine Rolle spielt. Haushalte mit hohem Einkommen, die sich in den vergangenen Jahren die zum Teil absurd hohen Mieten bei Wiedervermietung leisten konnten, werden von der Absenkungsmöglichkeit mehr profitieren als Durchschnittsverdiener*innen in einer Stadtrandsiedlung. Aber den Mietenstopp werden alle Mieter*innen für sich verbuchen können. Und bei Wiedervermietung werden die Chancen auch für Haushalte mit unterdurchschnittlichem Einkommen wieder steigen. Der Mietendeckel ist nur so gut, wie er von den Berliner*innen genutzt wird!"
              },
              {
                title:
                  "Können mir die Behörden beim Streit mit dem Vermieter über die zulässige Miete helfen?",
                link: "/",
                text:
                  "Ja. Die Bezirksämter sind grundsätzlich mit der Überwachung des Mietendeckelgesetzes befasst. Bei der Absenkung allerdings muss man sich an die Senatsverwaltung für Stadtentwicklung und Wohnen wenden. In welcher Form die Behörden die Mieter*innen unterstützen, steht ihnen jedoch weitestgehend frei. Sie können die Mieter*innen lediglich über die zulässige Miete informieren. Sie können aber auch einen Verwaltungsakt erlassen, der den Vermieter dann bindet. Verweigert der Vermieter Auskünfte oder ist er nicht zur Verringerung der Miete bereit, sollte man auf jeden Fall die Behörde informieren. Die hält dafür auch ein Formblatt bereit."
              },
              {
                title: "Was passiert, wenn der Mietendeckel in 2025 ausläuft?",
                link: "/",
                text:
                  "Dazu wird es eine Übergangsregelung geben, so wie dies bei früheren Sonderregelungen stets der Fall war."
              },
              {
                title:
                  "Die Anwendung des Mietendeckels erscheint mir kompliziert. Wohin kann ich mich wenden?",
                link: "/",
                text:
                  "Für einen ersten Check, wie hoch die Miete bei einem neuen Mietvertrag sein darf oder wie viel Du ab dem 23.11.2020 mit der Absenkung sparen könntest, nutze unseren Mietendeckelrechner. Für eine umfassendere Hilfe wende Dich an eine der <a href='www.berliner-mieterverein/beratung-und-service/persoenliche-rechtsberatung/wohnungsmieter.htm'>Beratungsstellen des Berliner Mietervereins</a>. Für die Beratung ist eine Mitgliedschaft erforderlich. Diese kann vor Ort abgeschlossen werden."
              }
            ]}
          />
        </div>
      </div>
    </div>
  </>
);

export default Page;
