import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import SignUp from "./SignUp";
import Shopping from "./Shopping";
import MyRecipes from "./MyRecipes";
import SignIn from "./SignIn";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} /> 
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages