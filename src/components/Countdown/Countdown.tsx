import { FC, useEffect, useState } from 'react';
import { useAuthentication } from 'src/lib/hooks/use-authentication';
import { useRouter } from 'next/router';
import { DateTime } from 'luxon';

import * as S from "./index.styled";

interface CountdownProps {}

const Countdowns: FC<CountdownProps> = () => {
  const router = useRouter();
  const [timezone, setTimezone] = useState<string | null>(null);
  const [currentTimezone, setCurrentTimezone] = useState<string | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const { user } = useAuthentication();

  const country = user?.country;

  const appCountry = router.query.country;

  const timezones: Record<string, string> = {
    nigeria: 'Africa/Lagos',
    spain: 'Europe/Madrid',
    france: 'Europe/Paris',
    singapore: 'Asia/Singapore',
    india: 'Asia/Kolkata',
  };

  const releaseDate = DateTime.fromISO('2024-02-29T23:59:59', { zone: 'UTC' });

  const releaseDateDay = releaseDate.day;
  const releaseDateHour = releaseDate.hour;
  const releaseDateMinute = releaseDate.minute;
  const releaseDateSecond = releaseDate.second;

 
  useEffect(() => {
    if (user && user.country && timezones[user.country.toLowerCase()]) {
      const userTimezone = timezones[user.country.toLowerCase()];

      const localTime = DateTime.local().setZone(userTimezone, { keepLocalTime: false });

      const localTimeDay = localTime.day;
      const localTimeHour = localTime.hour;
      const localTimeMinute = localTime.minute;
      const localTimeSecond = localTime.second;


      console.log(releaseDateDay - localTimeDay);
      console.log(releaseDateHour - localTimeHour);
      console.log(releaseDateMinute - localTimeMinute);
      console.log(releaseDateSecond - localTimeSecond);

      // console.log(localTime.toString());
      // console.log(releaseDate.toString());
      //const timeDifference = (releaseDate).diff(localTime).as('milliseconds');

      const daysDiff = releaseDate.day - localTime.day;
      const hoursDiff = releaseDate.hour - localTime.hour;
      const minutesDiff = releaseDate.minute - localTime.minute;
      const secondsDiff = releaseDate.second - localTime.second;

      // Calculate total difference in milliseconds
      const totalDifference = ((daysDiff * 24 + hoursDiff) * 60 + minutesDiff) * 60 * 1000 + secondsDiff * 1000;
      setRemainingTime(totalDifference);

      //setRemainingTime(timeDifference);
    } else {
      // User country not supported or not logged in, calculate remaining time in UTC
      const currentTime = DateTime.now().setZone('UTC');

      const currentTimeDay = currentTime.day;
      const currentTimeHour = currentTime.hour;
      const currentTimeMinute = currentTime.minute;
      const currentTimeSecond = currentTime.second;

      const daysDiff = releaseDate.day - currentTimeDay;
      const hoursDiff = releaseDate.hour - currentTimeHour;
      const minutesDiff = releaseDate.minute - currentTimeMinute;
      const secondsDiff = releaseDate.second - currentTime.second;

      const totalDifference = ((daysDiff * 24 + hoursDiff) * 60 + minutesDiff) * 60 * 1000 + secondsDiff * 1000;
      setRemainingTime(totalDifference);
      // const timeDifference = releaseDate.diff(currentTime).as('milliseconds');
      // setRemainingTime(timeDifference);
    }
  
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime !== null) {
          return prevTime - 1000;
        }
        return null; 
      });
    }, 1000);
  
    return () => clearInterval(interval);
  }, [user]);
  
  // const calculateTimeDifference = (timezone1: string, timezone2: string): number => {
  //   const currentTime = new Date();
  //   const offset1 = currentTime.getTimezoneOffset() * 60000;
  //   const offset2 =
  //     new Date(currentTime.toLocaleString('en-US', { timeZone: timezone2 })).getTimezoneOffset() * 60000;
  //   const difference = offset2 - offset1;
  //   return difference;
  // };

  // const calculateRemainingTime = (releaseDate: Date, timezone: string | null): number => {
  //   const currentTime = new Date();
  //   const timeDifference = calculateTimeDifference('GMT', timezone || '');
  //   const remainingTime = releaseDate.getTime() - (currentTime.getTime() + timeDifference);
  //   return remainingTime;
  // };

  useEffect(() => {
    if (country && timezones[country.toLowerCase()]) {
      setTimezone(timezones[country.toLowerCase()]);
      setCurrentTimezone(country.toUpperCase());
    } else {
      setTimezone('GMT');
      setCurrentTimezone('GMT');
    }
  }, [country]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (timezone) {
  //       setRemainingTime(calculateRemainingTime(releaseDate, timezone));
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [releaseDate, timezone]);

  const formatTime = (time: number): string => {
    if (time < 10) {
      return `0${time}`;
    }
    return String(time);
  };

  let countdownTranslations = undefined;

  if (country){
     countdownTranslations = loadTranslations(country as string);
    console.log(country);
  }
  else {
    countdownTranslations = loadTranslations('nigeria');
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
    <S.CountdownContainer className="countdown-container">
      <S.Overlay className="overlay" ></S.Overlay>
       <S.CountdownTimer className="countdown-timer">
        <S.CountdownTimerHeading>{countdownTranslations.countdown.timezone}: {currentTimezone}</S.CountdownTimerHeading>
        <S.RoundedBorder className="rounded-border">
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">{formatTime(Math.floor((remainingTime || 0) / (1000 * 60 * 60 * 24)))}</S.CountdownValue>
              <S.CountdownValue className="countdown-label">{countdownTranslations.countdown.days}</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">
                {formatTime(Math.floor(((remainingTime || 0) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))}
              </S.CountdownValue>
              <S.CountdownValue className="countdown-label">{countdownTranslations.countdown.hours}</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">{formatTime(Math.floor(((remainingTime || 0) % (1000 * 60 * 60)) / (1000 * 60)))}</S.CountdownValue>
              <S.CountdownValue className="countdown-label">{countdownTranslations.countdown.minutes}</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">{formatTime(Math.floor(((remainingTime || 0) % (1000 * 60)) / 1000))}</S.CountdownValue>
              <S.CountdownValue className="countdown-label">{countdownTranslations.countdown.seconds}</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
        </S.RoundedBorder>
      </S.CountdownTimer>
      <S.CountdownParagraph>
      {countdownTranslations.countdown.release} <b>{countdownTranslations.countdown.chapter}</b> {countdownTranslations.countdown.launching}{' '}
        <a href="https://youtube" style={{ textDecoration: 'none' }}>
          Youtube
        </a>{' '}
        {countdownTranslations.countdown.time}
      </S.CountdownParagraph>
      <S.HomeButton className="home-button" onClick={() => router.push(`/${appCountry}`)}>
        &larr; {countdownTranslations.countdown.home}
      </S.HomeButton>
    </S.CountdownContainer>
  );
};

export default Countdowns;
