import React, { useState } from "react";
import UploadPhoto from "../../componets/admin/UploadPhotos";
function AdminHomePage() {
const [countryName, setCountryName] = useState<string>("")


  return (
    <div>
      AdminHomePage 
       <p>section to create blogs</p>
       <br/>
       <p>section to create new destinations</p>
       <br/>
       <p>update travel essentials</p>

       <UploadPhoto countryName={"Japan"} cityName={"Tokyo"}></UploadPhoto>

    </div>
  );
}

export default AdminHomePage;
