
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CircleArrowLeft } from "lucide-react";
import axios from 'axios';


const Signup = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   console.log('Signup attempt:', { name, email, password });
  // };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('SIGNUP attempt:', {fullname, email, password });
    axios.post("http://localhost:4001/user/signup", {fullname , email, password })
        .then((res) => {
            if (res.status == 201) {
                alert(res.data.message)
            }
            localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
          // console.log("error on catch:", err)
            alert(err.response.data.message)
            // alert("Internal server error")
        })


};

  return (
    <div className="hero min-h-screen bg-blue-500 relative">
      <Link
        to="/"
        className="absolute top-4 left-4 z-50 py-2 px-3 my-0.5 text-sm leading-none h-8 flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md shadow"
      >
        <CircleArrowLeft size={24} />
      </Link>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-800">Sign Up</h1>
          <p className="py-6 text-gray-600">
            Create your account and start your reading journey!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-lg bg-gray-50 border border-gray-200">
          <form className="card-body" onSubmit={handleSignup}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered border-gray-300 bg-white text-gray-800"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered border-gray-300 bg-white text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered border-gray-300 bg-white text-gray-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-none"
                type="submit"
              >
                Sign Up
              </button>
            </div>
            <div className="form-control mt-2">
              <p className="text-center text-gray-700">
                Already have an account?
                <Link to="/login" className="text-blue-600 ml-1">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Signup