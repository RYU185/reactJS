import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { categories, getGenreListMovie, getGenreName } from "./api";
import { useNavigate } from "react-router-dom";

const Tab = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  gap: 10px;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  background-color: dodgerblue;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease; //트랜지션은 0.3초가 국룰이다
  &:hover {
    background-color: #ff69b4;
    cursor: pointer;
  }
  &.selected {
    background-color: #32dc32;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
export const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 0.625rem;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const Text = styled.div`
  color: #333;
  overflow-wrap: break-word;
  word-break: break-all;
`;
// text는 항상 주의해야한다
// 분명히 Card는 Grid방식으로 1/3로 나눠놨는데
// text가 긴 word라면 뚫고나가거나 카드 범위를 강제로 넓힐 가능성이 있다.
/* break-word만 쓴다면 잘리는 부분이 있는 긴 단어를 아예 줄바꿈 */
// 글자가 길다면 잘라서 줄바꿈하라.

function MovieList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(0);
  const [genreList, setGenreList] = useState([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/w400/";
  const navigate = useNavigate(); // url 수정 함수 03.19

  useEffect(() => {
    getMovies(0);
    // 문제 발견: 둘 모두 비동기함수
    // 장르를 가져오는 응답은 딜레이되고
    // getMovies만 업데이트될 확률
  }, []);
  // 반드시! 두번째 변수에 빈 배열 혹은 배열에 변수!

  // async <-> await 사용시 주의할점
  // 1. await는 async함수 안에 사용한다
  // 2. try-catch 구문을 사용하는 것을 추천함
  async function getMovies(index) {
    try {
      // 장르리스트가 상태에 없을 경우 처리
      if (genreList.length === 0) {
        const storedGenreList = JSON.parse(sessionStorage.getItem("GenreList"));
        if (storedGenreList && storedGenreList.length > 0) {
          // 세션스토리지에 값이 있으면 상태 업데이트
          console.log("세션스토리지에 값이 있음");
          setGenreList(storedGenreList);
        } else {
          // 세션스토리지에도 없으면 API 호출
          console.log("세션스토리지에도 없어서 API 호출");
          const response = await getGenreListMovie(); // 200 OK
          setGenreList(response.data.genres);
          sessionStorage.setItem("GenreList", JSON.stringify(response.data.genres));
        }
      }
      // 이게 완료되면 무비 리스트 요청하는 함수로 이동

      // 무비리스트 요청
      let response = await categories[index].func(); // 200 OK
      console.log(response.data);
      setSelectedCat(index);
      setData(response.data);
      setLoading(false);
      // 200 OK만 들어감
    } catch (error) {
      console.log(error);
      // 400, 404, 500 기타 등등
      alert("네트워크 오류로 정상적인 동작이 불가능합니다.");
    }
    // 만약 promise then을 쓴다면
    // then 안에 then, then 안에 then 안에 then......
    // drilling 문제 발생하여 가독성이 구려짐
    // 아예 함수 자체로 넣어버리면 해결
  }
  // async 안에 await
  // await 앞에서 네트워크가 response를 주기전까지 코드가 멈춰버린다.

  return (
    <div>
      <h1>MovieList </h1>
      <Tab>
        {categories.map((category, i) => (
          <Button
            key={i}
            onClick={() => getMovies(i)}
            className={i == selectedCat ? "selected" : ""}
            // i가 내가 선택한 카테고리라면 selected라는 클래스를 추가하라.
            // selected라는 클래스가 붙으면 css에서 background-color를 바꿈
          >
            {category.category}
          </Button>
        ))}
      </Tab>
      <Container>
        {loading ? (
          <p>로딩중...</p>
        ) : (
          data.results.map((movie) => (
            <Card key={movie.id} onClick={() => navigate(`${movie.id}`)}>
              {/* 문자열로 줘야함. 왜?  */}
              <Img src={IMG_PATH + movie.poster_path}></Img>
              <Text>타이틀 : {movie.title}</Text>
              <Text>장르 : {getGenreName(genreList, movie.genre_ids)}</Text>
              {/* 장르가 숫자로 나오는 문제 해결
              1. 컴포넌트를 처음 로드할때, 장르 리스트 요청
              2. 장르 리스트 저장
              3. 변환함수(숫자를 매개변수로 던져주면 Text로 return) 작성
              4.  */}
              <hr />
              <Text>{movie.overview}</Text>
            </Card>
          ))
        )}
      </Container>
    </div>
  );
}

// 구조 잡고
// css 잡고
// 전체를 불러오는 기능
// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// axios api 함수
// function getMoviesNowPlaying() {
// return axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
//  {
//   accept: "application/json",
//   Authorization:
//     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmN2JmMDgwOWMxZGFlNTViYzgyMTkzNDcwMTQwMiIsIm5iZiI6MTcyMTg4NDQ4OS4wMDI2MTcsInN1YiI6IjY0Njk2MzUwYTUwNDZlMDBlNWI2NjBkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3fi44yAiziGcROaufG04pkpjYAp71lcMtXXM9bXbPY",
//  }
// ); -> 이 부분은 api.js 참고

export default MovieList;
