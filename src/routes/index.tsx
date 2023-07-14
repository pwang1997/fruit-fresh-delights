import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/Login";
import SignUp from "../pages/Signup";
import FruitDetail from "../pages/build-your-basket/FruitDetail";
import Fruits from "../pages/build-your-basket/Fruits";
import MetaFruitTable from "../pages/build-your-basket/MetaFruitTable";

export default function Router() {
  return (
    <Routes>
      <Route key="index" path="/" element={<MetaFruitTable />} />
      <Route key="login" path="/login" element={<LogIn />} />
      <Route key="signup" path="/signup" element={<SignUp />} />
      <Route key="fruit-type" path="/fruit-type/:meta_fruit" element={<Fruits />} />
      <Route key="fruit-type" path="/fruit-type/:meta_fruit/:detail_fruit" element={<FruitDetail />} />
    </Routes>
  );
}
