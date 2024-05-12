// // // import React, { useState } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { SELECTED_GENRES_UPDATE, FILTERED_MOVIES_UPDATE } from '../utils/types';

// // // const GenresMov = () => {
// // //     const dispatch = useDispatch();
// // //     const selectedGenres = useSelector(state => state.selectedGenres);
// // //     const filteredMovies = useSelector(state => state.filteredMovies);

// // //     const handleGenreClick = async (genre) => {
// // //         try {
// // //             // Get the genre id based on the genre name
// // //             const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`);
// // //             const data = await response.json();
// // //             console.log(data);
// // //             const genreId = data.genres.find(g => g.name === genre)?.id;

// // //             // Fetch movies based on the genre id
// // //             const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreId}`);
// // //             const moviesData = await moviesResponse.json();

// // //             // Update the selected genres and filtered movies in the Redux store
// // //             dispatch({ type: SELECTED_GENRES_UPDATE, payload: genre });
// // //             dispatch({ type: FILTERED_MOVIES_UPDATE, payload: moviesData.results });
// // //         } catch (error) {
// // //             console.error('Error:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div>

// // //             {selectedGenres.map(genre => (
// // //                 <button key={genre} onClick={() => handleGenreClick(genre)}>{genre}</button>
// // //             ))}
// // //             {filteredMovies.map(movie => (
// // //                 <div key={movie.id}>{movie.title}</div>
// // //             ))}
// // //         </div>
// // //     );
// // // };

// // // export default GenresMov;

// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// // import { SELECTED_GENRES_UPDATE, FILTERED_MOVIES_UPDATE } from '../utils/types';
// // import store from '../utils/store';
// // const GenresMov = () => {
// //     const dispatch = useDispatch();
// //     // Memoize selectedGenres and filteredMovies using shallowEqual
// //     const selectedGenres = useSelector(state => state.selectedGenres, shallowEqual);
// //     const filteredMovies = useSelector(state => state.filteredMovies, shallowEqual);

// //     useEffect(() => {
// //         // Define a function to handle data change and subscribe to Redux store changes
// //         const handleDataChange = () => {
// //             // Fetch data and dispatch actions
// //             selectedGenres.forEach(async genre => {
// //                 try {
// //                     // Get the genre id based on the genre name
// //                     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`);
// //                     const data = await response.json();
// //                     const genreId = data.genres.find(g => g.name === genre)?.id;

// //                     // Fetch movies based on the genre id
// //                     const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreId}`);
// //                     const moviesData = await moviesResponse.json();

// //                     // Dispatch actions to update the selected genres and filtered movies in the Redux store
// //                     dispatch({ type: SELECTED_GENRES_UPDATE, payload: genre });
// //                     dispatch({ type: FILTERED_MOVIES_UPDATE, payload: moviesData.results });
// //                 } catch (error) {
// //                     console.error('Error:', error);
// //                 }
// //             });
// //         };

// //         // Subscribe to Redux store changes and handle data change
// //         const unsubscribe = store.subscribe(handleDataChange);

// //         handleDataChange();

// //         // Unsubscribe when the component unmounts

// //         return () => {
// //             unsubscribe();
// //         };

// //     }, [dispatch, selectedGenres]); // Dispatch and selectedGenres will never change, so they're added as dependencies

// //     return (
// //         <div>
// //             {selectedGenres.map(genre => (
// //                 <button key={genre} onClick={() => handleDataChange(genre)}>{genre}</button>
// //             ))}
// //             {filteredMovies.map(movie => (
// //                 <div key={movie.id}>{movie.title}</div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default GenresMov;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { SELECTED_GENRES_UPDATE, FILTERED_MOVIES_UPDATE } from '../utils/types';
// import store from '../utils/store';

// const GenresMov = () => {
//     const dispatch = useDispatch();
//     // Memoize selectedGenres and filteredMovies using shallowEqual
//     const selectedGenres = useSelector(state => state.selectedGenres, shallowEqual);
//     const filteredMovies = useSelector(state => state.filteredMovies, shallowEqual);

