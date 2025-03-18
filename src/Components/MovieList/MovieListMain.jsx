import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieWrapper from "./MovieWrapper";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import Mypage from "./Mypage";
import Login from "./Login";
import styled from "styled-components";
import Navbar from "./Navbar";
import Error from "./Error";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const Section = styled.div`
  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;
const Menu = styled.div`
  width: 100%;
`;
const ContentBox = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const Footer = styled.div``;

function MovieListMain() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Section>
            <Menu>
              <Navbar></Navbar>
            </Menu>
            <ContentBox>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<MovieWrapper />}>
                  <Route index element={<MovieList />} />
                  {/* index : "부모의 주소가 같으면", 여기서는 path="/movie"와 같은 뜻 */}
                  {/* /movie에서는 movieWrapper와 MovieList가 떠있고
                  /movie:id 있을때는 MovieWrapper와 MovieDetail이 같이 떠야함 */}
                  {/* 부모 컴포먼트에서 "Outlet" 사용 */}
                  <Route path=":id" element={<MovieDetail />} />
                </Route>
                <Route path="/search" element={<Search />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Error />} />
                {/*  *:"위에 있는 url이름이 아니면" 이라는 뜻 */}
              </Routes>
            </ContentBox>
          </Section>
          <Footer></Footer>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default MovieListMain;
