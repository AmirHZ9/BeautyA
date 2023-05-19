import { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductsCategories from "./components/ProductsCategories";

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <ProductsCategories/>
    </>
  );
}

export default App;
