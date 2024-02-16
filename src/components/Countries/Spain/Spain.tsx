import React from 'react';
import alley from '../../../../public/images/alley.jpg';
import grafitti from '../../../../public/images/grafitti.jpg';
import kiosk from '../../../../public/images/kiosk.jpg';
import topview from '../../../../public/images/topview.jpg';
import topviewagn from 'public/images/topviewagn.jpg';
import { useAuthentication } from "src/lib/hooks/use-authentication";
import Image from 'next/image';

import * as S from "../Nigeria/index.styled";


const SpainCont = () => {
    const { user } = useAuthentication();

    const country = user?.country;

    let translations = undefined;

    if (country) {
      translations = loadTranslations(country as string);
      console.log(translations);
  } else {
    translations = loadTranslations('nigeria');
  }

    function loadTranslations(country: string) {
      // Mapping between full country names and abbreviated filenames
      const countryMappings: { [key: string]: string } = {
        nigeria: 'en',
        spain: 'es',
        france: 'fr',
        singapore: 'mn',
        india: 'hi',
        // Add mappings for other countries as needed
      };
    
      const countryCode = country.toLowerCase();
      const fileName = countryMappings[countryCode] || 'en'; // Default to English if no mapping found
    
      try {
        return require(`src/utils/translations/${fileName}.json`);
      } catch (error) {
        console.error(`Translations file not found for ${fileName}`);
        return require(`src/utils/translations/en.json`);
      }
    }

    return (
      <S.Nigeria>
        <S.Overlay className="overlay"></S.Overlay>
        <S.ImageGrid className="image-grid">
        <S.ImageContainer>
          <Image src={grafitti} alt="Image 1" />
          <S.ImageCaption>{translations.country.scenes} 1</S.ImageCaption>
        </S.ImageContainer>
        <S.ImageContainer>
          <Image src={topview} alt="Image 2" />
          <S.ImageCaption>{translations.country.scenes} 2</S.ImageCaption>
        </S.ImageContainer>
        <S.ImageContainer>
          <Image src={alley} alt="Image 3" />
          <S.ImageCaption>{translations.country.scenes} 3</S.ImageCaption>
        </S.ImageContainer>
        <S.ImageContainer>
          <Image src={kiosk} alt="Image 4" />
          <S.ImageCaption>{translations.country.scenes} 4</S.ImageCaption>
        </S.ImageContainer>
        <S.ImageContainer>
          <Image src={topviewagn} alt="Image 5" />
          <S.ImageCaption>{translations.country.scenes} 5</S.ImageCaption>
        </S.ImageContainer>
        <S.ImageContainer>
          <Image src={topviewagn} alt="Image 6" />
          <S.ImageCaption>{translations.country.scenes} 6</S.ImageCaption>
        </S.ImageContainer>
        </S.ImageGrid>
        <S.MovieInfo>
        <S.MovieTitle>{translations.country.title}</S.MovieTitle>
        <S.MovieDetail>{translations.country.release}</S.MovieDetail>
        <S.MovieDetail>{translations.country.builtby}</S.MovieDetail>
        <S.MovieDetail>{translations.country.starring}</S.MovieDetail>
        <S.MovieDetail>{translations.country.launch}</S.MovieDetail>
        <S.ButtonContainer>
          <S.Button href={`/${user?.country?.toLowerCase()}/scene/1`}>{translations.country.read} 1</S.Button>
          <S.Button href={`/${user?.country?.toLowerCase()}/scene/2`}>{translations.country.read} 2</S.Button>
          <S.Button href={`/${user?.country?.toLowerCase()}/scene/3`}>{translations.country.read} 3</S.Button>
        </S.ButtonContainer>
      </S.MovieInfo>
        <div style={{height: '60px'}}></div>
      </S.Nigeria>
    );
  };
  
  export default SpainCont;