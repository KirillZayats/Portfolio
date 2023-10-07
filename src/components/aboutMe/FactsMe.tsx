import { useEffect, useState } from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
} from "../../styles/AppStyled";
import {
  TextElementStyle,
  ElementListStyle,
  ListFactsStyle,
  FactsStyle,
} from "../../styles/aboutMe/FactsMeStyled";
import { useSelector } from "react-redux";
import { TFacts } from "../../additionally/interfaces";

const FactsMe = () => {
  const { name, data } = useSelector((state: any) => state.language);
  const [dataFacts, setDataFacts] = useState<TFacts>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataFacts(data["0"].Ru.aboutme)
        : setDataFacts(data["0"].En.aboutme);
    }
  }, [name]);

  return (
    <FactsStyle>
      <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>
          {dataFacts && dataFacts.title_facts}
        </TitleStyle>
        <LineTitleStyle />
      </TitleBlockStyle>
      <ListFactsStyle>
        {dataFacts &&
          dataFacts.facts.length > 0 &&
          dataFacts.facts.map((element, index) => (
            <ElementListStyle key={index}>
              <TextElementStyle>{element}</TextElementStyle>
            </ElementListStyle>
          ))}
      </ListFactsStyle>
    </FactsStyle>
  );
};

export default FactsMe;
