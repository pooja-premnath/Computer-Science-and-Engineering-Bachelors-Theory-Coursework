import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./QuizPage.css";

export default function QuizPage(props) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(15);
  const [answer, setAnswer] = useState([]);
  var myInterval = 0;
  useEffect(() => {
    console.log("ajbdlshbdsbdjk");
    axios
      .get("http://localhost:3001/getQuestions")
      .then((response) => {
        setQuestions(response.data);
        var tempAnswers = [];
        response.data.forEach((item) => tempAnswers.push(item.Answer));
        setAnswer(tempAnswers);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    myInterval = setInterval(() => {
      if (counter === 0) {
        clearInterval(myInterval);
        if (index < 4) {
          setTimeout(() => {
            setIndex(index + 1);
            setCounter(15);
          }, 1000);
        } else {
          updateScore();
          alert("Congrats! Your total score is " + score);
        }
      } else setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [counter]);

  function updateScore() {
    axios
      .post("http://localhost:3001/updateScore", {
        score: score,
        username: props.username,
      })
      .catch((err) => console.log(err));
  }

  return questions.length > 0 ? (
    <div>
      <div className="question">
        <div>
          <div id="questionLeft">
            <div style={{ display: "flex" }}>
              <span id="questionFont">Question {index + 1}</span>/
              {questions.length}
              <div id="counter">{counter}</div>
            </div>
            <div id="question">{questions[index].Question}</div>
            <div id="questionRight">
              <button
                className={
                  answer[index] === "A"
                    ? counter !== 0
                      ? "questionChoice"
                      : "correctChoice"
                    : "questionChoice"
                }
                disabled={counter === 0}
                onClick={() => {
                  if (answer[index] === "A") {
                    setScore(score + 1);
                    setCounter(0);
                  } else {
                    setCounter(0);
                  }
                }}
              >
                {questions[index].Choice_A}
              </button>
              <button
                className={
                  answer[index] === "B"
                    ? counter !== 0
                      ? "questionChoice"
                      : "correctChoice"
                    : "questionChoice"
                }
                disabled={counter === 0}
                onClick={() => {
                  if (answer[index] === "B") {
                    setScore(score + 1);
                    setCounter(0);
                  } else {
                    setCounter(0);
                  }
                }}
              >
                {questions[index].Choice_B}
              </button>
              <button
                className={
                  answer[index] === "C"
                    ? counter !== 0
                      ? "questionChoice"
                      : "correctChoice"
                    : "questionChoice"
                }
                disabled={counter === 0}
                onClick={() => {
                  if (answer[index] === "C") {
                    setScore(score + 1);
                    setCounter(0);
                  } else {
                    setCounter(0);
                  }
                }}
              >
                {questions[index].Choice_C}
              </button>
              <button
                className={
                  answer[index] === "D"
                    ? counter !== 0
                      ? "questionChoice"
                      : "correctChoice"
                    : "questionChoice"
                }
                disabled={counter === 0}
                onClick={() => {
                  if (answer[index] === "D") {
                    setScore(score + 1);
                    setCounter(0);
                  } else {
                    setCounter(0);
                  }
                }}
              >
                {questions[index].Choice_D}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
