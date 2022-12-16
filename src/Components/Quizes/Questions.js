import React from "react";

const Questions = ({ questionSet }) => {
  const { options, question, correctAnswer } = questionSet;
  //   console.log(typeof correctAnswer);

  const handleClick = (option, correctAnswer) => {
    console.log(option + "clicked");
    if (option === correctAnswer) {
      alert("Correct");
    } else {
      alert("wrong");
    }
  };

  const showCorrectAns = () => {
    // console.log(correctAnswer);
    alert(correctAnswer);
  };

  return (
    <div className="m-auto w-8/12">
      <div className=" card m-4 pt-4 gap-2 bg-cyan-900">
        <div className="flex justify-between px-2 items-center">
          <h2 className="text-xl text-start text-slate-200">{question}</h2>
          <p onClick={showCorrectAns}>
            <small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </small>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 p-4 bg-gray-600 w-full m-auto">
          {options.map((option) => {
            return (
              <div>
                <button
                  className="btn btn-success items-center w-full "
                  onClick={() => handleClick(option, correctAnswer)}
                  key={option}
                  value="{option}"
                >
                  {option}
                </button>
              </div>
            );
          })}

          {/* <button
            className="btn btn-success   "
            id="answer-1"
            onClick={handleClick}
          >
            {options[0]}
          </button>
          <button
            className="btn btn-success "
            id="answer-2"
            onClick={handleClick}
          >
            {options[1]}
          </button>
          <button
            className="btn btn-success "
            id="answer-3"
            onClick={handleClick}
          >
            {options[2]}
          </button>
          <button
            className="btn btn-success "
            id="answer-4"
            onClick={handleClick}
          >
            {options[3]}
          </button> */}
          {/* <label>
            <input type="checkbox" />
            <span className="ml-2"> {options[0]}</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            <span className="ml-2"> {options[1]}</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            <span className="ml-2"> {options[2]}</span>
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default Questions;
