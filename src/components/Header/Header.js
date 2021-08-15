import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

import { DiCssdeck } from "react-icons/di";
import Link from "next/link";
import React from "react";

const Header = () => (
  <div>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li href="#projects">
        <NavLink>Project</NavLink>
      </li>
      <li href="#tech">
        <NavLink>Technologies</NavLink>
      </li>
      <li href="#about">
        <NavLink>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.github.com/roshan-ican">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkdlen.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/IamMuha51906610">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </div>
);

export default Header;
