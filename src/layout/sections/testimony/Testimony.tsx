import React from 'react'
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexContainer } from '../../../components/FlexContainer';

export const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexContainer direction={"column"} align={"center"}>
        <Icon iconId={"quote"}/>
        <Slider />
      </FlexContainer>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: #84acd3;
`