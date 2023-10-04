import React from "react";
import {
    ElementListStyle,
    ListElementsStyle,
    NameContainerStyle,
    CardSkillStyle,
  } from '../../styles/aboutMe/CardSkillStyled';
  import { Skill } from '../../additionally/interfaces';

const CardSkill = ({element}: any) => {
  return (
    <CardSkillStyle>
      <NameContainerStyle>{element.title}</NameContainerStyle>
      <ListElementsStyle>
        {element.elements.map((item: any, index: any) => (<ElementListStyle key={index}>{item}</ElementListStyle>))}
      </ListElementsStyle>
    </CardSkillStyle>
  );
};

export default CardSkill;
