import { useState, useEffect } from "react";
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
import { IPropsWork } from "../../additionally/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Modal from "../modal/Modal";
import { useLocation } from "react-router-dom";

const Work = ({
  project,
  text_button_open,
  text_button_details,
  text_button_hidden,
}: IPropsWork) => {
  const [modalActive, setModalActive] = useState(false);
  const {pathname} = useLocation();
  const openDetails = () => {
    document.getElementById(pathname.includes("works") ? 'works' : 'home')?.removeAttribute('style')
    setModalActive(true);
  }

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
          {project && (
            <Swiper
              pagination={pagination}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {project.images.length > 0 &&
                project.images.map((item, index) => (
                  <SwiperSlide key={`image_${index}`}>
                    <ImageWorkStyle src={`${item}`} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </ContainerImageWorkStyle>
        <ListTechnologyStyle>
          {project.technologies.map((element, index) => (
            <ElementTechnologyStyle key={index}>
              <TextStyle>{element}</TextStyle>
            </ElementTechnologyStyle>
          ))}
        </ListTechnologyStyle>
        <ContainerInfoStyle>
          <TitleWorkStyle>{project.name}</TitleWorkStyle>
          <TextStyle>{project.description}</TextStyle>
          <ContainerButtons>
            {project.link_site && (
              <LinkStyle href={`${project.link_site}`} target="_blank">
                <ButtonStyle>{text_button_open}</ButtonStyle>
              </LinkStyle>
            )}
            <ButtonStyle onClick={openDetails}>
              {text_button_details}
            </ButtonStyle>
          </ContainerButtons>
        </ContainerInfoStyle>
      </CardStyle>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        details={project}
        text_button_hidden={text_button_hidden}
      />
    </ElementListStyle>
  );
};

export default Work;
