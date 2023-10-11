import {useEffect} from "react";
import {
  ElementListStyle,
  ListElementsStyle,
  NameContainerStyle,
  CardSkillStyle,
} from "../../styles/aboutMe/CardSkillStyled";
import { ICardSkill } from "../../additionally/interfaces";

const CardSkill = ({ element }: ICardSkill) => {
  return (
    <CardSkillStyle>
      <NameContainerStyle>{element.title}</NameContainerStyle>
      <ListElementsStyle>
        {element.elements.map((item: string, index: number) => (
          <ElementListStyle key={index}>{item}</ElementListStyle>
        ))}
      </ListElementsStyle>
    </CardSkillStyle>
  );
};

export default CardSkill;
