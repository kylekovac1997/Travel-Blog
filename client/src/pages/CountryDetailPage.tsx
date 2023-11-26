// CountryDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetCountrysVistited from "../componets/apiCall/GetCountrysVistited";
import { Button } from "@chakra-ui/react";
import NavigateCountryCityBtn from "../componets/button/NavigateCountryCityBtn";

type CountryDetailsType = {
  country: string,
   city: string, 
}


const CountryDetailPage: React.FC = () => {
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState<CountryDetailsType[]>([]);
  const [fecthData, setFetchData] = useState<string>('');

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setFetchData("loading")
      try {
        const countryInformation = await GetCountrysVistited(countryName as string);
        setCountryDetails(countryInformation);
        setFetchData("successful")
      } catch (error) {
        setFetchData("error")
        console.log(error);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

    return (
      <>
          {fecthData === "Loading" && <React.Fragment> Loading...</React.Fragment>}
      {fecthData === "error" && <React.Fragment> Error loading data</React.Fragment>}
    {fecthData === "successful" && countryDetails.map((countryInfo, index)=>(
      <div key={index}>  
        <p>{countryInfo.country}</p>
        <NavigateCountryCityBtn countryName={countryInfo.country} cityName={countryInfo.city} children={countryInfo.city}/>
      </div>
    ))}


    </>
    );
};

export default CountryDetailPage;
