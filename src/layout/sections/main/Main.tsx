import React from 'react'
import photo from '../../../assets/images/photo1.jpg'
import { FlexContainer } from '../../../components/FlexContainer';
import { Container } from '../../../components/Container';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexContainer align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Vadim Kovtunenko</span></S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.'],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
            </S.MainTitle>
          </div>
          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexContainer>
      </Container>
    </S.Main>
  );
};
