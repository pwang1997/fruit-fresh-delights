import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/Login";
import SignUp from "../pages/Signup";

export default function Router() {
  return (
    <Routes>
      <Route key="index" path="/" element={<Home />} />
      <Route key="login" path="/login" element={<LogIn />} />
      <Route key="signup" path="/signup" element={<SignUp />} />
    </Routes>
  );
}
