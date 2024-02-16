import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import alley from '../../../public/images/alley.jpg';
import outskirts from '../../../public/images/outskirts.jpg';
import city from '../../../public/images/city.jpg';
import { useAuthentication } from "src/lib/hooks/use-authentication";

import * as S from "./index.styled";

interface SceneTranslations {
  ageRestricted?: boolean;
  ageRestriction?: string;
  durationText?: string;
  home?: string;
  prev?: string;
  next?: string;
  title?: string;
  img?: string;
  plot?: string;
  duration?: string;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const Scenes: React.FC = () => {
  const router = useRouter();
  const { user } = useAuthentication();
  const [userData, setUserData] = useState<{ age: number }>({ age: -1 });
  const [sceneTranslations, setSceneTranslations] = useState<SceneTranslations>({});

  useEffect(() => {
    if (!router.isReady) return;

    const { country, sceneid } = router.query;
    if (country && sceneid) {
      const userTranslations = loadTranslations(country as string); // Default to English translations if country not available
      const sceneTranslations: SceneTranslations = userTranslations['scenes'][sceneid as string] || {};
      setSceneTranslations(sceneTranslations);

      const calculateAge = (birthdate: string) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      };

      setUserData(prevState => ({
        ...prevState,
        age: user?.birthdate ? calculateAge(user.birthdate) : -1,
      }));
    }
  }, [router.isReady, router.query, user]);

  return (
    <S.Scene className='Scene'>
      <S.SceneContainer className="scene-container">
        {sceneTranslations['ageRestricted'] && userData.age < 18 ? (
          <div className="blank-title">{sceneTranslations['ageRestriction']}</div>
        ) : (
          <S.SceneTitle className="scene-title">{sceneTranslations['title']}</S.SceneTitle>
        )}
        <S.SceneImageContainer className="scene-image-container">
        {sceneTranslations['ageRestricted'] && userData.age < 18 ? (
            <div className="blank-image"></div>
        ) : (
            <Image
            src={
                sceneTranslations['img'] === 'alley.png'
                ? alley
                : sceneTranslations['img'] === 'outskirts.png'
                ? outskirts
                : city
            }
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Scene"
            className="scene-image"
            />
        )}
        </S.SceneImageContainer>

        <S.SceneDetails className="scene-details">
          {sceneTranslations['ageRestricted'] && userData.age < 18 ? (
            <div>{sceneTranslations['ageRestriction']}</div>
          ) : (
            <>
              <S.ScenePlot className="scene-plot">{sceneTranslations['plot']}</S.ScenePlot>
              <S.SceneDuration className="scene-duration">{sceneTranslations['durationText']}: {sceneTranslations['duration']}</S.SceneDuration>
            </>
          )}
        </S.SceneDetails>
        <S.SceneButtons className="scene-buttons">
          {sceneTranslations['hasPrev'] && <S.SceneButton onClick={() => router.push(`/${router.query.country}/scene/${parseInt(router.query.sceneid as string) - 1}`)} className="scene-button">{sceneTranslations['prev']}</S.SceneButton>}
          <S.SceneButton onClick={() => router.push(`/${router.query.country}`)} className="button">{sceneTranslations['home']}</S.SceneButton>
          {sceneTranslations['hasNext'] && <S.SceneButton onClick={() => router.push(`/${router.query.country}/scene/${parseInt(router.query.sceneid as string) + 1}`)} className="scene-button">{sceneTranslations['next']}</S.SceneButton>}
        </S.SceneButtons>
        <div style={{ height: '50px', width: '100%' }}></div>
      </S.SceneContainer>
    </S.Scene>
  );
};

const loadTranslations = (country: string) => {
  switch (country) {
    case 'nigeria':
      return require('../../utils/translations/en.json');
    case 'france':
      return require('../../utils/translations/fr.json');
    case 'spain':
      return require('../../utils/translations/es.json');
    case'singapore':
      return require('../../utils/translations/mn.json');
    case 'india':
      return require('../../utils/translations/hi.json');
    // Add cases for other languages as needed
    default:
      return require('../../utils/translations/en.json');
  }
};

export default Scenes;
