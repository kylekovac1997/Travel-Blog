import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./componets/Header";
import { NavigationBar } from "./componets/NavigationBar";
import CountryDetailPage from "./pages/CountryDetailPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import { SecondNavigationBar } from "./componets/SecondNavigationBar";
import HomePhotoSection from "./pages/home/HomePhotoSection";
import Footer from "./componets/Footer";
import About from "./pages/About";
import HomePage from "./pages/home/HomePage";
import DestinationsPage from "./pages/destinations/DestinationsPage";
import CityDestinationPage from "./pages/destinations/CityDestinationPage";
function App() {
  const location = useLocation();
  return (
    <>
      <NavigationBar />
      <Header />
      {location.pathname != "/" && <SecondNavigationBar />}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="Destinations" element={<DestinationsPage/>}/>
        <Route path="About" element={<About />} />
        <Route path="AdminHomePage" element={<AdminHomePage />} />
        <Route path=":countryName" element={<CountryDetailPage />}/>
        <Route path=":countryName/:cityName" element={<CityDestinationPage/>}/>
      </Routes>{" "}
      {location.pathname === "/" && (
        <div>
          <SecondNavigationBar />
          <HomePhotoSection />
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
