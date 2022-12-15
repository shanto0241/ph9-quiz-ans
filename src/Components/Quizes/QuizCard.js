import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quizcard }) => {
  const { id, name, logo, total } = quizcard;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quizes/${id}`);
  };
  return (
    <div className="card card-side bg-gray-700 shadow-xl gap-4">
      <figure className="p-2">
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="mb-4">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title text-sm">quizes: {total}</h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-sm text-sm" onClick={handleNavigate}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
