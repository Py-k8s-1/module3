import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apikey=${ApiKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movie/fetchAsyncShows",
  async () => {
    const movieText = "Friends";
    const response = await movieApi.get(
      `?apikey=${ApiKey}&s=${movieText}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movie/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);
const initialState = {
  movie: [],
  show: [],
  selectMovieOrShow: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movie = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("PENDING");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Movies Fetched sucessfully");
      return { ...state, movie: payload };
    },

    [fetchAsyncMovies.rejected]: (state, { payload }) => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Show Fetched Successfully!");
      return { ...state, show: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movie.movie;
export const getAllShows = (state) => state.movie.show;
export const getSelectedMovieOrShow = (state) => state.movie.selectMovieOrShow;

export default movieSlice.reducer;
