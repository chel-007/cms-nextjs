import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import React from 'react';
import { useRouter } from 'next/router';
import Nigeria from '../../pages/nigeria';
import UserProfile from '../../pages/[country]/userprofile';

import logo from "public/images/logo.png";

import { pxToRem } from "src/styles/px-to-rem";
import { useAuthentication } from "src/lib/hooks/use-authentication";

import * as S from "./LandingPage.styled";

const Space = styled.div`
  height: ${pxToRem(80)};
`;

const LandingPage: FC = () => {

  const router = useRouter();

  
  const { user } = useAuthentication();

  const country = user?.country


  return (
    <S.AppCont>
        {/* <NavBar /> */}
        <S.Overlay className="overlay"></S.Overlay>
      {router.pathname === '/' && (
       <div>
          
          <S.Title className="title">CMS Fandom</S.Title>
          <S.Subtitle className="subtitle">(Call Me Super)</S.Subtitle>
          <Image width={5} src={logo} alt="Logo" />
      </div>
      )}
        {router.pathname === '/nigeria' && <Nigeria />}
        {/* {router.pathname === `/${country}/userprofile` && <UserProfile />} */}
        {/* {router.pathname === '/[country]/merch' && <Merch />}
        {router.pathname === '/[country]/fanmeetup' && <FanMeetup />}
        {router.pathname === '/[country]/countdown' && <Countdown />}
        {router.pathname === '/[country]/scene/[sceneId]' && <Scene />} */}
      </S.AppCont>
  );
};

export default LandingPage;
