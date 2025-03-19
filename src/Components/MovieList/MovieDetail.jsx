import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieCreditById, getMovieDetailById, IMG_PATH } from "./api";
// import { IconBack } from "./icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Headers = styled.div`
  width: 100%;
  color: dodgerblue;
  display: flex;
  justify-content: space-between;
`;

// const Icon = styled.div`
//   cursor: pointer;
// `;
const Img = styled.img`
  width: 100%;
  margin: 10px 0 10px 0;
`;
const Content = styled.div`
  font-size: 1rem;
  color: #333;
  line-height: 30px;
`;

function MovieDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [credit, setCredit] = useState(null);
  const { id } = useParams(); //
  const navigate = useNavigate();

  useEffect(() => {
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    try {
      let response = await getMovieDetailById(id);
      console.log(response.data);
      setData(response.data);
      response = await getMovieCreditById(id);
      console.log(response.data);
      setCredit(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("네트워크 오류로 정상적인 동작이 불가능합니다.");
    }
  }

  return (
    <div>
      <Container>
        {loading ? (
          "로딩중..."
        ) : (
          <>
            <Headers>
              <h1>{data.title}</h1>
              {/* <Icon>
                <IconBack />
              </Icon> */}
            </Headers>
            <Img src={IMG_PATH + data.backdrop_path} />
            <Content>
              <p>타이틀:{data.title}</p>

              <p>
                장르:{" "}
                {data.genres
                  .map((g) => g.name)
                  .filter((name) => name)
                  .join(", ")}
              </p>
              <p>개봉일: {data.release_data}</p>
              <p>상영시간: {data.runtime + "분"}</p>
              <p>
                감독 :{" "}
                {credit.crew
                  .filter((c) => c.job == "Director")
                  .map((c) => c.name)
                  .filter((name) => name)
                  .join(",  ")}
              </p>
              <p>
                배우 :{" "}
                {credit.cast
                  .slice(1, 10)
                  .map((c) => c.name)
                  .filter((name) => name)
                  .join(", ")}
              </p>
              <p>영화설명: {data.overview}</p>
            </Content>
          </>
        )}
      </Container>
    </div>
  );
}

export default MovieDetail;
