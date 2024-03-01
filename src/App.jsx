import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

import "./App.css";

const resultDefault = { years: "--", months: "--", days: "--" };

function App() {
  const [result, setResult] = useState(resultDefault);

  function handleResult(day, month, year) {
    const actualDate = new Date();
    const logic =
      (actualDate - new Date(`${month}/${day}/${year}`)) / 1000 / 60 / 60 / 24;

    const yearsCount = Math.floor(logic / 365);

    const monthCount = Math.floor((logic - (yearsCount * 365)) / 30);

    const daysCount = Math.floor((logic - (yearsCount * 365)) - (monthCount * 30));

    setResult({
      years: yearsCount,
      months: monthCount,
      days: daysCount,
    });
  }

  return (
    <div className="center">
      <main className="main">
        <UserInput
          handleResult={handleResult}
          setResult={() => setResult(resultDefault)}
        />
        <Result result={result} />
      </main>
    </div>
  );
}

export default App;
