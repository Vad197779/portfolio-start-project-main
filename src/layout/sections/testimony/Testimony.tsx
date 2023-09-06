import React from 'react'
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexContainer } from '../../../components/FlexContainer';
import { Container } from '../../../components/Container';
import {S} from "../skills/Skills_Styles"

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexContainer direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quote"}/>
          </S.IconWrapper>
          <Slider />
        </FlexContainer>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  position: relative;
  ${S.IconWrapper} {
    margin: 28px 0 72px;
  }
`