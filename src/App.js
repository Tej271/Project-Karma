import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plans from "./pages/PlansAndPricing";
import Working from "./pages/Working";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "rsuite/dist/rsuite.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/how-it-works" element={<Working />} />
        <Route path="/plans-and-pricing" element={<Plans />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
