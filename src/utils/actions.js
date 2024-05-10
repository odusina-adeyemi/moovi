// Action types
export const GENRE_LIST_REQUEST = "GENRE_LIST_REQUEST";
export const GENRE_LIST_SUCCESS = "GENRE_LIST_SUCCESS";
export const GENRE_LIST_FAILURE = "GENRE_LIST_FAILURE";

export const MOVIE_DATA_REQUEST = "MOVIE_DATA_REQUEST";
export const MOVIE_DATA_FAILURE = "MOVIE_DATA_FAILURE";
export const MOVIE_DATA_SUCCESS = "MOVIE_DATA_SUCCESS";

export const SELECTED_GENRES_UPDATE = "SELECTED_GENRES_UPDATE";

export const SUGGESTION_REQUEST = "SUGGESTION_REQUEST";
export const SUGGESTION_SUCCESS = "SUGGESTION_SUCCESS";
export const SUGGESTION_FAILURE = "SUGGESTION_FAILURE";

export const FILTERED_MOVIES_UPDATE = "FILTERED_MOVIES_UPDATE";

export const SELECTED_MOVIES_UPDATE = "SELECTED_MOVIES_UPDATE";

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

// Action creators for genre list
export const requestGenreList = () => ({
  type: GENRE_LIST_REQUEST,
});

export const receiveGenreListSuccess = (genres) => ({
  type: GENRE_LIST_SUCCESS,
  payload: genres,
});

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
export const updateSelectedGenres = (selectedGenres) => ({
  type: SELECTED_GENRES_UPDATE,
  payload: selectedGenres,
});

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


// make use of request data 
