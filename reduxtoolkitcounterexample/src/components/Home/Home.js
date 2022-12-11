import React from "react";
import { useEffect } from "react";
import MoviesList from "../MoviesList/MoviesList";
// import movieApi from "../../common/apis/movieApi";
// import { ApiKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../feature/movies/MovieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());

  }, [dispatch]);
  return (
    <div className="banner-logo">
      <MoviesList />
    </div>
  );
};

export default Home;
