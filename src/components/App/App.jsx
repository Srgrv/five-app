import React from "react";

import { AppRoutes } from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/Sidebar";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <SideBar />
      </div>
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
