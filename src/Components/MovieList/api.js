//함수와 변수만 담아놓고 컴포넌트가 아니기때문에 소문자로.
// 서버에서 불러오는 api 함수들만 모아놓기

import axios from "axios";
const header = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
  },
};

export const categories = [
  {
    category : "Now Playing", func: getMoviesNowPlaying
  },
  {
    category : "Popular", func : getMoviesPopular
  },
  {
    category : "Top Rated", func : getMoviesTopRated
  },
  {
    category : "Upcoming", func : getMoviesUpcoming
  }
]

export function getMoviesNowPlaying() {
  return axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", header);
}

export function getMoviesPopular() {
  return axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", header);
}

export function getMoviesTopRated() {
  return axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", header);
}

export function getMoviesUpcoming() {
  return axios.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", header);
}
