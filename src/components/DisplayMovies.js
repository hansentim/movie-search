import React from "react";
import MovieCard from "../components/movieCard";

//Lägg en ternary operator för att fånga upp felsökningar
function DisplayMovies(props) {
  console.log(props);
  return (
    <div className="card-list">
      {props.movies !== undefined ? (
        props.movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.imdbID} />;
        })
      ) : (
        <h1>ERRRROOOORRRr</h1>
      )}
    </div>
  );
}

export default DisplayMovies;
