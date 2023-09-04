import React from 'react'
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { FlexContainer } from '../../../components/FlexContainer';
import { Container } from '../../../components/Container';

export const Slogan: React.FC = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexContainer direction={"column"} align={"center"}>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexContainer>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  
`