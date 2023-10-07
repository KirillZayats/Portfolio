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
} from "../styles/AppStyled";
import Work from "../components/works/Work";
import { ListWorksStyle } from "../styles/home/WorksStyled";
import { useSelector } from "react-redux";
import { TWorks } from "../additionally/interfaces";

const Works = () => {
  const { name, data } = useSelector((state: any) => state.language);
  const [dataWorks, setDataWorks] = useState<TWorks>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataWorks(data["0"].Ru.projects)
        : setDataWorks(data["0"].En.projects);
    }
  }, [name]);
  return (
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
                index < 3 && (
                  <Work
                    key={`work_small_${index}`}
                    project={item}
                    text_button_open={dataWorks.button_open}
                    text_button_details={dataWorks.button_details}
                  />
                )
            )}
        </ListWorksStyle>
      </ContainerBlockColumnStyle>
    </ContainerPageStyle>
  );
};

export default Works;
