import { FC, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useLocalContent } from "src/lib/hooks/use-local-content";
import LogoAffinidi from "../../../public/images/logo-affinidi.svg";
import { clientLogin } from "src/lib/auth/client-login";
import styled from "styled-components";
import { pxToRem } from "src/styles/px-to-rem";
import { getTranslation } from 'src/utils/languageutils.js';

import * as S from "./NavBar.styled";

const Button = styled.button<{ variant: "primary" | "secondary" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: ${pxToRem(12)} ${pxToRem(24)};
  color: #ff5722;
  font-family: "lato", sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 16px 0 rgba(255, 87, 34, 0.32);

  button:nth-of-type(1) {
    margin-right: ${pxToRem(12)};
  }

  img {
    margin-right: ${pxToRem(16)};
  }

  ${({ variant }) =>
    variant === "primary"
      ? `
      background: #1d58fc;
      color:#fff;
      box-shadow: 0 4px 16px 0 rgba(55, 62, 151, 0.32);
      margin-top:${pxToRem(44)};
    `
      : `
      background: #ff5722;
      color: #fff;
      box-shadow: 0 4px 16px 0 rgba(255, 87, 34, 0.32);
      margin-bottom:${pxToRem(44)};
    `}
`;

const NavBar: FC = () => {
  const [isSignInPage, setIsSignInPage] = useState(false);
  const [confirmLogOut, setConfirmLogOut] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuthentication();

  const { country } = useLocalContent();

  const router = useRouter()

  useEffect(() => {
    if (window.location.href.includes("/")) {
      setIsSignInPage(true);
    } else {
      setIsSignInPage(false);
    }
  }, []);

  useEffect(() => {
    if (confirmLogOut) {
      const timeoutId = setTimeout(() => {
        setConfirmLogOut(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [confirmLogOut]);

  async function handleLogOut() {
    if (!confirmLogOut) {
      setConfirmLogOut(true);
      return;
    }

    await signOut();
  }

  const renderLoginState = () => {
    console.log(country)
    console.log(user)
    console.log(user?.country)
    console.log(user?.email)
    console.log(user?.locality)
    console.log(isAuthenticated)
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (isAuthenticated) {
      return (
        <div>
          <span>Welcome, {user?.email}</span>

          <button onClick={handleLogOut}>Logout</button>
        </div>
      );
    }

    return(
  <S.Button style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center',}} onClick={clientLogin}>
    <Image width={15} src={LogoAffinidi} alt="logo affinidi" />
    Affinidi Login
  </S.Button>)
  };

  const redirectToCountrySpecificPage = () => {
    const userCountry = user?.country || 'unknown';

    console.log(`User's country: ${userCountry}`);

    switch (userCountry.toLowerCase()) {
      case 'nigeria':
        router.push('/nigeria');
        break;
      case 'india':
        router.push('/india');
        break;
      case 'spain':
        router.push('/spain');
        break;
      case 'france':
        router.push('/france');
        break;
      case 'singapore':
          router.push('/singapore');
          break;
      default:
        router.push('/nigeria');
        break;
    }
  };

  return (
    <S.Header className="Header">
      <Link style={{textDecoration: 'none'}} href="/">
          <h1 style={{ fontSize: '3.2rem', color: '#FFA500' }}>CMS Fandom</h1>
      </Link>
      <S.Nav>
        {user && (
          <>
            <S.Link href={`/${user.country}/profile`}>
                <h1 className="link route">{getTranslation(user.country, 'profile')}</h1>
            </S.Link>
            <S.Link href={`/${user.country}/merch`}>
                <h1 className="link route">{getTranslation(user.country, 'merch')}</h1>
            </S.Link>
            <S.Link href={`/${user.country}/fanmeetup`}>
                <h1 className="link route">{getTranslation(user.country, 'fanMeetup')}</h1>
            </S.Link>
            <S.Link href={`/${user.country}/countdown`}>
                <h1 className="link route">{getTranslation(user.country, 'countdown')}</h1>
            </S.Link>
          </>
        )}
        {renderLoginState()}
      </S.Nav>
    </S.Header>
  );
};

export default NavBar;
