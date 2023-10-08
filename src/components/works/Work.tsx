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
  ContainerDetailsStyle,
  DescriptionBlockDetailsStyle,
  TitleBlockDetailsStyle,
  ContainerDetailsBlockStyle,
  ContainerYearStyle
} from "../../styles/works/WorkStyled";
import { TWork } from "../../additionally/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Work = (props: {
  project: TWork;
  text_button_open: string;
  text_button_details: string;
  text_button_hidden: string;
}) => {
  const [idContainer, setIdContainer] = useState(document.getElementById(`${props.project.name}`));

  useEffect(() => {
    setIdContainer(document.getElementById(`${props.project.name}`))
  }, [props.project.name])

  const openDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(idContainer);
    
    let container = idContainer && idContainer.querySelector('.hidden_container');
    console.log(container);
    container && container.classList.toggle('hidden_container');
    container && container.classList.toggle('active_container');

  };
  const closeContainer = () => {
    let container = idContainer && idContainer.querySelector('.active_container');
    container && container.classList.toggle('active_container');
    container && container.classList.toggle('hidden_container');
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + ' "> </span>';
    },
  };

  return (
    <ElementListStyle>
      <CardStyle id={props.project.name}>
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
        <ContainerDetailsStyle className="hidden_container">
          <ContainerDetailsBlockStyle>
            <TitleBlockDetailsStyle>
              {props.project.title_aim}
            </TitleBlockDetailsStyle>
            <DescriptionBlockDetailsStyle>
              {props.project.aim}
            </DescriptionBlockDetailsStyle>
          </ContainerDetailsBlockStyle>
          <ContainerDetailsBlockStyle>
            <TitleBlockDetailsStyle>
              {props.project.title_requirements}
            </TitleBlockDetailsStyle>
            <DescriptionBlockDetailsStyle>
              {props.project.requirements}
            </DescriptionBlockDetailsStyle>
          </ContainerDetailsBlockStyle>
          <ContainerYearStyle>
          <DescriptionBlockDetailsStyle>
              {props.project.title_year}
            </DescriptionBlockDetailsStyle>
            <DescriptionBlockDetailsStyle>
              {props.project.year_created}
            </DescriptionBlockDetailsStyle>  
          </ContainerYearStyle>
          <ContainerButtons>
            {props.project.link_git && (
              <LinkStyle href={`${props.project.link_git}`} target="_blank">
                <ButtonStyle>Github</ButtonStyle>
              </LinkStyle>
            )}
            <ButtonStyle onClick={closeContainer}>
              {props.text_button_hidden}
            </ButtonStyle>
          </ContainerButtons>
        </ContainerDetailsStyle>
      </CardStyle>
    </ElementListStyle>
  );
};

export default Work;
