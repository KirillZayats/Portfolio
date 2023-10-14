import React, { useState, useEffect } from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  ContainerPageStyle,
  SubTitleStyle,
  ContainerTitlePageStyle,
  ContainerBlockColumnStyle,
  ContainerProvider,
} from "../styles/AppStyled";
import Work from "../components/works/Work";
import { ListWorksStyle } from "../styles/home/WorksStyled";
import { TWorks } from "../additionally/interfaces";
import Footer from "../components/footer/Footer";
import { userTypeSelector } from "../store/hooks/userTypeSelector";

const Works = () => {
  const { name, data } = userTypeSelector((state: any) => state.language);
  const [dataWorks, setDataWorks] = useState<TWorks>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataWorks(data["0"].Ru.projects)
        : setDataWorks(data["0"].En.projects);
    }
  }, [name]);

  return (
    <ContainerProvider id="works">
    <ContainerPageStyle>
      <ContainerTitlePageStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>/</MarkedSymbolStyle>
            {dataWorks && dataWorks.title}
          </TitleStyle>
        </TitleBlockStyle>
        <SubTitleStyle>{dataWorks && dataWorks.subtitle}</SubTitleStyle>
      </ContainerTitlePageStyle>
      <ContainerBlockColumnStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>
            {dataWorks && dataWorks.title_big_projects}
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <ListWorksStyle>
          {dataWorks &&
            dataWorks.big_projects.length > 0 &&
            dataWorks.big_projects.map((item, index) => (
              <Work
                key={`work_big_${index}`}
                project={item}
                text_button_open={dataWorks.button_open}
                text_button_details={dataWorks.button_details}
                text_button_hidden={dataWorks.button_hidden}
              />
            ))}
        </ListWorksStyle>
      </ContainerBlockColumnStyle>
      <ContainerBlockColumnStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>
            {dataWorks && dataWorks.title_small_projects}
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <ListWorksStyle>
          {dataWorks &&
            dataWorks.big_projects.length > 0 &&
            dataWorks.small_projects.map(
              (item, index) =>
                (
                  <Work
                    key={`work_small_${index}`}
                    project={item}
                    text_button_open={dataWorks.button_open}
                    text_button_details={dataWorks.button_details}
                    text_button_hidden={dataWorks.button_hidden}
                  />
                )
            )}
        </ListWorksStyle>
      </ContainerBlockColumnStyle>
    </ContainerPageStyle>
    <Footer/>
    </ContainerProvider>

  );
};

export default Works;
