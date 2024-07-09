import React from "react";
import ServicesCard from "../pages/ServicesCard";
import Header from "../components/Header";
import Clients from "../pages/Clients";
import Hiring from "../pages/Hiring";
import Join from "../pages/Join";

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesCard />
      <Clients />
      <Hiring />
      <Join />
    </div>
  );
};

export default Home;
