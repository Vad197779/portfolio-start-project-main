import React from 'react'
import { Icon } from '../../components/icon/Icon';
import { FlexContainer } from '../../components/FlexContainer';
import {S} from "./Footer_Styles"

const socialItemsData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "viber",
  },
  {
    iconId: "whatsapp",
  },
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexContainer direction={"column"} align={"center"}>
        <S.Name>Vadim</S.Name>
        <S.SocialList>

          {socialItemsData.map((s, index) => {
            return(
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"} iconId={s.iconId}/>
                </S.SocialLink>
              </S.SocialItem>
            )
          })}
          
        </S.SocialList>
        <S.Copyright>© 2023 Vadim Kovtunenko, All Rights Reserved.</S.Copyright>
      </FlexContainer>
    </S.Footer>
  );
};
