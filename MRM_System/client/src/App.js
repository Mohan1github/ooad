import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import PhamacyDashboard from "./pages/PhamacyDashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserFront from "./pages/UserFront";
import PrivateRoutes from "./routes/ProtectedRoutes";
import MyApp from "./pages/AdminSignin";
import Adminregister from "./pages/adminregister";
import Orders from "./pages/orders";
import SignIn from "./pages/usersignin";
import SignUp from "./pages/usersignup";
const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<PhamacyDashboard />} path="/pd" exact />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route element={<UserFront />} path="/" />
          <Route element={<Orders />} path="orders/:id/medicine" />
          <Route element={<SignIn />} path="/user/login" />
          <Route element={<SignUp />} path="/user/signup" />
          <Route element={<MyApp />} path="/admin-login" />
          <Route element={<Adminregister />} path="/admin-register" />
          <Route element={<AdminDashboard />} path="/ad" />
          <Route element={<Signin />} path="/pharmacy-login" />
          <Route element={<Signup />} path="/pharmacy-register" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
