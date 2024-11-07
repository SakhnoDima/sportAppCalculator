import React from "react";

const SingleTest = ({ test }) => {
  return (
    <div className="w-1/2 flex flex-col justify-between">
      <h2 className="text-lg text-center mb-4">{test.title}</h2>
      <img
        className="w-[470px] h-[180px] mx-auto mb-4"
        src={test.img}
        alt={test.title}
      />
      <p>
        <span className="font-bold mr-1">Позиція:</span>
        {test.parameters.position}
      </p>
      <p>
        <span className="font-bold mr-1">Завдання:</span>
        {test.parameters.task}
      </p>
      <p>
        <span className="font-bold mr-1">Оцінка результатів:</span>
        {test.parameters.evaluation}
      </p>
    </div>
  );
};

export default SingleTest;
