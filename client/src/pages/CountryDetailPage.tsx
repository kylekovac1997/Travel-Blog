// CountryDetailPage.tsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetCountrysVistited from "../componets/apiCall/GetCountrysVistited";
type CountryDetailsType = {
  country: string,
   city: string, 
   description: string;
}


const CountryDetailPage: React.FC = () => {
  const { countryName } = useParams();
const [countryDetails, setCountryDetails] = useState<CountryDetailsType | undefined>(undefined);
useEffect(() => {
  const fetchCountryDetails = async () => {
    try {
      const details = await GetCountrysVistited(countryName as string);
      setCountryDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  fetchCountryDetails();
}, [countryName]);

  return (
    <div>
      <h2>{countryName}</h2>
   {countryDetails ? (
    <div>
      <p>country: {countryDetails.country}</p>
      <br/>
      <p>city: {countryDetails.city}</p>
      <br/>
      <p>description: {countryDetails.description}</p>
    </div>
   ) : (<div> <p>Havent Travel There Yet</p></div>)} 
   </div>
  );
};

export default CountryDetailPage;
