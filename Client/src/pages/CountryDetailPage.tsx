// CountryDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";

const CountryDetailPage: React.FC = () => {
  const { countryName } = useParams();

  return (
    <div>
      <h2>{countryName}</h2>
    </div>
  );
};

export default CountryDetailPage;
