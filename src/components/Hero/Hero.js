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
        Welcome To <br />
        IM Tech's Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of 'IM Tech' is to bring our ideas to reality with hardwork
        and dedication & solve the problems of this World...
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
