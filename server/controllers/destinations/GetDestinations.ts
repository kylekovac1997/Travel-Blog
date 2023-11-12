import { Response, Request } from 'express';

export const getDestinations = async (request: Request, response: Response) => {
    const countryName = request.query.country
  try {
    const result = [
      { country: 'Japan', city: 'Tokyo', description: 'test 1234 test test test test' },
      { country: 'Mexico', city: 'Tokyo', description: 'test 1234 test test test test' },
      { country: 'Brazil', city: 'asd', description: 'test 1234 test test test test' }
    ];
const founCountry =  result.find(country => country.country === countryName);

    if(founCountry){
         console.log(founCountry);
    return response.status(200).send(founCountry);
    }else{
        return response.status(404).send({message: 'not found'})
    }
   
  } catch (error) {
    console.log(error);
    return response.status(500).send({ error: 'Internal Server Error' });
  }
};
