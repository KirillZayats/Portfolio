import React, { useEffect } from "react";
import { MAIN_SKILLS } from "../../additionally/constants";
import {
  ValueLevelStyle,
  ContainerLevelSkillsTyle,
  LevelSkillStyle,
  LabelStyle,
  SkillStyle,
  MainSkillsStyle,
} from "../../styles/aboutMe/MainSkillsStyled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainSkills = () => {
  useEffect(() => {
    let valueLevel = document.querySelectorAll<HTMLElement>(".value");
    for (let index = 0; index < MAIN_SKILLS.length; index++) {
      gsap.to(`#level-${index}`, {
        scrollTrigger: {
          trigger: `#level-${index}`,
        },
        width: `${MAIN_SKILLS[index][1]}%`,
      });
      valueLevel[index].innerText = `${MAIN_SKILLS[index][1]}%`;
    }
  }, []);

  return (
    <MainSkillsStyle>
      {MAIN_SKILLS.map((item, index) => (
        <SkillStyle key={index}>
          <LabelStyle>{item[0]}</LabelStyle>
          <ContainerLevelSkillsTyle>
            <LevelSkillStyle id={`level-${index}`} />
            <ValueLevelStyle id={`value-${index}`} className="value" />
          </ContainerLevelSkillsTyle>
        </SkillStyle>
      ))}
    </MainSkillsStyle>
  );
};

export default MainSkills;
