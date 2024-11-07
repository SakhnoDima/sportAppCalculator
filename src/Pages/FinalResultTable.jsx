import React from "react";
import Button from "../Component/Button.jsx";
import {
  initialUsersList,
  LEVELS,
  questions,
  stepsValues,
} from "../constants/index.js";

const FinalResultTable = ({ setStep, users, setUsers }) => {
  const handleReset = () => {
    setStep(stepsValues.init);
    setUsers(initialUsersList);
  };

  const handleGetTotal = (user) => {
    const results = user.result;
    const keys = Object.values(results).map((item) => parseInt(item.key, 10));
    const sum = keys.reduce((acc, key) => acc + key, 0);
    const average = sum / keys.length;

    return LEVELS[Math.round(average)];
  };

  const styleItemClass = "p-2 border text-center";

  return (
    <div className="w-[900px] flex flex-col h-screen">
      <Button className="ml-auto mb-4" onClick={handleReset} size={"l"}>
        Почати заново
      </Button>

      <table>
        <thead>
          <tr>
            <th className={styleItemClass}>Ім'я гравця</th>
            {questions.map((_, index) => (
              <th key={index} className={styleItemClass}>
                Тест {index + 1}
              </th>
            ))}
            <th className={styleItemClass}>Результат</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className={styleItemClass}>{user.name}</td>
              {questions.map((_, index) => (
                <td className={styleItemClass}>
                  {LEVELS[user.result[index + 1].key]}
                </td>
              ))}
              <td className={styleItemClass}>{handleGetTotal(user)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinalResultTable;
