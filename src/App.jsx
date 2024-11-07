import React, { useState } from "react";
import Home from "./Pages/Home.jsx";
import Poll from "./Pages/Poll.jsx";

import { initialUsersList, stepsValues } from "./constants/index.js";
import FinalResultTable from "./Pages/FinalResultTable.jsx";

const App = () => {
  const [users, setUsers] = useState(initialUsersList);
  const [steps, setStep] = useState(stepsValues.init);

  return (
    <div className="p-[50px] flex flex-col h-screen">
      {steps === stepsValues.init && (
        <Home users={users} setUsers={setUsers} setStep={setStep} />
      )}
      {steps === stepsValues.poll && (
        <Poll users={users} setStep={setStep} setUsers={setUsers} />
      )}
      {steps === stepsValues.final && (
        <FinalResultTable users={users} setStep={setStep} setUsers={setUsers} />
      )}
    </div>
  );
};

export default App;
