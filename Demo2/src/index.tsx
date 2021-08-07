import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import MovieProvider from './Components/Context/MovieProvider';
import Movie from './Components/Movie/Movie';

ReactDOM.render(
  <React.StrictMode>
      <MovieProvider>
          <Movie></Movie>
          <Movie></Movie>
      </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
