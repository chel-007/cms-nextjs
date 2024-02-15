import styled from 'styled-components';

import BG from "../../../public/images/spacebg3.jpg";

export const UserProfileCont = styled.div`
  position: relative;
  background: url(${BG.src}) center/cover no-repeat;
  height: 100vh;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
`;

export const ProfileContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;

export const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray; /* Example background color */
  border-radius: 50%;
  margin-bottom: 10px;
  margin-top: 35px;
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const LeftDetails = styled.div`
  flex: 1;
  padding-right: 30px;
`;

export const RightDetails = styled.div`
  flex: 1;
  padding-left: 30px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: darkorange;
  font-size: 16px;
  font-style: italic;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 21px;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 15px;
  font-size: 17px;
  border: 2px black solid;
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
