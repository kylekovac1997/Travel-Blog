import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { DestinationsContainer, DestinationsHeader } from '../../styled_pages/DestinationsStyle';
import { Button } from '@chakra-ui/react';
import NavigateCountryCityBtn from '../../componets/button/NavigateCountryCityBtn';

interface DestinationsProps {
    country: string, city: string;
}

function DestinationsPage() {
    const [destinations, setDestinations] = useState<DestinationsProps[]>([])
    const [fetchStatus, setFetchStatus] = useState<string>('')
    const countryName = "Japan"; 
    useEffect( () =>{
        setFetchStatus("loading")
        
        const fetchData = async () => {
            try{
           const response = await axios.get(`http://localhost:3000/api/GetDestinations?country=${countryName}`);
           if(response.status === 200){
            setDestinations(response.data)
            setFetchStatus("success")
        }  
        }catch(error){
            console.log(error)
            setFetchStatus("error")
        }
    }  
     fetchData() 
  
    },[])
      
  return (
    <>
    <div>DestinationsPage
    <DestinationsContainer>
        <br/>
        {fetchStatus === "loading" && <React.Fragment>
            <p>Loading...</p>
            </React.Fragment>}
            {fetchStatus === "error" && <React.Fragment>
            <p>error</p>
            </React.Fragment>}

        {fetchStatus === "success"  && destinations.map(( destination, index) => (
          
                <div key={index}>
                    <DestinationsHeader>
                        <p>{destination.country}</p>
                    </DestinationsHeader>
            
                   <NavigateCountryCityBtn countryName={destination.country} cityName={destination.city}>{destination.city}</NavigateCountryCityBtn>
                </div>
           
            
        ))}
</DestinationsContainer>
    </div></>
  )
}

export default DestinationsPage