import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexContainer } from '../../../components/FlexContainer';
import { Container } from '../../../components/Container';
import {S} from "./Skills_Styles";
import { Skill } from './skill/Skill';
import { Fade } from "react-awesome-reveal";

const skillData = [
  {
    iconId: "html",
    title: "html5",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconId: "css",
    title: "css3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconId: "react",
    title: "React",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconId: "typescript",
    title: "typescript",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconId: "styledComponents",
    title: "styled components",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconId: "figma",
    title: "WEB DESIgN",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
]

export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
          <FlexContainer wrap={"wrap"} justify={"space-between"}>
            <Fade cascade={true} damping={0.2} style={{flexGrow: 1,display: "flex"}}>
              {skillData.map((s, index) => {
                return <Skill iconId={s.iconId} key={index}
                              title={s.title}
                              description={s.description}/>
              })}
            </Fade>
          </FlexContainer>
      </Container>
    </S.Skills>
  );
};
