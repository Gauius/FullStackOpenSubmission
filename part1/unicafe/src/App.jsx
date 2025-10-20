import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StaticticsLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

const Statictics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good * 1 + bad * -1) / all;
  let positive = (good / all) * 100;
  if (all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StaticticsLine text="Good" value={good} />
      <StaticticsLine text="Neutral" value={neutral} />
      <StaticticsLine text="Bad" value={bad} />
      <StaticticsLine text="All" value={all} />
      <StaticticsLine text="Average" value={average} />
      <div>Positive {positive} %</div>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <h1>Statistics</h1>
      <Statictics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
