import React from 'react'
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/logo/Menu';

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #42e8e0;
  display: flex;
  justify-content: space-between;
`

