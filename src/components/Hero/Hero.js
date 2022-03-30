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
        Currently Running a Advertisement Agency, The purpose of our Agency is
        to bring our ideas to reality with genuine care for the clients and
        solve the problems of yours and help you Advertise and Market your
        startup with us effortlessly,
        <br /> A 2 Z Advertisement Agency has come up with it's new and dynamic
        venture conceptualized by a team of young, creative and exuberant
        professionals with a vast experience in the field of events and
        marketing communication. Our Agency's main goal to bring the highest
        level of Creativity and authenticity to this field. Our belief in
        ourselves and our commitment to quality will definitely be a value
        addition to the client in all aspects.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://twitter.com/IamMuha51906610")
        }
      >
        Contact us
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
