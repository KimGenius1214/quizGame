import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PinkButton } from "./components/PinkButton";
import { next, reset } from "./store/modules/score";
import styled from "styled-components";
import Quiz from "./components/Quiz";

const Header = styled.h1`
  margin-bottom: 30px;
`;

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
`;

const SubHeader = styled.h2`
  font-size: 1em;
  color: #a3b0b7;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: inherit;
  margin-bottom: 30px;
`;

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`;

function App() {
  const page = useSelector((state) => state.score.page);
  const score = useSelector((state) => state.score.score);
  const quiz = useSelector((state) => state.score.quizs);
  const dispatch = useDispatch();
  return (
    <>
      {page === 0 && (
        <Main>
          <Image src={"/city/1.jpg"} alt="도시풍경" />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader>진정한 수도 고인물도 100점을 맞기 어렵습니다!</SubHeader>
          <PinkButton
            text="테스트 시작!"
            clickEvent={() => dispatch(next())}
          ></PinkButton>
        </Main>
      )}
      {page > 0 && page <= quiz.length && (
        <Main>
          <Quiz></Quiz>
        </Main>
      )}
      {page > quiz.length && (
        <Main>
          <Header>당신의 수도 퀴즈 점수는?</Header>
          <Score className="score">{score + "점"}</Score>
          <SubHeader></SubHeader>
          <PinkButton
            text="다시 테스트하기!"
            clickEvent={() => dispatch(reset())}
          ></PinkButton>
        </Main>
      )}
    </>
  );
}

export default App;
