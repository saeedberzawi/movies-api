import React from "react";
import { Movies, SearchForm } from "../components";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
