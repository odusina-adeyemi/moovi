


import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './reducer';
import { requestMovieData } from './actions';



const store = configureStore({
    reducer: movieReducer
});

// store.dispatch(requestMovieData())


export default store;