import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./Header";
import { About } from "../../features/About";
import { Home } from "../../features/Home";
import { Services } from "../../features/Services";
import { Pricing } from "../../features/Pricing";
import { Reviews } from "../../features/Reviews";
import { Contact } from "../../features/Contact";
import { Footer } from "./Footer";
import { Background } from "./Background";
import ScrollToTop from "./ScrollToTop";

const App = () => (
  <Router>
    <ScrollToTop />
    <Background />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/o-mnie" element={<About />} />
      <Route path="/uslugi" element={<Services />} />
      <Route path="/cennik" element={<Pricing />} />
      <Route path="/opinie" element={<Reviews />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
