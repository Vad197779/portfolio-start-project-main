import React from 'react'
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexContainer } from '../../components/FlexContainer';

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
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #e8bf89;
  min-height: 30vh;
`
const Name = styled.span`
  
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  
`
const Copyright = styled.small`
  
`