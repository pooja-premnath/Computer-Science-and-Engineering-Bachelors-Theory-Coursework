import { useState } from "react";
import { useLocation } from "react-router-dom";
import QuizPage from "./quizPage";
import "./UserPage.css";

export default function UserPage() {
  const { state } = useLocation();
  const [start, setStart] = useState(false);

  if (state === null) {
    return <h1>Unauthorised</h1>;
  } else {
    return (
      <div>
        {start ? (
          <QuizPage username={state.username} />
        ) : (
          <div id="startDiv">
            <p id="welcomeText">
              Welcome to the Quiz,{" "}
              {state.username.charAt(0).toUpperCase() + state.username.slice(1)}
              !
            </p>
            <div style={{ textAlign: "center" }}>
              <button id="startButton" onClick={() => setStart(true)}>
                Get Started →
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
