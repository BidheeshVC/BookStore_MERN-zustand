// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import LoginPage from '../pages/LoginPage';
// // import Login from './Login'


// const Signup = () => {
//     const [openLogin, setOpenlogin] = useState(false)

//     const openLoginModal = () => {
//         alert("open modal clicked")

//         setOpenlogin(true)
//     };

//     return (
//         <>
//             <div className='flex h-screen items-center justify-center'>
//                 <div id="my_modal_3" className="">
//                     <div className="model-box">
//                         <form method="dialog">
//                             {/* if there is a button in form, it will close the modal */}
//                             <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//                         </form>
//                         <h3 className="font-bold text-lg">Signup</h3>
//                         {/* Name */}
//                         <div className='mt-4 space-y-2'>
//                             <span>Name</span>
//                             <br />
//                             <input type="text"
//                                 placeholder="Enter your fullname"
//                                 className='w-80 px-3 py-1 border rounded-md outline-none' />
//                         </div>
//                         {/* Email */}
//                         <div className='mt-4 space-y-2'>
//                             <span>Email</span>
//                             <br />
//                             <input type="email"
//                                 placeholder="Enter your email"
//                                 className='w-80 px-3 py-1 border rounded-md outline-none' />
//                         </div>
//                         {/* Password */}
//                         <div className='mt-4 space-y-2'>
//                             <span>Password</span>
//                             <br />
//                             <input type="text"
//                                 placeholder="Enter your password"
//                                 className='w-80 px-3 py-1 border rounded-md outline-none' />
//                         </div>
//                         {/* Button */}
//                         <div className='flex justify-around mt-4'>
//                             <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
//                             <p>Have Account ? {" "}
//                                 <Link to='/login'>
//                                 <button
//                                     className='underline text-blue-500 cursor-pointer'
//                                 // onClick={openLoginModal}
//                                 >Login
//                                 </button> {" "}
//                                 </Link>

//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* {openLogin && <LoginPage />} */}
//         </>
//     )
// }

// export default Signup


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