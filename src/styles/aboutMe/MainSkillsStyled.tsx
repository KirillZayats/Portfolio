import { styled } from "styled-components";

const MainSkillsStyle = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

const SkillStyle = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
`;

const LabelStyle = styled.span`
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
const LevelSkillStyle = styled.div`
    width: 1px;
    height: 16px;
    background: ${({ theme }) => theme.colors.MARKER_COLOR};
    transition: all 1s ease-out;
    position: relative;
`;

const ContainerLevelSkillsTyle = styled.div`
    height: 16px;
    width: 70%;
    border: 1px solid  ${({ theme }) => theme.colors.TEXT_COLOR};
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;  

const ValueLevelStyle = styled.span`
    font-size: 12px;
`;

export {
    ValueLevelStyle,
    ContainerLevelSkillsTyle,
    LevelSkillStyle,
    LabelStyle,
    SkillStyle,
    MainSkillsStyle
}


