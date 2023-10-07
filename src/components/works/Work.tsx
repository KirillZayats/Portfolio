import { useState } from "react";
import {
  ContainerInfoStyle,
  TextStyle,
  ElementListStyle,
  ElementTechnologyStyle,
  ListTechnologyStyle,
  ContainerImageWorkStyle,
  TitleWorkStyle,
  CardStyle,
  ContainerButtons,
  ButtonStyle,
  ImageWorkStyle,
  LinkStyle,
} from "../../styles/works/WorkStyled";
import Modal from "../modal/Modal";
import { TWork } from "../../additionally/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Work = (props: {
  project: TWork;
  text_button_open: string;
  text_button_details: string;
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [message, setMessage] = useState("");

  const openDetails = () => {
    setModalActive(true);
    setMessage("Lol");
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + ' "> </span>';
    },
  };

  return (
    <ElementListStyle>
      <CardStyle>
        <ContainerImageWorkStyle>
          {props.project && (
            <Swiper
              pagination={pagination}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {props.project.images.length > 0 &&
                props.project.images.map((item, index) => (
                  <SwiperSlide key={`image_${index}`}>
                    <ImageWorkStyle src={`${item}`} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </ContainerImageWorkStyle>
        <ListTechnologyStyle>
          {props.project.technologies.map((element, index) => (
            <ElementTechnologyStyle key={index}>
              <TextStyle>{element}</TextStyle>
            </ElementTechnologyStyle>
          ))}
        </ListTechnologyStyle>
        <ContainerInfoStyle>
          <TitleWorkStyle>{props.project.name}</TitleWorkStyle>
          <TextStyle>{props.project.description}</TextStyle>
          <ContainerButtons>
            {props.project.link_site && (
              <LinkStyle href={`${props.project.link_site}`} target="_blank">
                <ButtonStyle>{props.text_button_open}</ButtonStyle>
              </LinkStyle>
            )}
            <ButtonStyle onClick={openDetails}>
              {props.text_button_details}
            </ButtonStyle>
          </ContainerButtons>
        </ContainerInfoStyle>
      </CardStyle>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        message={message}
      />
    </ElementListStyle>
  );
};

export default Work;
