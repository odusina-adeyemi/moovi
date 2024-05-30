// import React from "react";
// import MovieDetailsComponent from "../MovieDetailsComponent";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const movieId = id;

//   const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`;
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY",
//     },
//   };

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(url, options);
//         const data = await response.json();

//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   return (
//     <div>
//       {data.map((movie) => (
//         <div>
//           <div key={movie.id}> Movie Details</div>
//           <p>{movie.title}</p>
//         </div>
//       ))}

//       {/* <MovieDetailsComponent /> */}
//     </div>
//   );
// };

// export default MovieDetails;



import React, { useEffect, useState } from "react";
import MovieDetailsComponent from "../../MovieDetailsComponent";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY",
    },
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

return (
    <div className="movie-detailed">
      <div>
<IconButton component={Link} to="/" aria-label="back to home">
      <ArrowBackIcon />
    </IconButton>
      </div>

        <div className="movie-details-header">
            <h1 className="movie-details-title">Movie Details</h1>
        </div>
        <div className="movie-details-content">
            <div className="movie-details-info">
                <img
                    className="movie-details-image"
                    src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                />
                <p className="movie-details-info-item">
                    <span className="movie-details-info-label">Title:</span>{" "}
                    {movieDetails.title}
                </p>
                <p className="movie-details-info-item">
                    <span className="movie-details-info-label">Overview:</span>{" "}
                    {movieDetails.overview}
                </p>
                <p className="movie-details-info-item">
                    <span className="movie-details-info-label">Release Date:</span>{" "}
                    {movieDetails.release_date}
                </p>
                <p className="movie-details-info-item">
                    <span className="movie-details-info-label">Rating:</span>{" "}
                    {movieDetails.vote_average}
                </p>
            </div>
            {/* You can pass movieDetails to a component like MovieDetailsComponent */}
            {/* <MovieDetailsComponent details={movieDetails} /> */}
        </div>
    </div>
);
};

export default MovieDetails;
