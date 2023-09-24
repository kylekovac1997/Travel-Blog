import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import { Header } from "./componets/Header";
import { NavigationBar } from "./componets/NavigationBar";
import CountryDetailPage from "./pages/CountryDetailPage";
import UploadPhoto from "./componets/admin/UploadPhotos";

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <UploadPhoto />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Itenary/:countryName" element={<CountryDetailPage />} />
        <Route path="/upload" element={<UploadPhoto />} />
      </Routes>
    </>
  );
}

export default App;
