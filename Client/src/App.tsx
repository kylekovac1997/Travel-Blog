import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/home/MainPage";
import { Header } from "./componets/Header";
import { NavigationBar } from "./componets/NavigationBar";
import CountryDetailPage from "./pages/CountryDetailPage";

import AdminHomePage from "./pages/admin/AdminHomePage";
import { SecondNavigationBar } from "./componets/SecondNavigationBar";
import HomePhotoSection from "./pages/home/HomePhotoSection";
function App() {
  const location = useLocation();
  return (
    <>
      <NavigationBar />
      <Header />
      {location.pathname != "/" && <SecondNavigationBar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="AdminHomePage" element={<AdminHomePage />} />
        <Route path="/Itenary/:countryName" element={<CountryDetailPage />} />
      </Routes>{" "}
      {location.pathname === "/" && (
        <div>
          <SecondNavigationBar />
          <HomePhotoSection />
        </div>
      )}
    </>
  );
}

export default App;
