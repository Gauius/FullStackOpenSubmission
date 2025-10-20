import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const DisplayAnecdote = ({ anecdote }) => <p>{anecdote}</p>;

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const vote = Array(anecdotes.length).fill(0);
  console.log("Anecdotes Length", anecdotes.length);

  const [anecdoteVote, setAnecdoteVote] = useState(vote);
  console.log(anecdoteVote);

  const handleNext = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    console.log(random);
  };

  const handleVote = () => {
    const copy = [...anecdoteVote];
    copy[selected] += 1;
    setAnecdoteVote(copy);
  };

  const maxVote = anecdoteVote.indexOf(Math.max(...anecdoteVote));
  const max = Math.max(...anecdoteVote);
  // console.log(anecdoteVote[selected]);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayAnecdote anecdote={anecdotes[selected]} />
      <p>Has {anecdoteVote[selected]} votes</p>
      <Button onClick={handleVote} text="Vote" />
      <Button onClick={handleNext} text="Next Anecdote" />
      <h1>Anecdote with most votes</h1>
      <DisplayAnecdote anecdote={anecdotes[maxVote]} />
      <p>Has {max} votes</p>
    </div>
  );
};

export default App;
