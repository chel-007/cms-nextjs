import styled from "styled-components";

import BG from "../../../public/images/spacebg3.jpg";

export const AppCont = styled.div`
font-family: 'Arial', sans-serif;
background: url(${BG.src}) center/cover no-repeat;
height: 100vh;
width: 100%; /* Ensure container spans full width */
overflow: hidden;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white; /* Text color */
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)); /* Dark overlay */
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 16rem;
  margin-bottom: 7px;
  color: #FFA500; /* Orange color */
  z-index: 2;
`;

export const Subtitle = styled.div`
  font-size: 4rem;
  margin-bottom: 120px;
  text-align: center;
  color: #FFD700; /* Gold color */
  z-index: 2;
`;

export const Button = styled.button`
  background-color: #FFA500; /* Orange color */
  color: white;
  border: none;
  padding: 10px 40px; /* Larger padding for a prominent login button */
  margin: 5px;
  border-radius: 3px;
  font-size: 1.3rem;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #FF4500; /* Darker orange on hover */
  }
`;

export const Logo = styled.img`
  width: 150px; /* Adjust the size of your logo */
  margin-bottom: 20px;
  z-index: 2;
`;

// Add media queries for responsiveness
export const ResponsiveStyles = styled.div`
  @media (max-width: 768px) {
    ${Title} {
      font-size: 2.5rem;
    }

    ${Subtitle} {
      font-size: 1.2rem;
    }

    ${Button} {
      padding: 12px 25px;
      font-size: 1rem;
    }

    ${Logo} {
      width: 120px;
    }
  }
`;
