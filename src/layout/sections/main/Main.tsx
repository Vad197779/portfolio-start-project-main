import React from 'react'
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpeg'
import { FlexContainer } from '../../../components/FlexContainer';

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer align={"center"} justify={"space-around"}>
        <div>
          <span>Hi There</span>
          <Name>I am Svetlana Dyablo</Name>
          <MainTitle>A Web Developer.</MainTitle>
        </div>
        <Photo src={photo} alt="" />
      </FlexContainer>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`
const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #a9d0c7;
`
const MainTitle = styled.h1`
  
`
const Name = styled.h2`
  
`