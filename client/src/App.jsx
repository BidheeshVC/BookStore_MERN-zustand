import React from "react";
// import Home from "./components/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useAuth } from "./context/AuthProvider";

const App = () => {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <div className='dark:bg-slate-900 dark:text-white bg-white text-dark'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to='/signup'/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
