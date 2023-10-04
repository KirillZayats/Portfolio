import React, { useEffect } from "react";
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

const Skills = () => {
  const { pathname } = useLocation();

  const massive = [
    {
      "title": "Языки",
      "elements": ["JavaScript", "TypeScript", "C#", "Java", "Python"]
    },
    {
      "title": "Библиотеки",
      "elements": ["React", "React Router", "Redux"]
    },
    {
      "title": "Остальное",
      "elements": ["HTML", "CSS", "SCSS", "Styled Components", "Webpack", "React Native", "PyQt5"]
    },
    {
      "title": "БД",
      "elements": ["MSSQL", "SQlite", "PL/SQL", "MySQL", "PostgreSQL"]
    },
    {
      "title": "Инструменты",
      "elements": ["VSCode", "Visual Studio", "Git & GitHub", "IntelliJ IDEA", "Android Studio"]
    }
  ];
  return (
    <SkillsStyle>
      <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>умения
        </TitleStyle>
        <LineTitleStyle />
      </TitleBlockStyle>
      {
        pathname.includes(`aboutme`) &&
        (
          <MainSkills />
        )
      }
      <ContainerContentStyle>
        {massive.map((item, index) => (
          <CardSkill key={index} element={item}/>
        ))}
      </ContainerContentStyle>
    </SkillsStyle>
  );
};

export default Skills;
