import React from "react";
import Button from "../Component/Button.jsx";
import {
  initialUsersList,
  questions,
  stepsValues,
} from "../constants/index.js";

import { useState } from "react";
import SingleTest from "../Component/SingleTest.jsx";
import TestCalculator from "../Component/TestCalculator.jsx";

const Poll = ({ setStep, users, setUsers }) => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    index + 1 === questions.length
      ? setStep(stepsValues.final)
      : setIndex(index + 1);
  };

  const handleReset = () => {
    setStep(stepsValues.init);
    setUsers(initialUsersList);
  };

  return (
    <div className="w-[900px] flex flex-col h-screen">
      <Button className="ml-auto mb-4" onClick={handleReset} size={"l"}>
        Почати заново
      </Button>
      <div className="flex gap-8 justify-between mb-4 flex-grow">
        <SingleTest test={questions[index]} />

        <TestCalculator
          limits={questions[index].indicators}
          users={users}
          setUsers={setUsers}
          questionIndex={index + 1}
        />
      </div>
      <Button className="mx-auto mt-auto" size="l" onClick={handleClick}>
        <span>Наступний тест</span>
      </Button>
    </div>
  );
};

export default Poll;
