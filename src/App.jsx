import { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductsCategories from "./components/ProductsCategories";
import BestSellers from "./components/BestSellers";
import New from "./components/New";
import SpecialOffers from "./components/SpecialOffers";
import SkincareAnanlsis from "./components/SkincareAnanlsis";

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <ProductsCategories/>
      <BestSellers/>
      <New/>
      <SpecialOffers/>
      <SkincareAnanlsis/>
    </>
  );
}

export default App;
