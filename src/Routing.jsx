import React from 'react';
import { Routes, Route} from "react-router-dom";

//user
import Loader from "./components/UserAccount/Loader/Loader";
import Register from "./components/UserAccount/Register/Register";
import Login from './components/UserAccount/Login/Login';
import RegisterSuccess from './components/UserAccount/RegisterSuccess/RegisterSuccess';


const Routing = () => {
  return (
    <Routes>
        {/* user routes  */}
      <Route path="*" element={<Loader />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}

export default Routing