//     useEffect(() => {
//         // Define a function to handle data change and subscribe to Redux store changes
//         const handleDataChange = async () => {
//             // Fetch data and dispatch actions
//             for (const genre of selectedGenres) {
//                 try {
//                     // Get the genre id based on the genre name
//                     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`);
//                     const data = await response.json();
//                     const genreId = data.genres.find(g => g.name === genre)?.id;

//                     // Fetch movies based on the genre id
//                     const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreId}`);
//                     const moviesData = await moviesResponse.json();

//                     // Dispatch actions to update the selected genres and filtered movies in the Redux store
//                     dispatch({ type: SELECTED_GENRES_UPDATE, payload: genre });
//                     dispatch({ type: FILTERED_MOVIES_UPDATE, payload: moviesData.results });
//                 } catch (error) {
//                     console.error('Error:', error);
//                 }
//             }
//         };

//         // Subscribe to Redux store changes and handle data change
//         const unsubscribe = store.subscribe(handleDataChange);

//         // Fetch data and dispatch actions initially
//         handleDataChange();

//         // Unsubscribe when the component unmounts
//         return () => {
//             unsubscribe();
//         };

//     }, [dispatch, selectedGenres]); // Dispatch and selectedGenres will never change, so they're added as dependencies

//     return (
//         <div>
//             {selectedGenres.map(genre => (
//                 <button key={genre} onClick={() => handleDataChange(genre)}>{genre}</button>
//             ))}
//             {filteredMovies.map(movie => (
//                 <div key={movie.id}>{movie.title}</div>
//             ))}
//         </div>
//     );
// };

// export default GenresMov;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { SELECTED_GENRES_UPDATE, FILTERED_MOVIES_UPDATE } from '../utils/types';
// import store from '../utils/store';
// const GenresMov = () => {
//     const dispatch = useDispatch();
//     const selectedGenres = useSelector(state => state.selectedGenres, shallowEqual);
//     const filteredMovies = useSelector(state => state.filteredMovies, shallowEqual);

//     useEffect(() => {
//         const handleDataChange = async () => {
//             try {
//                 // Fetch genre data
//                 const genreResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`);
//                 const genreData = await genreResponse.json();

//                 // Fetch movies based on selected genres
//                 const moviePromises = selectedGenres.map(async genre => {
//                     const genreId = genreData.genres.find(g => g.name === genre)?.id;
//                     if (genreId) {
//                         const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreId}`);
//                         const moviesData = await moviesResponse.json();
//                         return moviesData.results;
//                     }
//                     return [];
//                 });

//                 // Wait for all movie promises to resolve
//                 const allMovies = await Promise.all(moviePromises);

//                 // Combine movies from different genres
//                 const mergedMovies = allMovies.flat();

//                 // Dispatch actions to update the Redux store
//                 dispatch({ type: SELECTED_GENRES_UPDATE, payload: selectedGenres });
//                 dispatch({ type: FILTERED_MOVIES_UPDATE, payload: mergedMovies });
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         // Initial data fetch
//         handleDataChange();

//         // Subscribe to changes (e.g., when selected genres change)
//         const unsubscribe = store.subscribe(() => {
//             const updatedSelectedGenres = store.getState().selectedGenres;
//             if (selectedGenres !== updatedSelectedGenres) {
//                 handleDataChange();
//             }
//         });

//         // Clean up by unsubscribing when the component unmounts
//         return () => {
//             unsubscribe();
//         };
//     }, [selectedGenres, dispatch]);

//     return (
//         <div>
//             {selectedGenres.map(genre => (
//                 <button key={genre} onClick={() => handleGenreClick(genre)}>{genre}</button>
//             ))}
//             {filteredMovies.map(movie => (
//                 <div key={movie.id}>{movie.title}</div>
//             ))}
//         </div>
//     );
// };

// export default GenresMov;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { SELECTED_GENRES_UPDATE, FILTERED_MOVIES_UPDATE } from '../utils/types';
// import store from '../utils/store';
// // import Chip from '@material-ui/core/Chip';
// import { Chip } from '@mui/material';

// const GenresMov = () => {
//     const dispatch = useDispatch();
//     const selectedGenres = useSelector(state => state.selectedGenres, shallowEqual);
//     const filteredMovies = useSelector(state => state.filteredMovies, shallowEqual);

