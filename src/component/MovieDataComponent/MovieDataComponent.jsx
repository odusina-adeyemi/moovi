// // // / How to use this action creator in a component:
 
// // import React, { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { requestMovieData } from '../utils/actions';
// // // Inside your component

// // // Call the action creator

// // // create movie data component and consume the action creator fetched data
// // const MovieDataComponent = () => {
// //   const dispatch = useDispatch();
// //   dispatch(requestMovieData());
// //   const movieData = useSelector(state => state.movieData);
// // console.log(movieData);
// //   return (
// //     <div>
// //       {movieData.loading ? (
// //         <p>Loading...</p>
// //       ) : movieData.error ? (
// //         <p>Error: {movieData.error}</p>
// //       ) : (
// //         <div>
// //           <h2>Movie Data</h2>
// //           <ul>
// //             {movieData.movies.map(movie => (
// //               <li key={movie.id}>{movie.title}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MovieDataComponent;


// import store from '../utils/store';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { requestMovieData } from '../utils/actions';

// const MovieDataComponent = () => {
//   const dispatch = useDispatch();
//   const movieData = useSelector(state => state.popularMovies);
//   console.log(movieData);
//   store.subscribe(() => {
//     const topRatedMovieData = store.getState();
//     console.log(topRatedMovieData);
//     // do something with topRatedMovieData
//     const { popularMovies } = topRatedMovieData;
//     console.log(popularMovies);
//     const {results} = popularMovies;
//     console.log(results);
//     const extractedData = results.map(movie => ({
//       title: movie.title,
//       release_date: movie.release_date,
//       vote_average: movie.vote_average,
//       overview: movie.overview,
//       poster_path: movie.poster_path
//     }));
//     console.log(extractedData);
//   });
  
//   // from result, i want to extract and map the following data: title, release_date, vote_average, overview, poster_path
 

//   useEffect(() => {
//     dispatch(requestMovieData());
//   }, [dispatch]); // Dispatch only runs once when component mounts

//   return (
//     <div>
      
//             {extractedData.map(movie => (
//               <li key={movie.id}>{movie.title}</li>
//             ))}
//     </div>
//   );
// };

// export default MovieDataComponent;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { requestMovieData } from '../utils/actions';
// import store from '../utils/store';

// const MovieDataComponent = () => {
//   const dispatch = useDispatch();
//   const [extractedData, setExtractedData] = useState([]);

//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       const state = store.getState();
//       const { popularMovies } = state;
//       const { results } = popularMovies;
//       const extractedData = results.map(movie => ({
//         genreId: movie.genre_ids,
//         id: movie.id,
//         title: movie.title,
//         release_date: movie.release_date,
//         vote_average: movie.vote_average,
//         overview: movie.overview,
//         poster_path: movie.poster_path 
//       }));
//       setExtractedData(extractedData);
//     });

//     dispatch(requestMovieData());

//     return () => {
//       unsubscribe();
//     };
//   }, [dispatch]);

//   return (
//     <div>
//       {extractedData.map(movie => (
//         <div key={movie.id}>
//           <h2>{movie.title}</h2>
//           <p>Release Date: {movie.release_date}</p>
//           <p>Vote Average: {movie.vote_average}</p>
//           <p>Overview: {movie.overview}</p>
//           <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        
       
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieDataComponent;




import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { requestMovieData } from '../../utils/actions';
import store from '../../utils/store';
import './MovieDataComponent.css';
import { Link } from 'react-router-dom';

const MovieDataComponent = () => {
  const dispatch = useDispatch();
  const extractedData = useSelector(state => {
    const { popularMovies } = state;
    const { results } = popularMovies || {};
    return results?.map(movie => ({
      genreId: movie.genre_ids,
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: movie.poster_path 
    })) || [] ;

  },  shallowEqual );


  useEffect(() => {
    dispatch(requestMovieData());

    
    return () => {
      const unsubscribe = store.subscribe(() => {});
      unsubscribe();
    };

    
  }, [dispatch]);

  
  return (

   

    // <div>
    //   {extractedData.length > 0 ? (
    //     extractedData.map(movie => (
    //       <div key={movie.id}>
    //         <h2>{movie.title}</h2>
    //         <p>Release Date: {movie.release_date}</p>
    //         <p>Vote Average: {movie.vote_average}</p>
    //         <p>Overview: {movie.overview}</p>
    //         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
    //       </div>
    //     ))
    //   ) : (
    //     <p>No movie data available.</p>
    //   )}
    // </div>

// // <div className="movie-container">
// //   {extractedData.length > 0 ? (
// //     extractedData.map(movie => (
// //       <div key={movie.id} className="movie-card">
// //         <div className="overlay">
// //           <h2>{movie.title}</h2>
// //           <p>Release Date: {movie.release_date}</p>
// //           <p>Vote Average: {movie.vote_average}</p>
// //           <p>Overview: {movie.overview}</p>
// //         </div>
// //         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-image" />
// //       </div>
//     ))
//   ) : (
//     <p>No movie data available.</p>
//   )}
// </div>
<div className="movie-container-custom">
  {extractedData.length > 0 ? (
    extractedData.map(movie => (
      <div key={movie.id} className="movie-card-custom">
        <div className="movie-overlay-custom">
          <Link to={`/details/${movie.id}`}> 
          <p>{movie.overview}</p>
          </Link>
         
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-image-custom" />
        <div className="movie-details-custom">
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Vote Average: {movie.vote_average}</p>
        </div>
      </div>
    ))
  ) : (
    <p>No movie data available.</p>
  )}
</div>

  );
  

};

export default MovieDataComponent;
