import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import Hero from "./Hero";
import Jobs from "./Jobs";

const Home = () => {
  
  return (
    <>
      
        <Hero></Hero>
        <Category></Category>
        <Jobs></Jobs>
    </>
  );
};

export default Home;
