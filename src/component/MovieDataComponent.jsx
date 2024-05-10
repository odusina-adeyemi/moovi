// // / How to use this action creator in a component:
 
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { requestMovieData } from '../utils/actions';
// // Inside your component

// // Call the action creator

// // create movie data component and consume the action creator fetched data
// const MovieDataComponent = () => {
//   const dispatch = useDispatch();
//   dispatch(requestMovieData());
//   const movieData = useSelector(state => state.movieData);
// console.log(movieData);
//   return (
//     <div>
//       {movieData.loading ? (
//         <p>Loading...</p>
//       ) : movieData.error ? (
//         <p>Error: {movieData.error}</p>
//       ) : (
//         <div>
//           <h2>Movie Data</h2>
//           <ul>
//             {movieData.movies.map(movie => (
//               <li key={movie.id}>{movie.title}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDataComponent;


import store from '../utils/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMovieData } from '../utils/actions';

const MovieDataComponent = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(state => state.popularMovies);
  console.log(movieData);
  store.subscribe(() => {
    const topRatedMovieData = store.getState();
    console.log(topRatedMovieData);
    // do something with topRatedMovieData
    const { popularMovies } = topRatedMovieData;
    console.log(popularMovies);
    const {results} = popularMovies;
    console.log(results);
  });
  
  // from result, i want to extract and map the following data: title, release_date, vote_average, overview, poster_path

  useEffect(() => {
    dispatch(requestMovieData());
  }, [dispatch]); // Dispatch only runs once when component mounts

  return (
    <div>
      {movieData.loading ? (
        <p>Loading...</p>
      ) : movieData.error ? (
        <p>Error: {movieData.error}</p>
      ) : (
        <div>
          <h2>Movie Data</h2>
          <ul>
            {movieData.movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDataComponent;

