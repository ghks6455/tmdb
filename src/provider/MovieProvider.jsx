import { createContext, useReducer } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const initState = {
    loading: false,
    error: null,
    showMain: true,
    detailData: null,
    trendingMovies: null,
    popularContents: null,
  };
  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      // 로딩
      case "LOADING":
        return { ...state, loading: true };
      // 디테일 페이지 on off 형식으로 설계
      case "SHOWMAIN":
        return { ...state, showMain: true };
      case "REMOVEMAIN":
        return { ...state, showMain: false };
      // tmdb api 호출
      case "GETMOIVES":
        return { ...state, loading: false, trendingMovies: action.trendingMovies };
      case "GETPOPULAR":
        return { ...state, loading: false, popularContents: action.popularContents };
      case "GETDETAIL":
        return { ...state, loading: false, detailData: action.detailData };
      // 에러
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
      const trendingMovies = result.results;
      console.log(trendingMovies);
      dispatch({ type: "GETMOIVES", trendingMovies });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  const getPopular = async (use) => {
    try {
      dispatch({ type: "LOADING" });
      const key = import.meta.env.VITE_THE_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/${use}/popular?language=en-US&page=1&api_key=${key}`);
      const result = await response.json();
      const popularContents = result.results;
      dispatch({ type: "GETPOPULAR", popularContents });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  const getMovieDetail = async (use) => {
    try {
      dispatch({ type: "LOADING" });
      const key = import.meta.env.VITE_THE_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/movie/${use}?api_key=${key}`);
      const detailData = await response.json();
      console.log(detailData);
      dispatch({ type: "GETDETAIL", detailData: detailData });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  };

  const detail = (e) => {
    if (e === true) {
      dispatch({ type: "SHOWMAIN" });
      console.log(state.showMain);
    } else {
      dispatch({ type: "REMOVEMAIN" });
      console.log(state.showMain);
    }
  };

  return <MovieContext.Provider value={{ state, getMovies, detail, getMovieDetail }}>{children}</MovieContext.Provider>;
}
