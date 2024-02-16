import { useState } from 'react';
import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useRouter } from 'next/router';
import Image from 'next/image';

import * as S from "./index.styled";

const Profile = () => {
  const { user } = useAuthentication();
  const router = useRouter();

  const country = user?.country;

  const [userData] = useState({
    firstName: user?.givenName || '',
    email: user?.email || '',
    address: user?.address || '',
    city: user?.city || '',
    phone: user?.phone || '',
    country: user?.country || '',
    avatar: user?.avatar || '',
  });

 let userTranslations = undefined;

  if (country){
     userTranslations = loadTranslations(country as string);
    console.log(country);
  }
  else {
    userTranslations = loadTranslations('nigeria');
  }

  function loadTranslations(country: string) {
    // Mapping between full country names and abbreviated filenames
    const countryMappings: { [key: string]: string } = {
      nigeria: 'en',
      spain: 'es',
      france: 'fr',
      singapore:'mn',
      india: 'hi',
      // Add mappings for other countries as needed
    };
  
    const countryCode = country.toLowerCase();
    const fileName = countryMappings[countryCode] || 'en'; // Default to English if no mapping found
  
    try {
      return require(`../../utils/translations/${fileName}.json`);
    } catch (error) {
      console.error(`Translations file not found for ${fileName}`);
      return require(`../../utils/translations/en.json`);
    }
  }
  

  return (
    <S.UserProfileCont className="user-profile">
      <S.Overlay className="overlay"></S.Overlay>
      <S.ProfileContainer className="profile-container">
        <S.ProfilePicture className="profile-picture">
        <Image src='https://avatars.githubusercontent.com/u/58524269?v=4' alt="user-avatar" width={200} height={200} />
        </S.ProfilePicture>
        <S.UserDetails className="user-details">
          <S.LeftDetails className="left-details">
            <S.Label htmlFor="firstName">{userTranslations.userProfile.name}</S.Label>
            <S.Input
              type="text"
              name="firstName"
              id="firstName"
              value={user?.givenName}
              readOnly
            />
            <S.Label htmlFor="email">{userTranslations.userProfile.email}</S.Label>
            <S.Input
              type="email"
              name="email"
              id="email"
              value={user?.email}
              readOnly
            />
            <S.Label htmlFor="phone">{userTranslations.userProfile.phone}</S.Label>
            <S.Input
              type="phone"
              name="phone"
              id="phone"
              value={user?.phone}
              readOnly
            />
          </S.LeftDetails>
          <S.RightDetails className="right-details">
            <S.Label htmlFor="address">{userTranslations.userProfile.address}</S.Label>
            <S.Input
              type="text"
              name="address"
              id="address"
              value={user?.address}
              readOnly
            />
            <S.Label htmlFor="city">{userTranslations.userProfile.city}</S.Label>
            <S.Input
              type="text"
              name="city"
              id="city"
              value={user?.city}
              readOnly
            />
            <S.Label htmlFor="country">{userTranslations.userProfile.country}</S.Label>
            <S.Input
              type="text"
              name="country"
              id="country"
              value={user?.country}
              readOnly
            />
          </S.RightDetails>
        </S.UserDetails>
      </S.ProfileContainer>
      <S.HomeButton className="home-button" onClick={() => router.push(`/${user?.country}`)}>
        &larr; {userTranslations.userProfile.home}
      </S.HomeButton>
    </S.UserProfileCont>
  );
};

export default Profile;
