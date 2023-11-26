// PhotoGallery.js
import { storage } from '../admin/Firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const GetPhotosFromFirebase = async (countryName: string, cityName: string) => {
      try {
        const listRef = ref(storage, `${countryName}/${cityName}`);
        const response = await listAll(listRef);

        const urls = await Promise.all(
          response.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );

        return urls;
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };





