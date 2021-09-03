import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import React from "react";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hi, I am Roshan
         <br />
         Welcome To my Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of my coding Journey is to bring our ideas to reality with genuine
        care for the people & help solving the problems of this World with the
        awesome apps and travel and meet amazing people.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://twitter.com/IamMuha51906610")
        }
      >
        Learn More about us
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
