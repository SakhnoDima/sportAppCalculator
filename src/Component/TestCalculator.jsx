import React from "react";
import { LEVELS } from "../constants/index.js";
import Input from "./Input.jsx";

const TestCalculator = ({ limits, users, setUsers, questionIndex }) => {
  const handleSetLevel = (e) => {
    const value = +e.target.value;

    for (const key in limits) {
      const { min, max } = limits[key];
      if (
        (min === undefined || value >= min) &&
        (max === undefined || value <= max)
      ) {
        const newUsers = users.map((user) => {
          if (user.name === e.target.name) {
            return {
              ...user,
              result: {
                ...user.result,
                [questionIndex]: { value, key },
              },
            };
          }
          return user;
        });

        setUsers(newUsers);
        break;
      }
    }
  };

  return (
    <div className="w-1/2">
      <p className="text-center mb-2">Результати</p>
      {users.map((user, index) => (
        <div className="flex gap-1 justify-between" key={index}>
          <label className="flex flex-row items-end justify-between gap-4 min-w-[200px] ">
            <p>
              {index + 1}.
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {user.name}
              </span>
            </p>

            <Input
              onChange={handleSetLevel}
              name={user.name}
              type="number"
              className="w-[45px] overflow-hidden text-ellipsis whitespace-nowrap"
              min="1"
              value={user.result[questionIndex]?.value || ""}
            />
          </label>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {LEVELS[user.result[questionIndex]?.key]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TestCalculator;
