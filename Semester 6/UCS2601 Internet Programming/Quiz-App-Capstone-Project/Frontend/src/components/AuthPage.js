import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthPage.css";

export default function AuthPage() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(false);
  const [err, setError] = useState("");
  const navigate = useNavigate();

  function verifyAdmin(password) {
    axios
      .post("http://localhost:3001/verifyAdmin", { password: password })
      .then((response) => {
        navigate("/admin", { state: { id: response.data._id } });
      })
      .catch((err) => {
        setError("Wrong password!");
        setTimeout(() => {
          setError("");
        }, 1500);
      });
  }

  function verifyUser(username, password) {
    axios
      .post("http://localhost:3001/verifyUser", {
        username: username,
        password: password,
      })
      .then((response) => {
        navigate(`users/${response.data._id}`, {
          state: { username: response.data.username },
        });
      })
      .catch((err) => {
        setError("Check username or password!");
        setTimeout(() => {
          setError("");
        }, 1500);
      });
  }

  return (
    <div className="authDiv">
      <div
        style={{
          textAlign: "center",
          fontSize: "x-large",
          fontFamily:
            "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande','Lucida Sans', Arial, sans-serif",
        }}
      >
        Welcome to the Quiz App!
      </div>
      <div id="buttons">
        <button
          className="authButton"
          id="admin"
          onClick={() => {
            setAdmin(true);
            setUser(false);
          }}
        >
          Login as admin
        </button>
        <button
          className="authButton"
          id="user"
          onClick={() => {
            setAdmin(false);
            setUser(true);
          }}
        >
          Login as user
        </button>
      </div>
      {admin ? (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <input
            className="inputType"
            type="password"
            placeholder="Enter admin password"
            id="adminPassword"
          />
          <div style={{ marginTop: "25px" }}>
            <button
              className="authButton"
              onClick={() => {
                verifyAdmin(document.getElementById("adminPassword").value);
              }}
            >
              Login
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>{err}</p>
          </div>
        </div>
      ) : null}
      {user ? (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <div style={{ marginBottom: "20px" }}>
            <input
              className="inputType"
              type="text"
              placeholder="Enter username"
              id="username"
            />
          </div>
          <input
            className="inputType"
            type="password"
            placeholder="Enter password"
            id="userPassword"
          />
          <div style={{ textAlign: "center", marginTop: "25px" }}>
            <button
              className="authButton"
              onClick={() => {
                verifyUser(
                  document.getElementById("username").value,
                  document.getElementById("userPassword").value
                );
              }}
            >
              Login
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>{err}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
