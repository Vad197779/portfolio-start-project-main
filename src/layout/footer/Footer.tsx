import React from 'react'
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexContainer } from '../../components/FlexContainer';
import { theme } from '../../styles/Theme';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer direction={"column"} align={"center"}>
        <Name>Svetlana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  opacity: 0.5;
`