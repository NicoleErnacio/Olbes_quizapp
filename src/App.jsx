import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What color is the sky on a sunny day?",
    options: ["Green", "Blue", "Pink", "Brown"],
    answer: "Blue",
  },
  {
    question: "How many eyes do you have?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "Which animal says \"moo\"?",
    options: ["Cow", "Cat", "Bird", "Fish"],
    answer: "Cow",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What do we drink when we are thirsty?",
    options: ["Sand", "Water", "Paper", "Soap"],
    answer: "Water",
  },
  {
    question: "What is the opposite of \"up\"?",
    options: ["Down", "Left", "Over", "Near"],
    answer: "Down",
  },
  {
    question: "Which one can fly?",
    options: ["Fish", "Dog", "Bird", "Turtle"],
    answer: "Bird",
  },
  {
    question: "What color is a fire truck usually?",
    options: ["Red", "White", "Green", "Purple"],
    answer: "Red",
  },
  {
    question: "How many fingers are on one hand?",
    options: ["4", "5", "6", "10"],
    answer: "5",
  },
  {
    question: "What do we wear on our feet?",
    options: ["Hat", "Gloves", "Shoes", "Scarf"],
    answer: "Shoes",
  },
];

function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const answered = selected !== null;
  const correctAnswer = questions[current].answer;

  const handleAnswer = (option) => {
    if (answered) return;
    setSelected(option);
    if (option === correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelected(null);
    setStarted(false);
  };

  const getButtonClass = (option) => {
    if (!answered) return "";
    if (option === correctAnswer) return "correct";
    if (option === selected) return "wrong";
    return "";
  };

  // Welcome screen
  if (!started) {
    return (
      <div className="page">
        <div className="quiz welcome">
          <div className="welcome-icon">🧠</div>
          <h1>Welcome to the Quiz App!</h1>
          <p className="welcome-sub">
            Ready to test your knowledge? Let's see how many you can get right.
          </p>

          <ul className="welcome-list">
            <li>📝 {questions.length} multiple-choice questions</li>
            <li>✅ The correct answer shows after each question</li>
            <li>🏆 See your final score at the end</li>
          </ul>

          <button className="start" onClick={() => setStarted(true)}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  // Final score screen
  if (finished) {
    return (
      <div className="page">
        <div className="quiz">
          <div className="welcome-icon">🏆</div>
          <h1>Quiz Complete!</h1>
          <p className="score">
            Your score: {score} / {questions.length}
          </p>
          <button className="start" onClick={restart}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Question screen
  return (
    <div className="page">
      <div className="quiz">
        <h2>
          Question {current + 1} / {questions.length}
        </h2>
        <p className="question">{questions[current].question}</p>

        {questions[current].options.map((option) => (
          <button
            key={option}
            className={getButtonClass(option)}
            onClick={() => handleAnswer(option)}
            disabled={answered}
          >
            {option}
          </button>
        ))}

        {answered && (
          <div className="result">
            <p>{selected === correctAnswer ? "✅ Correct!" : "❌ Wrong!"}</p>
            <p>
              Correct answer: <strong>{correctAnswer}</strong>
            </p>
            <button className="next" onClick={handleNext}>
              {current + 1 < questions.length ? "Next" : "See Score"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;