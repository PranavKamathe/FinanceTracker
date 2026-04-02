import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

function App(){

  return(

    <div>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/dashboard" element={<Dashboard/>} />

        <Route path="/contact" element={<Contact/>} />

        <Route path="/profile" element={<Profile/>} />

      </Routes>

      <Footer/>

    </div>

  )

}

export default App