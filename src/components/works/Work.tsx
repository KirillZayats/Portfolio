import React, { useState } from "react";
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
  ContainerButtons,
  ButtonStyle
} from "../../styles/works/WorkStyled";
import Modal from "../Modal/Modal";

const Work = () => {
  const [modalActive, setModalActive] = useState(false);
  const [message, setMessage] = useState('');
  const technology = ["HTML", "CSS", "REDUX", "REACT"];

  const openDetails = () => {
    setModalActive(true);
    setMessage("Lol");
  }

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
          <ContainerButtons>
          <ButtonStyle>Открыть</ButtonStyle>
          <ButtonStyle onClick={openDetails}>Подробнее</ButtonStyle>

          </ContainerButtons>
        </ContainerInfoStyle>
      </CardStyle>
      <Modal active={modalActive} setActive={setModalActive} message={message}/>
    </ElementListStyle>
  );
};

export default Work;
