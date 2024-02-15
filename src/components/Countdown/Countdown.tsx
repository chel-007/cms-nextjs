import { FC, useEffect, useState } from 'react';
import { useAuthentication } from 'src/lib/hooks/use-authentication';
import { useRouter } from 'next/router';

import * as S from "./index.styled";

interface CountdownProps {}

const Countdowns: FC<CountdownProps> = () => {
  const router = useRouter();
  const [timezone, setTimezone] = useState<string | null>(null);
  const [currentTimezone, setCurrentTimezone] = useState<string | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const { user } = useAuthentication();

  const country = user?.country;

  const timezones: Record<string, string> = {
    nigeria: 'Africa/Lagos',
    spain: 'Europe/Madrid',
    france: 'Europe/Paris',
    singapore: 'Asia/Singapore',
    india: 'Asia/Kolkata',
  };

  const releaseDate = new Date('2024-02-30');

  const calculateTimeDifference = (timezone1: string, timezone2: string): number => {
    const currentTime = new Date();
    const offset1 = currentTime.getTimezoneOffset() * 60000;
    const offset2 =
      new Date(currentTime.toLocaleString('en-US', { timeZone: timezone2 })).getTimezoneOffset() * 60000;
    const difference = offset2 - offset1;
    return difference;
  };

  const calculateRemainingTime = (releaseDate: Date, timezone: string | null): number => {
    const currentTime = new Date();
    const timeDifference = calculateTimeDifference('GMT', timezone || '');
    const remainingTime = releaseDate.getTime() - (currentTime.getTime() + timeDifference);
    return remainingTime;
  };

  useEffect(() => {
    if (country && timezones[country.toLowerCase()]) {
      setTimezone(timezones[country.toLowerCase()]);
      setCurrentTimezone(country.toUpperCase());
    } else {
      setTimezone('GMT');
      setCurrentTimezone('GMT');
    }
  }, [country]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timezone) {
        setRemainingTime(calculateRemainingTime(releaseDate, timezone));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [releaseDate, timezone]);

  const formatTime = (time: number): string => {
    if (time < 10) {
      return `0${time}`;
    }
    return String(time);
  };

  return (
    <S.CountdownContainer className="countdown-container">
      <S.Overlay className="overlay" ></S.Overlay>
       <S.CountdownTimer className="countdown-timer">
        <S.CountdownTimerHeading>Timezone: {currentTimezone}</S.CountdownTimerHeading>
        <S.RoundedBorder className="rounded-border">
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">{formatTime(Math.floor((remainingTime || 0) / (1000 * 60 * 60 * 24)))}</S.CountdownValue>
              <S.CountdownValue className="countdown-label">Days</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">
                {formatTime(Math.floor(((remainingTime || 0) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))}
              </S.CountdownValue>
              <S.CountdownValue className="countdown-label">Hours</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">{formatTime(Math.floor(((remainingTime || 0) % (1000 * 60 * 60)) / (1000 * 60)))}</S.CountdownValue>
              <S.CountdownValue className="countdown-label">Minutes</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
          <S.CountdownItem className="countdown-item">
            <S.CountdownUnit className="countdown-unit">
              <S.CountdownValue className="countdown-value">{formatTime(Math.floor(((remainingTime || 0) % (1000 * 60)) / 1000))}</S.CountdownValue>
              <S.CountdownValue className="countdown-label">Seconds</S.CountdownValue>
            </S.CountdownUnit>
          </S.CountdownItem>
        </S.RoundedBorder>
      </S.CountdownTimer>
      <S.CountdownParagraph>
        The release for <b>Call Me Super: Halo walk in the Alleyway</b> would be launched on{' '}
        <a href="https://youtube" style={{ textDecoration: 'none' }}>
          Youtube
        </a>{' '}
        in the above timer countdown
      </S.CountdownParagraph>
      <S.HomeButton className="home-button" onClick={() => router.push(`/${user?.country}`)}>
        &larr; Home
      </S.HomeButton>
    </S.CountdownContainer>
  );
};

export default Countdowns;
