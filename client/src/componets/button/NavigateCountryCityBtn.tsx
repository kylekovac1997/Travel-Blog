import { Button } from '@chakra-ui/react';
import React, { Children, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigateCountryCityBtnProps {
  countryName: string;
  cityName: string;
  children: ReactNode;
}

const NavigateCountryCityBtn: React.FC<NavigateCountryCityBtnProps> = ({ countryName, cityName, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${countryName}/${cityName}`);
  };

  return (
    <Button onClick={handleClick}>{children}</Button>
  );
};

export default NavigateCountryCityBtn;
