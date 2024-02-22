import { useState, useEffect } from 'react';
import { FC } from 'react';
import Image from 'next/image';
import { useAuthentication } from 'src/lib/hooks/use-authentication';
import { useRouter } from 'next/router';

import * as S from "./index.styled";

import perfecttshirt from '../../../public/images/perfecttshirt.png';
import perfecthood from '../../../public/images/perfecthood.png';
import hoodie1 from '../../../public/images/hoodie1.png';
import hoodie2 from '../../../public/images/hoodie2.png';
import jacket1 from '../../../public/images/jacket1.png';
import blouselove from '../../../public/images/blouselove.png';
import bp3d from '../../../public/images/bp3d.png';
import bpfly from '../../../public/images/bpfly.png';
import blacksneakers from '../../../public/images/blacksneakers.png';
import wbpipe from '../../../public/images/wbpipe.png';
import wbrubberhands from '../../../public/images/wbrubberhands.png';
import multisneakers from '../../../public/images/multisneakers.png';
import mp from '../../../public/images/mp.png';
import rbsneakers from '../../../public/images/redbluesneakers.png';
import blockyshirt from '../../../public/images/tshirtblocky.png';
import jeansrolled from '../../../public/images/jeansrolled.png';
// Sample product data (replace with your actual product data)
const products = [
    { id: 1, name: 'Perfect T-shirt', priceUSD: 50, currency: 'USD', gender: 'unisex', ageGroup: 'youth', image: perfecttshirt },
    { id: 2, name: 'Perfect Hoodie', priceUSD: 60, currency: 'USD', gender: 'unisex', ageGroup: 'youth', image: perfecthood },
    { id: 3, name: 'Velvet Jacket', priceUSD: 50, currency: 'USD', gender: 'unisex', ageGroup: 'adult', image: jacket1 },
    { id: 4, name: 'Hoodless Hoodie', priceUSD: 30, currency: 'USD', gender: 'unisex', ageGroup: 'adult', image: hoodie1 },
    { id: 5, name: 'Rubber Water Bottle', priceUSD: 30, currency: 'USD', gender: 'female', ageGroup: 'child', image: wbrubberhands },
    { id: 6, name: 'Black Sneakers', priceUSD: 25, currency: 'USD', gender: 'female', ageGroup: 'adult', image: blacksneakers },
    { id: 7, name: '3d Backpack', priceUSD: 35, currency: 'USD', gender: 'female', ageGroup: 'youth', image: bp3d },
    { id: 8, name: 'CMS OST Music Player', priceUSD: 70, currency: 'USD', gender: 'unisex', ageGroup: 'youth', image: mp },
    { id: 9, name: 'MultiColor Sneakers', priceUSD: 25, currency: 'USD', gender: 'unisex', ageGroup: 'youth', image: multisneakers },
    { id: 10, name: 'Pipe Water Bottle', priceUSD: 25, currency: 'USD', gender: 'unisex', ageGroup: 'child', image: wbpipe },
    { id: 11, name: 'Valentines Blouse', priceUSD: 30, currency: 'USD', gender: 'female', ageGroup: 'youth', image: blouselove },
    { id: 12, name: 'Superhero Hoodie', priceUSD: 40, currency: 'USD', gender: 'male', ageGroup: 'adult', image: hoodie2 },
    { id: 13, name: 'Backpack Fly', priceUSD: 45, currency: 'USD', gender: 'male', ageGroup: 'adult', image: bpfly },
    { id: 14, name: 'Red & Blue Sneakers', priceUSD: 60, currency: 'USD', gender: 'male', ageGroup: 'adult', image: rbsneakers },
    { id: 15, name: 'Blocky T-shirt', priceUSD: 35, currency: 'USD', gender: 'male', ageGroup: 'teen', image: blockyshirt }
  ];
  

