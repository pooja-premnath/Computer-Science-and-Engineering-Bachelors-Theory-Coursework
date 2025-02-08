import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./AdminPage.css";

export default function AdminPage() {
  const [scores, setScores] = useState([]);
  const { state } = useLocation();
  useEffect(() => {
    if (state !== null) {
      axios.get("http://localhost:3001/getUserScores").then((response) => {
        setScores(response.data);
      });
    }
  }, []);
  if (state === null) {
    return <h1>unauthorised</h1>;
  }
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 id="titleText">Admin Dashboard</h1>
      {scores.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <td>
                  <b>Username</b>
                </td>
                <td>
                  <b>Score</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {scores.map((item) => {
                return (
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No scores to display!</p>
      )}
    </div>
  );
}
