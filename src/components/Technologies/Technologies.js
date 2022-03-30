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
      Individually and in team we have worked on a range of Technologies in both
      web and app development world, we have years of dedicated experices, and
      have built useful apps. i have worked with a range of technologies in web
      and app development World together we have built Back-end to Design of
      frontend resulting as great Apps and Graphic Design, Animations, Motion
      Graphic and Videography.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend-End</ListTitle>
          <ListParagraph>
            Experienced with
            <br />
            React native and React.js and Next.js
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
            Node.js, Mysql, Django and MongoDb
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UX/UI Design</ListTitle>
          <ListParagraph>
            Has experience with
            <br />
            tools like Figma, Photoshop and Premiere Pro
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
