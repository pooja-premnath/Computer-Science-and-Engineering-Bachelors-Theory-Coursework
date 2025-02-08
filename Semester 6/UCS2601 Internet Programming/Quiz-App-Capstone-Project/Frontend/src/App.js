import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./components/AuthPage";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/users/:id" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
