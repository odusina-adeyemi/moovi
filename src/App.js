
import React from 'react';
import Home from './component/Pages/Home'
import './App.css';
import './index.css'
import MovieDetailsComponent from './component/MovieDetailsComponent';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import MovieDetails from './component/Pages/MovieDetail/MovieDetails';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id'  element={<MovieDetails/>}/>
         
        {/* <MovieDetailsComponent/> */}

     </Routes>
     
      
    
     
    </div>
  );
}

export default App;

