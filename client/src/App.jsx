import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Profile, SignIn, SignUp } from "./pages/index";
import { Header } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
