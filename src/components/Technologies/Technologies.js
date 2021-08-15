import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import React from "react";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      We both have worked on a range of Technologies in both web and app
      development world, Ibrahim our founder is a master at React Native and
      MERN stack, he has years of dedicated experices, and Have built amazing
      apps. Muhammad our co-founder has worked with a range of technologies in
      web & app development World, Together they have built Back-end to Design
      of frontend resulting as great Apps.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend-End</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            React native and React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            Node.js and Databases like MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UX/UI Design</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
