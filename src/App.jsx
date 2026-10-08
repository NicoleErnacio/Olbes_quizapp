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