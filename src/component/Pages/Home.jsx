import React from "react";
import MovieDataComponent from "../MovieDataComponent/MovieDataComponent";
import Navbar from "../Navbar";
import Genrelist from "../Genrelist";
import GenresMov from "../GenresMov/GenresMov";
import MovieDetailsComponent from "../MovieDetailsComponent";
import Header from "../Header/Header";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <GenresMov/>   
      <Genrelist/>
   
      <MovieDataComponent />
      <MovieDetailsComponent/>
      
      
    </div>
  );
};

export default Home;


// how do I display home page on the browser?
