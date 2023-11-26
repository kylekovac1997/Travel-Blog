import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"
import { GetPhotosFromFirebase } from "../../componets/apiCall/GetPhotots";

function CityDestinationPage() {
    const { countryName, cityName } = useParams();
    const [countryImages, setCountryImages] = useState<string[]>([]);
  useEffect(()=>{
    const fetchData =  async () => {
      try{
        const imageData =  await GetPhotosFromFirebase(countryName as string, cityName as string);
        setCountryImages(imageData || []);
        console.log(imageData)
      }catch(error){
        console.log(error)
      }
    
    }; 
    fetchData()
  },[])

    const mainImage = countryImages[0]

    return (
      <div>
        <p>Country: {countryName}</p>
        <p>City: {cityName}</p>
       
          <div style={{width: 300}}><img src={mainImage} alt={mainImage} /></div>
       
      </div>
    );
  }
  
export default CityDestinationPage
