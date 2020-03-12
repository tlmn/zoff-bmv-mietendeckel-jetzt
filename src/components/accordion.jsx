import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const AccordionComponent = ({ items }) => (
  <Accordion
    className="col-12 col-md-10 offset-0 offset-md-1 mt-5 col-lg-8 offset-lg-2"
    allowZeroExpanded
  >
    {items.map((item, index) => (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <p
              className="item__button"
            >
              {''.concat(index + 1, '. ')}
            </p>
            <p
              className="item__button"
              dangerouslySetInnerHTML={{
                __html: item.title,
              }}
            />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p
            className="item__content"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </AccordionItemPanel>
      </AccordionItem>
    ))}
  </Accordion>
);

export default AccordionComponent;