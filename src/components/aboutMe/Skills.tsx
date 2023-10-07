import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { TSkills } from "../../additionally/interfaces";

const Skills = () => {
  const { pathname } = useLocation();
  const { name, data } = useSelector((state: any) => state.language);
  const [dataSkills, setDataSkills] = useState<TSkills>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataSkills(data["0"].Ru.aboutme)
        : setDataSkills(data["0"].En.aboutme);
    }
  }, [name]);

  return (
    <SkillsStyle>
      <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>
          {dataSkills && dataSkills.title_skills}
        </TitleStyle>
        <LineTitleStyle />
      </TitleBlockStyle>
      {pathname.includes(`aboutme`) && <MainSkills />}
      <ContainerContentStyle>
        {dataSkills &&
          dataSkills.skills.length > 0 &&
          dataSkills.skills.map((item, index) => (
            <CardSkill key={index} element={item} />
          ))}
      </ContainerContentStyle>
    </SkillsStyle>
  );
};

export default Skills;
