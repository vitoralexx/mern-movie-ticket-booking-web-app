//
import React from "react";

//
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Footer from "./components/layout/Footer";

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      {!isAdminRoute && <Navbar />}
      <Routes>

        {/* favorites */}
        <Route path={"/favorite"} element={<Favorite />} />

        {/* home */}
        <Route path={"/"} element={<Home />} />

        {/* movies */}
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movies/:id"} element={<MoviesDetails />} />
        <Route path={"/movies/:id/:date"} element={<SeatLayout />} />

        {/* my-bookings */}
        <Route path={"/my-bookings"} element={<MyBookings />} />

        {/**/}

      </Routes>
      {!isAdminRoute && <Footer />}
    </BrowserRouter>
  );
};

export default App;
