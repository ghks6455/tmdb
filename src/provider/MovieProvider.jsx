import { createContext, useReducer } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const initState = {
    loading: false,
    error: null,
    movies: null,
  };
  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true };
      case "GETMOIVES":
        return { ...state, loading: false, movies: action.movies };

      case "ERROR":
        return { ...state, loading: false, error: action.error };
      default:
        throw new Error(`액션 오류${action.type}`);
    }
  }

  const getMovies = async (use) => {
    try {
      dispatch({ type: "LOADING" });
      const key = import.meta.env.VITE_THE_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/${use}?api_key=${key}`);
      const result = await response.json();
      // console.log(result);
      const movies = result.results;
      console.log(movies);
      dispatch({ type: "GETMOIVES", movies: movies });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  return <MovieContext.Provider value={{ state, getMovies }}>{children}</MovieContext.Provider>;
}
