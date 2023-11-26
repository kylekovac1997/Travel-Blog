import { Response, Request } from 'express';
import { db } from '../../database/Firebase';
import { query, where, getDocs, collection, DocumentData } from 'firebase/firestore/lite';

export const getDestinations = async (request: Request, response: Response) => {
    const foundCountry = request.query.country;

    try {
        if (foundCountry) {
            // Construct a Firestore query based on the country name
            const q = query(collection(db, 'Travelled'), where('country', '==', foundCountry));

            // Execute the query
            const querySnapshot = await getDocs(q);

            // Process the results
            const destinations: DocumentData[] = [];
            querySnapshot.forEach((doc) => {
                // Access data for each document using doc.data()
                destinations.push(doc.data());
            });

            console.log(destinations);

            // Handle the array of destinations as needed
            return response.status(200).send(destinations);
        } else {
            return response.status(404).send({ message: 'Country not found' });
        }
    } catch (error) {
        console.error('Error getting destinations:', error);
        return response.status(500).send({ error: 'Internal Server Error' });
    }
};
