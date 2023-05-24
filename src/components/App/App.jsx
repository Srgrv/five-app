import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppRoutes } from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/Sidebar";
import { getCategories } from "../../store/categories/categoriesSlice";
import { getProducts } from "../../store/products/productsSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <SideBar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
