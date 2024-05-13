


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
