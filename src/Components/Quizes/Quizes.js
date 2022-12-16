import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "./QuizCard";

const Quizes = () => {
  const quizeLoader = useLoaderData();
  const quizes = quizeLoader.data;
  console.log(quizes);
  return (
    <div className="grid gap-4 md:grid-cols-4 p-4 m-10">
      {quizes.map((quizcard) => {
        return <QuizCard key={quizcard.id} quizcard={quizcard}></QuizCard>;
      })}
    </div>
  );
};

export default Quizes;
