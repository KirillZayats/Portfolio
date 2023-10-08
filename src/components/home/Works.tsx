import React, { useState, useEffect } from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
} from "../../styles/AppStyled";
import {
  WorksStyle,
  ContainerTitleStyle,
  ListWorksStyle,
  LinkViewAllStyle,
  ContainerLinkDownStyle,
  ContainerLinkUpStyle,
} from "../../styles/home/WorksStyled";
import Work from "../works/Work";
import { useSelector } from "react-redux";
import { TWorks } from "../../additionally/interfaces";

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
    <WorksStyle>
      <ContainerTitleStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>
            {dataWorks && dataWorks.title}
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <ContainerLinkUpStyle>
          <LinkViewAllStyle to={"/works"}>
            {dataWorks && dataWorks.link_all_projects}
          </LinkViewAllStyle>
        </ContainerLinkUpStyle>
      </ContainerTitleStyle>
      <ListWorksStyle>
        {dataWorks &&
          dataWorks.big_projects.length > 0 &&
          dataWorks.big_projects.map(
            (item, index) =>
              index < 3 && (
                <Work
                  key={`work_${index}`}
                  project={item}
                  text_button_open={dataWorks.button_open}
                  text_button_details={dataWorks.button_details}
                  text_button_hidden={dataWorks.button_hidden}
                />
              )
          )}
      </ListWorksStyle>
      <ContainerLinkDownStyle>
        <LinkViewAllStyle to={"/works"}>
          {dataWorks && dataWorks.link_all_projects}
        </LinkViewAllStyle>
      </ContainerLinkDownStyle>
    </WorksStyle>
  );
};

export default Works;
