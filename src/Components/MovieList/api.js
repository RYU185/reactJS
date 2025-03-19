// 함수와 변수만 담아놓고 컴포넌트가 아니기때문에 소문자로.
// 서버에서 불러오는 api 함수들만 모아놓기

import axios from "axios";
const header = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
  },
};

export const IMG_PATH = "https://image.tmdb.org/t/p/w400/";

export const categories = [
  {
    category: "Now Playing",
    func: getMoviesNowPlaying,
  },
  {
    category: "Popular",
    func: getMoviesPopular,
  },
  {
    category: "Top Rated",
    func: getMoviesTopRated,
  },
  {
    category: "Upcoming",
    func: getMoviesUpcoming,
  },
];

export async function getGenreListMovie() {
  return axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en-US&page=1", header);
}

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

export function getMovieDetailById(id) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, header);
  // ``으로 바꾸고 우리가 던질 매개변수를 문자열처리(${})
}

export function getMovieCreditById(id) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, header);
}

export function searchMoviesByKeyword(Keyword) {
  return axios.get(`https://api.themoviedb.org/3/search/movie?query=${Keyword}&include_adult=false&language=en-US&page=1`, header);
}


// ex. [12, 35 ,80]와 같이 숫자의 배열을 매개변수로 전달하면
// "Adventure", "Drama", "Crime"과 같이 장르명을 문자열로 리턴하는 함수
export function getGenreName(genreList, idList) {
  return (
    idList
      .map((id) => {
        const found = genreList.find((genre) => genre.id == id);
        return found ? found.name : "";
      })
      .filter((name) => name)
      // filter: name이 있으면 보내주고 없으면 null로 체크하겠다
      .join(", ")
  );
  // join: 문자열 하나에 담겠다
}
