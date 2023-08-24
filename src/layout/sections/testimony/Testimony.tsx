import React from 'react'
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexContainer } from '../../../components/FlexContainer';
import { IconWrapper } from '../skills/skill/Skill';

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexContainer direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={"quote"}/>
        </IconWrapper>
        <Slider />
      </FlexContainer>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  ${IconWrapper} {
    margin: 48px 0 72px;
  }
`