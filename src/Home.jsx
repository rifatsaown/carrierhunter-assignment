import React from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import Hero from "./Hero";
import Jobs from "./Jobs";

export const LevelContext = React.createContext([]);

const Home = () => {
  const data = useLoaderData();
  
  return (
    <>
      <LevelContext.Provider value={data}>
        <Hero></Hero>
        <Category></Category>
        <Jobs></Jobs>
      </LevelContext.Provider>
    </>
  );
};

export default Home;
