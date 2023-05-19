import { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductsCategories from "./components/ProductsCategories";
import BestSellers from "./components/BestSellers";

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <ProductsCategories/>
      <BestSellers/>
    </>
  );
}

export default App;
