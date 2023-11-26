import { useState, ChangeEvent, FormEvent, ReactNode } from "react";
import { storage } from '../admin/Firebase';
import { ref, uploadBytes } from "firebase/storage";

function UploadPhotos({countryName, cityName }:{countryName: ReactNode, cityName: ReactNode}) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const storageRef = ref(storage, `${countryName}/${cityName}/${file.name}`);
      
      try {
        await uploadBytes(storageRef, file);
        setImgUrl("Upload successful!"); // or any other message indicating success
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='form'>
        <input type='file' onChange={handleFileChange} />
        <button type='submit'>Upload</button>
      </form>
      {imgUrl && <p>{imgUrl}</p>}
    </div>
  );
}

export default UploadPhotos;
