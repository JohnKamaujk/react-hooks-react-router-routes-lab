import React from "react";
import { movies } from "../data";

function Movies() {
  const movieElements = movies.map((movie) => {
    return (
      <div key={movie}>
        <h3>{movie.title}</h3>
        <h3>{movie.time}</h3>
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movieElements}
    </div>
  );
}

export default Movies;
