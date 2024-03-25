import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { RiLockPasswordFill } from 'react-icons/ri';

export const SignupForm = ({ heading, onSignup, onLogin }) => {
  const [signupData, setSignupData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(true);

  const handleSignup = () => {
    console.log('Signing up:', signupData);
    onSignup && onSignup(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h1 className='form-heading'>{heading}</h1>
      <form className="d-flex flex-column align-items-center fs-5">
        <div className="form-group row w-100">
          <div className="col">
            <div className="input-with-icon">
              <MdEmail size={22} className="input-icon" />
              <input
                type="email"
                className="form-control rounded-pill"
                id="formEmail"
                placeholder="Enter Email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className="form-group row w-100">
          <div className="col">
            <div className="input-with-icon">
              <RiLockPasswordFill size={22} className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                className="form-control rounded-pill"
                id="formPassword"
                placeholder="Enter Password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              />
              <button
                type="button"
                className="toggle-eye-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEye size={22} className="toggle-eye-icon"/> : <FaEyeSlash size={22} className="toggle-eye-icon"/> }
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 container d-flex justify-content-between align-items-center px-4">
          <div className="form-check input-info d-flex align-items-center">
            <input type="checkbox" className="form-check-input my-auto" id="exampleCheck2" />
            <label className="form-check-label" htmlFor="exampleCheck2">Remember me</label>
          </div>
          <a href="#" className="input-info">
            Forgot Password?
          </a>
        </div>

        <div className="container d-flex mt-5">
          <button type="button" className="btn rounded-pill me-4 main-btn w-100" onClick={handleSignup}>
            Sign Up
          </button>

          <button type="button" className="btn rounded-pill side-btn w-100" onClick={onLogin}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};
