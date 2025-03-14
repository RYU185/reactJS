import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import styled from "styled-components";
import Button from "../3_Props/Button";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Menu = styled.div`
  display: flex;
  gap: 2.5rem;
`;

// 원래는 탑메뉴를 a태그로 썼었지만 리액트는 a태그를 금지시함. 왜?
// a태그는 브라우저가 전체 페이지를 모두 새로고침해서 전부 메모리를 불러와야함
// 하지만 리액트는 SPA(Single Page Application)이므로 이 특성을 의미없게 만들어버림
// 컴포먼트"만" 바꾸고싶지, 전체 페이지를 새로고침해서 다시 불러오는건 최소한 리액트는 원하지 않는다!
// 때문에 <Link> 태그를 써야한다.

// if/switch의 원리가 들어간 Route
// 어떤 link를 누른다면 그에 맞는 Route를 Body에 넣어준다

const Body = styled.div``;

const ReactRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu>
          <Link to="/">
            <Button name="HOME" />
          </Link>
          <Link to="/about">
            <Button name="ABOUT" />
          </Link>
          <Link to="/about/1000">
            <Button name="ABOUT ID" />
          </Link>
          <Link to="/contact">
            <Button name="CONTACT" />
          </Link>
        </Menu>
        <Body>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}>
              <Route path=":id" element={<About />} />
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Body>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
