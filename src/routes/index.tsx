import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/Login";

export default function Router() {
  return (
    <Routes>
      <Route key="index" path="/" element={<Home />} />
      <Route key="login" path="/login" element={<LogIn />} />
    </Routes>
  );
}
