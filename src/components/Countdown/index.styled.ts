import styled from 'styled-components';

import BG from "../../../public/images/spacebg3.jpg";

export const CountdownContainer = styled.div`
  position: relative;
  background: url(${BG.src}) center/cover no-repeat;
  height: 100%;
  text-align: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.73);
`;

export const CountdownTimer = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const RoundedBorder = styled.div`
  background-color: rgba(255, 166, 0, 0.171);
  border-radius: 25px;
  padding: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
`;

export const CountdownItem = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const CountdownUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountdownValue = styled.span`
  font-size: 35px;
  color: orange;
`;

export const CountdownLabel = styled.span`
  font-size: 25px;
  color: #ff4500;
  font-family: 'Courier New', Courier, monospace;
`;

export const CountdownParagraph = styled.p`
  position: relative;
  margin-top: 50px;
  color: wheat;
  font-size: 18px;
  font-family: 'Courier New', Courier, monospace;
  z-index: 1;
`;

export const CountdownTimerHeading = styled.h2`
  font-size: 23px;
  color: wheat;
  z-index: 1;
  position: relative;
  margin-top: 120px;
  font-family: 'Courier New', Courier, monospace;
`;

export const HomeButton = styled.a`
  position: absolute;
  bottom: 20px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 40px;
  background-color: orange; /* Orange button color */
  color: white;
  font-size: 15px;
  cursor: pointer;
  border: none;
  border-radius: 35px;
  text-decoration: none;
  z-index: 1;

  &:hover {
    background-color: darkorange; /* Darker orange color on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 15px 40px;
    font-size: 18px;
  }
`;