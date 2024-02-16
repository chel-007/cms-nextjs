import styled from 'styled-components';

import BG from "../../../public/images/spacebg3.jpg";


export const ProductCont = styled.div`
position: relative;
background: url(${BG.src}) center/cover no-repeat;
width: 100%;

`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black overlay */
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); // Adjust the min and max width as needed
  grid-gap: 20px;
  margin-top: 260px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0 85px;

`;

export const Product = styled.div`
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Adjust the overlay color and opacity as needed
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const ProductName = styled.h2`
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
  background-color: rgba(0, 0, 0, 0.8); // Adjust the text color and opacity as needed
`;

export const ProductPrice = styled.p`
  color: white;
  font-size: 14px;
  margin: 0;
  background-color: rgba(170, 50, 0, 0.5);
  margin-bottom: 10px;
`;

export const AddProductButton = styled.button`
  bottom: 10px; /* Adjust as needed */
  left: 0%;
  transform: translateX(-0%);
  width: 100%;
  padding: 5px 15px; 
  background-color: darkorange;
  color: white;
  border: none;
  border-radius: 15px; /* Add border radius for rounded corners */
  cursor: pointer;

  &:hover {
    background-color: #ff4f00; /* Darker orange color on hover */
  }
`;



export const Button = styled.a`
  position: absolute;
  
  left: 80%;
  top: 6%;
  transform: translateX(-30%);
  padding: 10px 50px;
  background-color: orange; /* Orange button color */
  color: white;
  font-size: 13px;
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