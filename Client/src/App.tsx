import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import { Header } from "./componets/Header";
import { NavigationBar } from "./componets/NavigationBar";
import CountryDetailPage from "./pages/CountryDetailPage";

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Itenary/:countryName" element={<CountryDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
