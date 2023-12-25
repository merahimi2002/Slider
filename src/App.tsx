import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { ContactUs } from "./Pages/ContactUs";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Fragment>
  );
}

export default App;
