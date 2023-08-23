import React from 'react'
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/logo/Menu';
import { Container } from '../../components/Container';
import { FlexContainer } from '../../components/FlexContainer';

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer justify={"space-between"} align={"center"}>
          <Logo />
          <Menu menuItems={items}/>
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #42e8e0;
`

