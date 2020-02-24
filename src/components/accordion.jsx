import React from "react";
import styles from "./accordion.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

export default ({ items }) => (
  <Accordion
    className={`${styles.claims} col-12 col-md-8 offset-0 offset-md-2`}
    allowZeroExpanded={true}
  >
    {items.map((item, index) => (
      <AccordionItem className="mt-0 mt-xs-5">
        <AccordionItemHeading>
          <AccordionItemButton>
            <p 
              className={styles.itemButton}
            >{"".concat(index + 1, ". ")}</p>
            <p
              className={styles.itemButton}
              dangerouslySetInnerHTML={{
                __html: item.title
              }}
            />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p
            className={styles.itemContent}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </AccordionItemPanel>
      </AccordionItem>
    ))}
  </Accordion>
);
