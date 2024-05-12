import React from "react";
import MovieDataComponent from "../MovieDataComponent";
import Navbar from "../Navbar";
import Genrelist from "../Genrelist";
import GenresMov from "../GenresMov";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <GenresMov/>   
      <Genrelist/>
      sidebar
      <MovieDataComponent />
      
      
    </div>
  );
};

export default Home;


// how do I display home page on the browser?
