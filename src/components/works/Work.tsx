import React from "react";
import ImageProject from "../../resources/ImageProject.png";
import {
  ContainerInfoStyle,
  TextStyle,
  ElementListStyle,
  ElementTechnologyStyle,
  ListTechnologyStyle,
  ImageWorkStyle,
  TitleWorkStyle,
  CardStyle,
} from "../../styles/works/WorkStyled";
import { ButtonStyle } from "../../styles/AppStyled";

const Work = () => {
  const technology = ["HTML", "CSS", "REDUX", "REACT"];
  return (
    <ElementListStyle>
      <CardStyle>
        <ImageWorkStyle src={ImageProject} />
        <ListTechnologyStyle>
          {technology.map((element, index) => (
            <ElementTechnologyStyle key={index}>
              <TextStyle>{element}</TextStyle>
            </ElementTechnologyStyle>
          ))}
        </ListTechnologyStyle>
        <ContainerInfoStyle>
          <TitleWorkStyle>ChertNodes</TitleWorkStyle>
          <TextStyle>Minecraft servers hosting</TextStyle>
          <ButtonStyle>Открыть</ButtonStyle>
        </ContainerInfoStyle>
      </CardStyle>
    </ElementListStyle>
  );
};

export default Work;
