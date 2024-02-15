import styled from 'styled-components';

import BG from "public/images/spacebg3.jpg";

export const Nigeria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${BG.src}) center/cover no-repeat;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  z-index: 0;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-gap: 15px;
  margin-top: 120px;
  z-index: 1;
  text-align: center;

`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 3px solid black;
  border-radius: 5px;
  z-index: 1;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.3);
  }
`;

export const ImageCaption = styled.span`
  position: absolute;
  bottom: 10px;
  right: 10px;
  visibility: hidden;
  color: white;
  font-size: 23px;
  font-style: italic;

  ${ImageContainer}:hover & {
    visibility: visible;
  }
`;

export const MovieInfo = styled.div`
  background-color: #ff5733;
  color: white;
  padding: 20px;
  width: 96%;
  border-radius: 10px;
  margin-top: 50px;
  text-align: center;
  z-index: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 27px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ff5733, #ffc300);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MovieDetail = styled.p`
  font-size: 17x;
  margin-bottom: 5px;
  font-family: 'Poppins', sans-serif;
  color: black;
  font-weight: 600;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
`;

export const Button = styled.a`
  background-color: #ff1100;
  color: white;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0e0c0d;
  }
`;
