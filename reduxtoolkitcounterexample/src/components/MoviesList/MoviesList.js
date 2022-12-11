import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../feature/movies/MovieSlice";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesList.scss";

const MoviesList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = " ";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MoviesCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    movies.Response === "True" ? (
      shows.Search.map((movie, index) => (
        <MoviesCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MoviesList;
