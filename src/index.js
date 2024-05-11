// 1. Movie Data: Fetch movie data from an external API (use The Movie Database - 
// TMDB API) using Redux asynchronous actions. Store the fetched movie data in the 
// Redux store for easy access across components.

// 2. Movie Genre Selection: Implement a selection interface where users can choose their 
// favourite movie genres. Allow users to select multiple genres to tailor the 
// recommendations to their preferences. Store the selected genres in the Redux store.

// 3. Movie Recommendations: Based on the selected genres, filter the movie data in the 
// Redux store to display relevant movie recommendations matching the user's 
// preferences. Display movie information, including title, description, release date, and 
// poster image.

// 4. Movie Detail View: When users click on a movie from the recommendations list, 
// display a detailed view of the movie, including more information like the movie's 
// runtime, average rating, and additional details from the API.

// 5. Local Storage: Implement Local Storage integration using Redux middleware or 
// custom functions to store selected genres and movie data. Upon app reload or refresh, 
// retrieve data from Local Storage to preserve user preferences and movie data.

// 6. UI Design: Design an attractive and user-friendly interface for the app. Consider 
// using tailwind to enhance the overall look and feel.




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from '../src/utils/store'; // Import the exported store
import App from './App.js';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App component with the Provider component and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);
