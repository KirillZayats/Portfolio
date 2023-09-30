import React from "react";
import {
    ElementListStyle,
    ListElementsStyle,
    NameContainerStyle,
    CardSkillStyle,
  } from '../../styles/aboutMe/CardSkillStyled';
  
const CardSkill = () => {
    const type = ['erge', 'erge','erge','erge','erge','erge','erge','erge',]
  return (
    <CardSkillStyle>
      <NameContainerStyle>Frameworks</NameContainerStyle>
      <ListElementsStyle>
        {type.map((element, index) => (<ElementListStyle key={index}>{element}</ElementListStyle>))}
      </ListElementsStyle>
    </CardSkillStyle>
  );
};

export default CardSkill;
