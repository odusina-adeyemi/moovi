

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Chip } from "@mui/material";

import { updateFilteredMovies, updateSelectedGenres } from "../../utils/actions";
import { FILTERED_MOVIES_UPDATE } from "../../utils/types";
import "./GenresMov.css";

const GenresMov = () => {
  const dispatch = useDispatch();
  const selectedGenres = useSelector(
    (state) => state.selectedGenres,
    shallowEqual
  );
  const filteredMovies = useSelector(
    (state) => state.filteredMovies,
    shallowEqual
  );
  const genresObject = useSelector((state) => state.genres || {}, shallowEqual);
  const genresArray = genresObject.genres || []; // Accessing the array inside the object

  // State to track the previously selected genres
  const [prevSelectedGenres, setPrevSelectedGenres] = useState([]);

  useEffect(() => {
    // Check if the selected genres have changed
    const hasSelectedGenresChanged =
      JSON.stringify(selectedGenres) !== JSON.stringify(prevSelectedGenres);

    // Update the filtered movies only if the selected genres have changed
    if (hasSelectedGenresChanged) {
      dispatch(updateFilteredMovies(selectedGenres));
      setPrevSelectedGenres(selectedGenres); // Update the previously selected genres
    }
  }, [dispatch, selectedGenres, prevSelectedGenres]);
  console.log(selectedGenres);
  console.log(prevSelectedGenres)

  const handleGenreClick = (genre) => {
    const genreId = genresArray.find((g) => g.name === genre)?.id;
    if (!selectedGenres.includes(genre) && genreId) {
      dispatch(updateSelectedGenres([...selectedGenres, genre]));
    }
  };

  return (
    <div>
      <div className="movie-container">
        {genresArray.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            color="secondary"
            clickable
            onClick={() => handleGenreClick(genre.name)}
          />
        ))}
      </div>

      <div className="movie-container">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="overlay">
              <p><span className="span">Description: <br></br></span>{movie.overview}</p>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <div className="movie-details">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-info">
                <span style={{ fontWeight: "bold" }}>Release Year:</span> {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenresMov;



