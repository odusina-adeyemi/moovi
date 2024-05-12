


import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './reducer';
import { requestMovieData, selectedGenres } from './actions';



const store = configureStore({
    reducer: movieReducer
});

//  store.dispatch(selectedGenres())


export default store;