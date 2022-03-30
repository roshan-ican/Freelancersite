import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles.js";

const data = [
  {
    number: 50,
    text: "Designed and Developed 50+ frontend & Backend Applications utilizing React.js, Node.js and Python",
  },
  {
    number: 2,
    text: "Worked with Agile team across nations and have Full stack react native app on Playstore",
  },
  {
    number: 3,
    text: "Along with code, I have experience with Digital Marketing and currently working with 3 clients",
  },
  {
    number: 100,
    text: "Have More than 100 Graphic Designing projects, Knows How to do Videography, Photography and Motion Graphics",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Achievements </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
