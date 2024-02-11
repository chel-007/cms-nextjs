import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Nigeria from '../../pages/nigeria';
// import UserProfile from './components/UserProfile';
// import Merch from './components/Merch';
// import FanMeetup from './components/FanMeetup';
// import Countdown from './components/Countdown';
// import Scene from './components/Scene';

import logo from "public/images/logo.png";

import { pxToRem } from "src/styles/px-to-rem";

import * as S from "./LandingPage.styled";
import NavBar from "../NavBar/NavBar";

const Space = styled.div`
  height: ${pxToRem(80)};
`;

const LandingPage: FC = () => {

  const router = useRouter();


  return (
    <S.AppCont>
        {/* <NavBar /> */}
      {router.pathname === '/' && (
       <div>
          <S.Overlay className="overlay"></S.Overlay>
          <S.Title className="title">CMS Fandom</S.Title>
          <S.Subtitle className="subtitle">(Call Me Super)</S.Subtitle>
          <Image width={5} src={logo} alt="Logo" />
      </div>
      )}
        {router.pathname === '/nigeria' && <Nigeria />}
        {/* {router.pathname === '/[country]/profile' && <UserProfile />}
        {router.pathname === '/[country]/merch' && <Merch />}
        {router.pathname === '/[country]/fanmeetup' && <FanMeetup />}
        {router.pathname === '/[country]/countdown' && <Countdown />}
        {router.pathname === '/[country]/scene/[sceneId]' && <Scene />} */}
      </S.AppCont>
  );
};

export default LandingPage;
