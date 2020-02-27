import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

export default ({ items }) => (
  <Accordion
    className="claims col-12 col-md-10 offset-0 offset-md-1"
    allowZeroExpanded={true}
  >
    {items.map((item, index) => (
      <AccordionItem className="mt-0 mt-xs-5">
        <AccordionItemHeading>
          <AccordionItemButton>
            <p 
              className="itemButton"
            >{"".concat(index + 1, ". ")}</p>
            <p
              className="itemButton"
              dangerouslySetInnerHTML={{
                __html: item.title
              }}
            />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p
            className="itemContent"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </AccordionItemPanel>
      </AccordionItem>
    ))}
  </Accordion>
);
