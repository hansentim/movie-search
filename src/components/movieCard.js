import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img className="card--image" src={movie.Poster} alt="movie" />
      <div className="card--content">
        <h3 className="card--title">{movie.Title}</h3>
        <p>
          <small>imdbID: {movie.imdbID}</small>
        </p>
        <p>
          <small>Year: {movie.Year}</small>
        </p>
        <p>
          <small>Plot: {movie.Type}</small>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
