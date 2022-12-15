import React from "react";

const Questions = ({ questionSet }) => {
  const { options, question } = questionSet;
  console.log(questionSet);
  return (
    <div className="m-auto w-8/12">
      <div className=" card m-4 pt-4 gap-2 bg-cyan-900">
        <div className="flex justify-between px-2">
          <h2 className="text-xl text-start text-slate-200">{question}</h2>
          <p>
            <small>o</small>
          </p>
        </div>

        <ol className="text-start pl-4 pt-4 bg-gray-600">
          <li className="mb-2">a. {options[0]}</li>
          <li className="mb-2">b. {options[1]}</li>
          <li className="mb-2">c. {options[2]}</li>
        </ol>
      </div>
    </div>
  );
};

export default Questions;
