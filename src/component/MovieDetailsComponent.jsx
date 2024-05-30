// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { requestMovieDisplay } from '../utils/actions';

// const MovieDetailsComponent = () => {
//   const dispatch = useDispatch();
//   const { movieInfo, loading, error } = useSelector((state) => state.movieInfo);

//   useEffect(() => {
//     // Assuming you have access to the movieId in your component
//     // You can dispatch the action to fetch movie details when the component mounts
//     dispatch(requestMovieDisplay());
//   }, [dispatch]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {movieInfo && (
//         <div>
//           <h2>{movieInfo.title}</h2>
//           <p>{movieInfo.overview}</p>
//           <p>Release Date: {movieInfo.release_date}</p>
//           {/* Add more details you want to display */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDetailsComponent;
