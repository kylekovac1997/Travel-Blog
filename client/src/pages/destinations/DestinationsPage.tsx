import axios from 'axios'
import React, { useState, useEffect } from 'react'

interface DestinationsProps {
    Country: string, City: string, Description: string;
}

function DestinationsPage() {
    const [destinations, setDestinations] = useState<DestinationsProps[]>([])

    const [fetchStatus, setFetchStatus] = useState<string>('')

    useEffect( () =>{
        setFetchStatus("loading")
        const countryName = "Brazil"; 
        const fetchData = async () => {
            try{
           const response = await axios.get(`http://localhost:3000/api/GetDestinations?country=${countryName}`);
        if(response.status === 200){
            const incommingData = Array(response.data)
            setDestinations(incommingData)
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
        <br/>
        {fetchStatus === "loading" && <React.Fragment>
            <p>Loading...</p>
            </React.Fragment>}
            {fetchStatus === "error" && <React.Fragment>
            <p>error</p>
            </React.Fragment>}

        {fetchStatus === "success"  && destinations.map(( destination, index) => (
            <React.Fragment>
            <p key={index}>{destination.Country}</p>
            
            <p key={index}>{destination.City}</p>
         
            <p key={index}>{destination.Description}</p>

</React.Fragment>
        ))}
        {/* {fetchStatus === "success" && <pre>{JSON.stringify(destinations, null,2)}</pre>} */}

    </div></>
  )
}

export default DestinationsPage