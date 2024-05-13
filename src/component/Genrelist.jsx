// import React, { useEffect } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
// import { requestGenreList } from '../utils/actions';

// const Genrelist = () => {
//   const dispatch = useDispatch();
//   const genres = useSelector(state => state.genres || [], shallowEqual);

//   useEffect(() => {
//     dispatch(requestGenreList());
//   }, []);

//   return (
//     <div>
//       {genres?.map(({ id, name }) => (
//         <div key={id}>{name}</div>
//       ))} : 'Genrelist'
//     </div>
//   );
// };

// export default Genrelist;




// import React, { useEffect } from "react";
// import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { requestGenreList } from "../utils/actions";

// const Genrelist = () => {
//   const dispatch = useDispatch();
//   const genres = useSelector((state) => state.genres || {}, shallowEqual);
//   //   const {genres} = genres;
//   console.log(genres);
//   useEffect(() => {
//     dispatch(requestGenreList());
//   }, [dispatch]);

//   return (
//     <div>
//       {/* {Array.isArray(genres) && genres.length > 0 ? (
//         genres.map(({ id, name }) => (
//           <div key={id}>{name}</div>
//         ))
//       ) : (
//         <p>No genres available.</p> */}

//       {typeof genres === "object" && Object.keys(genres).length > 0 ? (
//         Object.values(genres).map(({ id, name }) => <div key={id}>{genres.name}</div>)
//       ) : (
//         <p>No genres available.</p>
//       )}
//     </div>
//   );
// };

// export default Genrelist;



import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { requestGenreList } from '../utils/actions';

const Genrelist = () => {
  const dispatch = useDispatch();
  const genresObject = useSelector(state => state.genres || {}, shallowEqual);
  const genresArray = genresObject.genres || []; // Accessing the array inside the object

  useEffect(() => {
    dispatch(requestGenreList());
  }, [dispatch]);

  return (
    <div>
      {/* {genresArray.length > 0 ? (
        genresArray.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))
      ) : (
        <p>No genres available.</p>
      )} */}
    </div>
  );
};

export default Genrelist;
