import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { check, next } from "../store/modules/score";
import { BlueButton } from "./BlueButton";
import { Progress } from "./Progress";
import styled from "styled-components";

const Img = styled.img`
  width: inherit;
`;
export default function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.score.quizs);
  const page = useSelector((state) => state.score.page);

  return (
    <>
      <h1 style={{ marginBottom: "50px" }}>{quiz[page - 1].q}</h1>
      <Img src={quiz[page - 1].img}></Img>
      {quiz[page - 1].a.map((item) => {
        return (
          <BlueButton
            text={item.text}
            key={item.text}
            clickEvent={() => {
              dispatch(check({ isCorrect: item.isCorrect }));
              dispatch(next());
            }}
          />
        );
      })}
      <Progress page={page} maxPage={quiz.length}></Progress>
    </>
  );
}
