import React, { useState } from "react";
import Button from "../Component/Button.jsx";
import ImgHome from "../assets/ImgHome.png";
import { stepsValues } from "../constants/index.js";
import Input from "../Component/Input.jsx";

const Home = ({ users, setUsers, setStep }) => {
  const handleSetName = (e) => {
    const updatedUsers = [...users];
    updatedUsers[e.target.name] = {
      ...updatedUsers[e.target.name],
      name: e.target.value,
    };
    setUsers(updatedUsers);
  };

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-center text-xl mb-8">
        Інтегрована діагностика психофізичної адаптації та координації у
        гандболі
      </h1>
      <div className="flex gap-8 justify-between mb-4 flex-grow">
        <div className="flex flex-col justify-between">
          <img
            className="max-w-[300px] mx-auto mb-4"
            src={ImgHome}
            alt="Опис зображення"
          />
          <p className="">
            Вона виступає як мультіаспектний підхід до оцінювання візуомоторної
            співдії, що визначає не тільки ізольовані фізичні або психологічні
            здібності спортсменок, але й їхню інтеграцію, що вкрай необхідна для
            ефективної змагальної діяльності.
          </p>
        </div>
        <form className="flex flex-[1/4] flex-col gap-4 items-center">
          <h3>Додайте імена гравців</h3>
          {users.map((_, index) => (
            <label className="flex w-[190px]" key={index}>
              {index + 1}.
              <Input
                className="pl-2"
                name={index}
                placeholder="Ім'я"
                onChange={handleSetName}
              />
            </label>
          ))}
          {users.length < 10 && (
            <Button
              onClick={() =>
                setUsers((prev) => [
                  ...prev,
                  {
                    name: "",
                    result: {
                      1: { value: "", key: "" },
                      2: { value: "", key: "" },
                      3: { value: "", key: "" },
                      4: { value: "", key: "" },
                      5: { value: "", key: "" },
                      6: { value: "", key: "" },
                      7: { value: "", key: "" },
                      8: { value: "", key: "" },
                    },
                  },
                ])
              }
              type="button"
              size={"m"}
            >
              +
            </Button>
          )}
        </form>
      </div>

      <Button
        disabled={users.some(({ name }) => name === "")}
        className="mx-auto mt-auto disabled:cursor-not-allowed"
        size={"l"}
        onClick={() => setStep(stepsValues.poll)}
      >
        <span>Почати тест</span>
      </Button>
    </div>
  );
};

export default Home;
