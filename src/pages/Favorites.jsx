import "../css/Favorites.css";
import "../css/Home.css";
import favoriteMovies from "../components/MovieCard";
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";

function Favorites() {
  const {favorites} = useMovieContext();
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="anime-grid">
          {favorites.map((movie) => {
            return <MovieCard movie={movie} key={movie.mal_id} />;
          })}
        </div>
      </div>
    );
  } else {
  return (
    <>
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to favorites</p>
      </div>
    </>
  );
}}

export default Favorites;
