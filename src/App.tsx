import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import ProductDetailsPage from "./components/ProductDetailsPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import TryDemo from "./components/TryDemo";

function App() {

  return (
    <>

      <div className="main-container">

        <Header />

        <div style={{ flex: 1, height: "100%", }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/product" element={<ProductDetailsPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/trydemo" element={<TryDemo />} />
          </Routes>
        </div>

      </div>

    </>
  )
}

export default App;
