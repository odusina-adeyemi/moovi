// import { requestMovieData } from './actions';

// Action types
import {
  GENRE_LIST_REQUEST,
  MOVIE_INFO_FAILURE,
  MOVIE_INFO_REQUEST,
  MOVIE_INFO_SUCCESS,
} from "./types";
import { GENRE_LIST_SUCCESS } from "./types";
import { GENRE_LIST_FAILURE } from "./types";

import { MOVIE_DATA_REQUEST } from "./types";
import { MOVIE_DATA_FAILURE } from "./types";
import { MOVIE_DATA_SUCCESS } from "./types";

import { SUGGESTION_REQUEST } from "./types";
import { SELECTED_GENRES_UPDATE } from "./types";
import { SUGGESTION_SUCCESS } from "./types";
import { SUGGESTION_FAILURE } from "./types";

import { FILTERED_MOVIES_UPDATE } from "./types";

import { SELECTED_MOVIES_UPDATE } from "./types";

// Action creators for movie data request
export const requestMovieData = () => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY",
    },
  };

  return async (dispatch) => {
    dispatch({ type: MOVIE_DATA_REQUEST });

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      dispatch({ type: MOVIE_DATA_SUCCESS, payload: data });
      console.log(data);
    } catch (error) {
      dispatch({ type: MOVIE_DATA_FAILURE, payload: error.message });
    }
  };
};

// Action creators for genre list request
export const requestGenreList = () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY",
    },
  };

  return async (dispatch) => {
    dispatch({ type: GENRE_LIST_REQUEST });

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      dispatch({ type: GENRE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GENRE_LIST_FAILURE, payload: error.message });
    }
  };
};

// // Action creators for genre list
// export const requestGenreList = () => ({
//   type: GENRE_LIST_REQUEST,
// });

// export const receiveGenreListSuccess = (genres) => ({
//   type: GENRE_LIST_SUCCESS,
//   payload: genres,
// });

export const receiveGenreListFailure = (error) => ({
  type: GENRE_LIST_FAILURE,
  payload: error,
});

// Action creators for popular movie data
export const requestPopularMovieData = () => ({
  type: MOVIE_DATA_REQUEST,
});

export const receivePopularMovieDataSuccess = (movies) => ({
  type: MOVIE_DATA_SUCCESS,
  payload: movies,
});

export const receivePopularMovieDataFailure = (error) => ({
  type: MOVIE_DATA_FAILURE,
  payload: error,
});

// Action creators for selected genres update
export const updateSelectedGenres = (selectedGenres) => {
  return async (dispatch) => {
    try {
      const promises = selectedGenres.map(async (genre) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`
        );
        const data = await response.json();
        const genreId = data.genres.find((g) => g.name === genre)?.id;

        const moviesResponse = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreId}`
        );
        const moviesData = await moviesResponse.json();

        return moviesData.results;
      });
      const results = await Promise.all(promises);
      const allMovies = results.flat();

      dispatch({ type: FILTERED_MOVIES_UPDATE, payload: allMovies });
      console.log(allMovies);
    } catch (error) {
      console.error("Error:", error);
    }
  };
};

// Action creators for suggestion
export const requestSuggestion = () => ({
  type: SUGGESTION_REQUEST,
});

export const receiveSuggestionSuccess = (suggestion) => ({
  type: SUGGESTION_SUCCESS,
  payload: suggestion,
});

export const receiveSuggestionFailure = (error) => ({
  type: SUGGESTION_FAILURE,
  payload: error,
});

// Action creators for filtered movies update
export const updateFilteredMovies = (filteredMovies) => ({
  type: FILTERED_MOVIES_UPDATE,
  payload: filteredMovies,
});

// Action creators for selected movies update
export const updateSelectedMovies = (selectedMovies) => ({
  type: SELECTED_MOVIES_UPDATE,
  payload: selectedMovies,
});

// // make use of request data
// export const requestMovieDisplay = () => {
//   return async (dispatch) => {
//     dispatch({ type: MOVIE_INFO_REQUEST });

//     try {
//       const movieId = "28"; // Replace with the actual movie ID
//       const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`;
//       const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY",
//         },
//       };

//       const response = await fetch(url, options);
//       const data = await response.json();
//       console.log(data);
//       dispatch({ type: MOVIE_INFO_SUCCESS, payload: data });
//     } catch (error) {
//       // Dispatch the failure action with the error message
//       dispatch({ type: MOVIE_INFO_FAILURE, payload: error.message });
//     }
//   };
// };




// export const requestMovieDisplay = (movieId) => {
//   return async (dispatch) => {
//     dispatch({ type: MOVIE_INFO_REQUEST });

//     try {
//       const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`;
//       const options = {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY",
//         },
//       };

//       const response = await fetch(url, options);
//       const data = await response.json();
//       console.log(data);
//       dispatch({ type: MOVIE_INFO_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: MOVIE_INFO_FAILURE, payload: error.message });
//     }
//   };
// };



export const requestMovieDisplay = () => {
  return async (dispatch) => {
    dispatch({ type: MOVIE_INFO_REQUEST });

    try {
      // Extracting movieId from URL parameter
      const urlParams = new URLSearchParams(window.location.search);
      const movieId = urlParams.get('movieId'); // Assuming the parameter name is 'movieId'

      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWVmZTBhYzE1NTdlYzk0NGI0NTVlZjE3YjExNDJiMiIsInN1YiI6IjY2M2I1Njg2YWEwOWM1N2NiMmJmMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ycFFrj4p1YBEqZcAHVwo2tdamjiGylWQvj43yOev-QY',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      dispatch({ type: MOVIE_INFO_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: MOVIE_INFO_FAILURE, payload: error.message });
    }
  };
}