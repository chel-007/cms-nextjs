import styled from "styled-components";

import { pxToRem } from "src/styles/px-to-rem";
import Box from "../Box/Box";

export const Header = styled.header`
  background-color: rgba(0, 0, 0, 0.7); /* Black with 0.7 opacity */
  color: white;
  padding: 20px 15px; /* Adjust padding as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed; /* Fixed position to stick to the top */
  top: 0;
  z-index: 1000; /* Ensure it's above other content */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center; /* Center align items vertically */
  justify-content: flex-end;
  padding: 0px 30px;
  margin: 0px 5%;
  flex-grow: 1; /* Allow nav to grow and fill the available space */
`;

export const Link = styled.a`
  text-decoration: none;
  margin-right: 50px; /* Adjust margin between links */
  text-align: center;

  h1 {
    font-size: 1.6rem; /* Adjust font size as needed */
    color: wheat;
    margin-top: 0; /* Reset margin */
    margin-bottom: 0;
  }
`;

export const RouteLink = styled(Link)`
  margin: 0px 25px;
`;

export const Button = styled.button`
  background-color: #FFA500; /* Orange color */
  color: white;
  border: none;
  padding: 10px 20px; /* Adjust padding as needed */
  border-radius: 3px;
  font-size: 1.7rem; /* Adjust font size as needed */
  cursor: pointer;
  margin-left: auto; /* Align button to the far right */

  &:hover {
    background-color: #FF4500; /* Darker orange on hover */
  }
`;

// Add media query for responsive design
export const ResponsiveHeader = styled(Header)`
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    margin-bottom: 10px;
  }
`;