import * as actionLoad from "./types";

// Initial state
const initialState = {
  genres: {},
  popularMovies: [],
  selectedGenres: [],
  suggestion: null,
  filteredMovies: [],
  selectedMovies: [],
  movieInfo: {},
  loading: false,
  error: null,
};

// Reducer function
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionLoad.GENRE_LIST_REQUEST:
    case actionLoad.MOVIE_DATA_REQUEST:
    case actionLoad.SUGGESTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionLoad.GENRE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        genres: action.payload,
        error: null,
      };
    case actionLoad.MOVIE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        popularMovies: action.payload,
        error: null,
      };
    case actionLoad.SELECTED_GENRES_UPDATE:
      return {
        ...state,
        selectedGenres: action.payload,
      };
    case actionLoad.SUGGESTION_SUCCESS:
      return {
        ...state,
        suggestion: action.payload,
        error: null,
      };
    case actionLoad.FILTERED_MOVIES_UPDATE:
      return {
        ...state,
        filteredMovies: action.payload,
      };
    case actionLoad.SELECTED_MOVIES_UPDATE:
      return {
        ...state,
        selectedMovies: action.payload,
      };
    case actionLoad.GENRE_LIST_FAILURE:
    case actionLoad.MOVIE_DATA_FAILURE:
    case actionLoad.SUGGESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionLoad.MOVIE_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionLoad.MOVIE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        movieInfo: action.payload,
      };
      
    case actionLoad.MOVIE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type === actionLoad.SELECTED_GENRES_UPDATE ||
    action.type === actionLoad.MOVIE_DATA_SUCCESS
  ) {
    localStorage.setItem(
      "selectedGenres",
      JSON.stringify(store.getState().selectedGenres)
    );
    localStorage.setItem(
      "movieData",
      JSON.stringify(store.getState().movieData)
    );
  }
  return result;
};

// Apply middleware when creating the Redux store
//   const store = createStore(
//     rootReducer,
//     applyMiddleware(localStorageMiddleware)
//   );

// const movieInfoReducer = (state = initialState, action) => {

//     default:
//       return state;
//   }
// };

// export default movieInfoReducer
