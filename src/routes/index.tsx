import { Route, Routes } from "react-router-dom";
import LogIn from "../pages/Login";
import SignUp from "../pages/Signup";
import Basket from "../pages/basket/Basket";
import BundleFruits from "../pages/build-your-basket/BundleFruits";
import FruitDetail from "../pages/build-your-basket/FruitDetail";
import Fruits from "../pages/build-your-basket/Fruits";
import MetaFruitTable from "../pages/build-your-basket/MetaFruitTable";
import Account from "../pages/user-profile/Account";

export default function Router() {
  return (
    <Routes>
      <Route key="login" path="/login" element={<LogIn />} />
      <Route key="signup" path="/signup" element={<SignUp />} />

      <Route key="index" path="/" element={<MetaFruitTable />} />
      <Route key="fruit-type" path="/fruit-type/:meta_fruit" element={<Fruits />} />
      <Route key="fruit-type" path="/fruit-type/:meta_fruit/:detail_fruit" element={<FruitDetail />} />
      <Route key="fruit-type" path="/bundle/:bundleName" element={<BundleFruits />} />

      <Route key="basket" path="/basket" element={<Basket />} />
      <Route key="account" path="/account" element={<Account />} />
    </Routes>
  );
}
