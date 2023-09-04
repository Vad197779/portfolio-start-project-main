import React from 'react'
import photo from '../../../assets/images/photo1.jpg'
import { FlexContainer } from '../../../components/FlexContainer';
import { Container } from '../../../components/Container';
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexContainer align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Vadim Kovtunenko</span></S.Name>
            <S.MainTitle>A Web Developer.</S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photo} alt="" />
          </S.PhotoWrapper>
        </FlexContainer>
      </Container>
    </S.Main>
  );
};
