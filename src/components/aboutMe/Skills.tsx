import React from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
} from "../../styles/AppStyled";
import CardSkill from "./CardSkill";
import {
  SkillsStyle,
  ContainerContentStyle,
} from "../../styles/aboutMe/SkillsStyled";
import MainSkills from "../aboutMe/MainSkills";

const Skills = () => {
  const massive = [1, 2, 3, 4, 5, 6];
  return (
    <SkillsStyle>
      <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>умения
        </TitleStyle>
        <LineTitleStyle />
      </TitleBlockStyle>
      <MainSkills />
      {
        window.location.href.includes(`aboutme`) &&
        (
          <ContainerContentStyle>
            {massive.map((item, index) => (
              <CardSkill key={index} />
            ))}
          </ContainerContentStyle>
        )
      }

    </SkillsStyle>
  );
};

export default Skills;