const Merchs: FC = () => {

  const { user } = useAuthentication();
  const router = useRouter();
  const { country } = router.query;

  const fastCountry = user?.country;

  const appCountry = router.query.country;

  const getUserCurrency = (country: string) => {
    switch (country) {
      case 'nigeria':
        return 'NGN';
      case 'india':
        return 'INR';
      case 'spain':
      case 'france':
        return 'EUR';
      case 'singapore':
        return 'SGD';
      default:
        return 'USD';
    }
  };

  const [userCurrency, setUserCurrency] = useState(() => getUserCurrency(country as string));
  const [sortedProducts, setSortedProducts] = useState(products);
  const [personalizedShopping, setPersonalizedShopping] = useState(false);

  useEffect(() => {
    if (country && country !== user?.country) {
      setUserCurrency(getUserCurrency(country as string));
    }
  }, [country, user?.country]);

  useEffect(() => {
    if (personalizedShopping) {
      const sortedProducts = sortProducts();
      setSortedProducts(sortedProducts);
    } else {
      setSortedProducts(products);
    }
  }, [personalizedShopping, user]);

  // Function to convert price to user's currency
  const convertToUserCurrency = (priceUSD: number, userCurrency: string) => {
    const conversionRate = getConversionRate(userCurrency);
    return (priceUSD * conversionRate).toFixed(2);
  };

  const getConversionRate = (currency: string) => {
    const conversionRates: Record<string, number> = {
      'NGN': 1500,
      'INR': 83,
      'EUR': 0.92,
      'SGD': 1.34,
    };
    return conversionRates[currency] || 1;
  };

  interface User {
    birthdate: string; // Date of birth in string format (e.g., "1990-05-15")
  }
  
  type AgeGroup = 'child' | 'teen' | 'youth' |'adult' | 'senior';
  
  const getUserAgeGroup = (customuser: User): AgeGroup => {
    const birthYear = new Date(customuser.birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
  
    if (age <= 12) {
      return 'child';
    } else if (age <= 19) {
      return 'teen';
    } else if (age <= 28) {
      return 'youth';
    } else if (age <= 65) {
        return 'adult';
    }
      else {
      return 'senior';
    }
  };
  

  const sortProducts = () => {
    if (!user?.birthdate) {
      // If user birthdate is not available, return an empty array
      return [];
    }

    const customuser: User = { birthdate: user?.birthdate };
  
    const userAgeGroup = getUserAgeGroup(customuser); // Get user's age group
  
    // Filter products based on user's age group and gender
    const filteredProducts = products.filter((product) => {
      console.log(product.gender)
      console.log(user?.gender)
      return (product.gender === user?.gender || product.gender === 'unisex') && product.ageGroup === userAgeGroup;
    });
  
    // Return up to 5 filtered products
    return filteredProducts.slice(0, 6);
  };
  

  // const handlePersonalizedShopping = () => {
  //   const sortedProducts = sortProducts();
  //   setSortedProducts(sortedProducts);
  // };

  const handleShoppingModeToggle = () => {
    setPersonalizedShopping(!personalizedShopping);
  };

  interface MerchTranslations {
    merch: {
    cart: string;
    price: string;
    personalisedShopping: string;
    normalShopping: string;
    noProducts: string;
    home: string;
    }
  }
  
  let merchTranslations: MerchTranslations | undefined = undefined;

  if (fastCountry){
    merchTranslations = loadTranslations(fastCountry as string);
    console.log(merchTranslations?.merch.cart)
  }  else {
    merchTranslations = loadTranslations('nigeria');
  }

  console.log(fastCountry)

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
    <S.ProductCont>
    <S.Overlay></S.Overlay>
    <S.Button onClick={handleShoppingModeToggle}>
  {personalizedShopping ? 
    (merchTranslations?.merch.normalShopping ?? "Switch to Normal Shopping") : 
    (merchTranslations?.merch.personalisedShopping ?? "Use Personalised Shopping")
  }
</S.Button>
<S.ProductList className="product-list">
  {sortedProducts.length > 0 ? (
    sortedProducts.map((product) => (
      <S.Product key={product.id} className="product">
        <Image style={{ width: '100%', height: 'auto' }} src={product.image} alt={product.name} width={200} height={200} />
        {/* <S.ProductOverlay> */}
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductPrice>{merchTranslations?.merch?.price}: {convertToUserCurrency(product.priceUSD, userCurrency)} {userCurrency}</S.ProductPrice>
        {/* Display other product details */}
        {/* </S.ProductOverlay> */}
        <S.AddProductButton>{merchTranslations?.merch?.cart ?? "Add to Cart"}</S.AddProductButton>
      </S.Product>
    ))
  ) : (
    <p>{merchTranslations?.merch?.noProducts ?? "No Produts Available for Your Selection"}</p>
  )}
</S.ProductList>
<S.HomeButton className="home-button" onClick={() => router.push(`/${appCountry}`)}>
        &larr; {merchTranslations?.merch?.home}
      </S.HomeButton>
    </S.ProductCont>
  );
};

export default Merchs;
