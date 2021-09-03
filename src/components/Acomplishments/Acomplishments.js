import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 50, text: 'Projects with serveal Languages'},
  { number: 2, text: 'Two full stack react native apps on Playstore', },
  { number: 1900, text: 'Twitter Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achicevements</SectionTitle>
    <Boxes>
      {data.map((card, index) => {
        <Box key={index}>
        <BoxNum>
          {card.number}+
        </BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>
      })}
      </Boxes>
  </Section>
);

export default Acomplishments;
