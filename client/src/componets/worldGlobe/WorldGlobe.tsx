import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";
import countryCoordinates from "./Country-Coord.json";
import visitedCountriesData from "./visited-countries.json";
import { useNavigate } from "react-router-dom";
const geoUrl = countryCoordinates;

const WorldGlobe = ({backgroundImage}: {backgroundImage: string}) => {
  const [rotation, setRotation] = useState([0, 0, 0]);
  const navigate = useNavigate();
  const [visitedCountries, setVisitedCountries] = useState<string[]>([]);

  useEffect(() => {
    const data = visitedCountriesData;
    setVisitedCountries(data.visitedCountries);
    const interval = setInterval(() => {
      setRotation((prevRotation) => [
        prevRotation[0] + 0.1,
        prevRotation[1],
        prevRotation[2],
      ]);
    }, 0.5);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (countryName: string) => {
    navigate(`${countryName}`);
  };

  return (
    <>
      <div
        style={{
          background:
            `url(${backgroundImage})`,
          backgroundSize: "cover",
       
        }}
      >
        <ComposableMap
          projection="geoOrthographic"
          //@ts-ignore
          projectionConfig={{ rotate: rotation }}
          style={{ maxWidth: "650px", margin: "auto" }}
        >
          <ZoomableGroup center={[0, 0]} zoom={1 || 4}>
            <Sphere fill="#72a3a3" id={""} stroke={""} strokeWidth={0} />
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
                      stroke="#dabcb1"
                      style={{
                        default: {
                          fill: isVisited ? "#95b661" : "#868686",
                          outline: "none",
                        },
                        hover: {
                          fill: "#e9b8a5",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#22ee3d",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
};

export default WorldGlobe;
