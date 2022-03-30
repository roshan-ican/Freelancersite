import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 50, text: "Projects with serveal Languages" },
  { number: 2, text: "full stack react native apps on Playstore" },
  { number: 1900, text: "Working with 3 clients" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => {
        <Box key={index}>
          <BoxNum>{`${card.number}`}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>;
      })}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
