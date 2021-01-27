import React, { useState } from "react";
import DisplayMovies from "../components/DisplayMovies";

function SearchMovies() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("test");

    //const query = "terminator";

    const url = `http://www.omdbapi.com/?apikey=37fe945a&s=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.Search);
      setMovies(data.Search);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Jurassic Park"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <DisplayMovies movies={movies} />
    </>
  );
}

export default SearchMovies;