//     const handleGenreClick = async (genre) => {
//         try {
//             const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`);
//             const data = await response.json();
//             const genreId = data.genres.find(g => g.name === genre)?.id;

//             const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreId}`);
//             const moviesData = await moviesResponse.json();

//             dispatch({ type: SELECTED_GENRES_UPDATE, payload: genre });
//             dispatch({ type: FILTERED_MOVIES_UPDATE, payload: moviesData.results });
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     useEffect(() => {
//         const handleDataChange = async () => {
//             for (const genre of selectedGenres) {
//                 try {
//                     const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=3eefe0ac1557ec944b455ef17b1142b2&language=en-US`);
//                     const data = await response.json();
//                     const genreId = data.genres.find(g => g.name === genre)?.id;

//                     const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreId}`);
//                     const moviesData = await moviesResponse.json();

//                     dispatch({ type: SELECTED_GENRES_UPDATE, payload: genre });
//                     dispatch({ type: FILTERED_MOVIES_UPDATE, payload: moviesData.results });
//                     console.log(moviesData.results);
//                     console.log(genre);
//                 } catch (error) {
//                     console.error('Error:', error);
//                 }
//             }
//         };

//         const unsubscribe = store.subscribe(handleDataChange);
//         store.getState();
//         handleDataChange();

//         return () => {
//             unsubscribe();
//         };
//     }, [dispatch, selectedGenres]);

//     return (
//         <div>
//             {selectedGenres.map(genre => (
//                 <Chip key={genre} label={genre} onClick={() => handleGenreClick(genre)} />
//             ))}
//             {filteredMovies.map(movie => (
//                 <div key={movie.id}>{movie.title}</div>
//             ))}
//         </div>
//     );
// };

// export default GenresMov;

// GenresMov.js

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { Chip } from '@mui/material'; // Assuming you're using MUI

// import { updateFilteredMovies, updateSelectedGenres } from '../utils/actions';
// import { FILTERED_MOVIES_UPDATE } from '../utils/types';

// const GenresMov = () => {
//     const dispatch = useDispatch();
//     const selectedGenres = useSelector(state => state.selectedGenres, shallowEqual);
//     const filteredMovies = useSelector(state => state.filteredMovies, shallowEqual);
//     const genres = useSelector(state => state.genres, shallowEqual);
//     console.log(selectedGenres);
//     console.log(filteredMovies);
//     console.log(genres);

//     useEffect(() => {
//         dispatch(updateFilteredMovies(selectedGenres));
//     }, [dispatch, selectedGenres]);

//     const handleGenreClick = (genre) => {
//         const genreId = genres.find((g) => g.name === genre)?.id;
//         if (!selectedGenres.includes(genre) && genreId) {
//             dispatch(updateSelectedGenres([...selectedGenres, genre]));
//         }
//     };

//     useEffect(() => {
//         const fetchMovies = async () => {
//             const genreIds = selectedGenres.map((genre) => {
//                 const genreId = genres.find((g) => g.name === genre)?.id;
//                 return genreId;
//             }).filter(Boolean);
//             console.log(genreIds);

//             const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreIds.join(',')}`);
//             if (moviesResponse.ok) {
//                 const moviesData = await moviesResponse.json();
//                 const allMovies = moviesData.results;
//                 dispatch({ type: FILTERED_MOVIES_UPDATE, payload: allMovies });
//             } else {
//                 console.error('Error:', moviesResponse.status);
//                 // Handle the error here, e.g. show a fallback UI or retry the API call
//             }
//         };

//         fetchMovies();
//     }, [dispatch, selectedGenres, genres]);

//     return (
//         <div>
//             {selectedGenres.map(genre => (
//                 <Chip key={genre} label={'genre'} clickable onClick={() => handleGenreClick(genre)} />
//             ))}
//             {filteredMovies.map(movie => (
//                 <div key={movie.id}>{movie.title}</div>
//             ))}
//         </div>
//     );
// };

// export default GenresMov;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { Chip } from '@mui/material';

// import { updateFilteredMovies, updateSelectedGenres } from '../utils/actions';
// import { FILTERED_MOVIES_UPDATE } from '../utils/types';

// const GenresMov = () => {
//     const dispatch = useDispatch();
//     const selectedGenres = useSelector(state => state.selectedGenres, shallowEqual);
//     const filteredMovies = useSelector(state => state.filteredMovies, shallowEqual);
//     const genres = useSelector(state => state.genres, shallowEqual);

//     useEffect(() => {
//         dispatch(updateFilteredMovies(selectedGenres));
//     }, [dispatch, selectedGenres]);

//     const handleGenreClick = (genre) => {
//         const genreId = genres.find((g) => g.name === genre)?.id;
//         if (!selectedGenres.includes(genre) && genreId) {
//             dispatch(updateSelectedGenres([...selectedGenres, genre]));
//         }
//     };

//     useEffect(() => {
//         const fetchMovies = async () => {
//             const genreIds = selectedGenres.map((genre) => {
//                 const genreId = genres.find((g) => g.name === genre)?.id;
//                 return genreId;
//             }).filter(Boolean);

//             const moviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=3eefe0ac1557ec944b455ef17b1142b2&with_genres=${genreIds.join(',')}`);
//             if (moviesResponse.ok) {
//                 const moviesData = await moviesResponse.json();
//                 const allMovies = moviesData.results;
//                 dispatch({ type: FILTERED_MOVIES_UPDATE, payload: allMovies });
//             } else {
//                 console.error('Error:', moviesResponse.status);
//                 // Handle the error here, e.g. show a fallback UI or retry the API call
//             }
//         };

//         fetchMovies();
//     }, [dispatch, selectedGenres, genres]);

//     return (
//         <div>
//             {selectedGenres.map(genre => (
//                 <Chip key={genre} label={genre} clickable onClick={() => handleGenreClick(genre)} />
//             ))}
//             {filteredMovies.map(movie => (
//                 <div key={movie.id}>
//                     <h2>{movie.title}</h2>
//                     <p>{movie.release_date}</p>
//                     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default GenresMov;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { Chip } from '@mui/material';

// import { updateFilteredMovies, updateSelectedGenres } from '../utils/actions';
// import { FILTERED_MOVIES_UPDATE } from '../utils/types';

// const GenresMov = () => {
//     const dispatch = useDispatch();
//     const selectedGenres = useSelector(state => state.selectedGenres, shallowEqual);
//     const filteredMovies = useSelector(state => state.filteredMovies, shallowEqual);
//     const genres = useSelector(state => state.genres || [], shallowEqual); // Ensure genres is initialized as an array

//     // State to track the previously selected genres
//     const [prevSelectedGenres, setPrevSelectedGenres] = useState([]);

//     useEffect(() => {
//         // Check if the selected genres have changed
//         const hasSelectedGenresChanged = JSON.stringify(selectedGenres) !== JSON.stringify(prevSelectedGenres);

//         // Update the filtered movies only if the selected genres have changed
//         if (hasSelectedGenresChanged) {
//             dispatch(updateFilteredMovies(selectedGenres));
//             setPrevSelectedGenres(selectedGenres); // Update the previously selected genres
//         }
//     }, [dispatch, selectedGenres, prevSelectedGenres]);

//     const handleGenreClick = (genre) => {
//         const genreId = genres.find((g) => g.name === genre)?.id;
//         if (!selectedGenres.includes(genre) && genreId) {
//             dispatch(updateSelectedGenres([...selectedGenres, genre]));
//         }
//     };

//     return (
//         <div>
//             {genres.map(genre => (
//                 <Chip key={genre.id} label={genre.name} clickable onClick={() => handleGenreClick(genre.name)} />
//             ))}
//             {filteredMovies.map(movie => (
//                 <div key={movie.id}>
//                     <h2>{movie.title}</h2>
//                     <p>{movie.release_date}</p>
//                     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default GenresMov;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Chip } from "@mui/material";

import { updateFilteredMovies, updateSelectedGenres } from "../utils/actions";
import { FILTERED_MOVIES_UPDATE } from "../utils/types";

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
      {genresArray.map((genre) => (
        <Chip
        
          key={genre.id}
          label={genre.name}
          color="secondary"
          clickable
          onClick={() => handleGenreClick(genre.name)}
        />
      ))}
      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default GenresMov;



