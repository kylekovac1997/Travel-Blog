import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";

interface VisitedCountriesData {
  visitedCountries: string[];
}

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Import the JSON file with coordinates
import countryCoordinates from "./country-coordinates.json";
import visitedCountriesData from "./visited-countries.json";

function MainPage() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [visitedCountries, setVisitedCountries] = useState<string[]>([]);

  useEffect(() => {
    const data: VisitedCountriesData = visitedCountriesData;
    setVisitedCountries(data.visitedCountries);
  }, []);

  const navigate = useNavigate();

  const handleClick = (countryName: string) => {
    navigate(`/Itenary/${countryName}`);
  };

  return (
    <div>
      MainPage
      <ComposableMap projectionConfig={{ scale: 147 }}>
        <Sphere stroke="#aaa6a6" strokeWidth={2} id={""} fill={"lightblue"} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const isVisited = visitedCountries.includes(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleClick(countryName)}
                  stroke="#FFF"
                  style={{
                    default: {
                      fill: isVisited ? "#22ee3d" : "#9a9a9e",
                      outline: "none",
                    },
                    hover: {
                      fill: "#3341ff",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#22ee3d",
                      outline: "none",
                    },
                  }}
                  onMouseEnter={() => setHoveredCountry(countryName)}
                  onMouseLeave={() => setHoveredCountry(null)}
                />
              );
            })
          }
        </Geographies>
        {countryCoordinates.ref_country_codes.map((country) => {
          const { alpha2, longitude, latitude, country: countryName } = country;
          return (
            hoveredCountry === countryName && (
              <Marker key={alpha2} coordinates={[longitude, latitude]}>
                <circle r={4} fill="#FF5722" />
                <text textAnchor="middle" y={-10} style={{ fill: "#fd0101" }}>
                  {countryName}
                </text>
              </Marker>
            )
          );
        })}
      </ComposableMap>
    </div>
  );
}

export default MainPage;
