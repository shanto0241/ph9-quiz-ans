import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const QuizDetails = () => {
  const loader = useLoaderData();
  data = loader.data.questions;
  console.log(data);
  return (
    <div>
      {data.map((questionSet) => {
        console.log(questionSet.question);
        return (
          <Questions key={questionSet.id} questionSet={questionSet}></Questions>
        );
      })}
    </div>
  );
};

export default QuizDetails;
