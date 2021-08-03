import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <div>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" />
          <span>Ibrahim & Muhammad Tech</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li href="#projects">
        <NavLink>Project</NavLink>
      </li>
    </Div2>
  </div>
);

export default Header;