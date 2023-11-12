import axios from 'axios';
import { ReactNode } from 'react';

const getCountryDetails = async (countryName: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/GetDestinations?country=${countryName}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('No info to show');
    }
  } catch (error) {
    throw error;
  }
};

export default getCountryDetails