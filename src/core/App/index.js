import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import ScrollToTop from "./ScrollToTop";
import Home from "../../features/Home";
import Pricing from "../../features/Pricing";
import Reviews from "../../features/Reviews";
import Contact from "../../features/Contact";
import About from "../../features/About";
import WashingMachineService from "../../features/Services/WashingMachineService";
import DishwasherService from "../../features/Services/DishwasherService";
import CoffeeMachineService from "../../features/Services/CoffeeMachineService";
import TelevisionService from "../../features/Services/TelevisionService";
import { HelmetProvider } from 'react-helmet-async';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Background />
    <Header />
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-mnie" element={<About />} />
        <Route path="/naprawa-pralek" element={<WashingMachineService />} />
        <Route path="/naprawa-zmywarek" element={<DishwasherService />} />
        <Route path="/naprawa-ekspresow" element={<CoffeeMachineService />} />
        <Route path="/naprawa-telewizorow" element={<TelevisionService />} />
        <Route path="/cennik" element={<Pricing />} />
        <Route path="/opinie" element={<Reviews />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HelmetProvider>
    <Footer />
  </BrowserRouter>
);

export default App;
