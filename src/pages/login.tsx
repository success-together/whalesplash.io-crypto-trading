import Image from 'next/image';
import Link from 'next/link';
import React from "react";

import components from "../images/components.png";
// image

const Login = ({ history }: {history: any}) => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="authincation h-full min-h-screen flex">
      <div className="sm:w-[600px] md:w-[800px] h-4/5 grid sm:grid-cols-2 gap-4 m-auto authincation-content">
        <div className="auth-form">
          <div className="">
            <div className="text-center mb-3">
              <h2 className="text-[25px]/[40px]">Create Your Account</h2>
              <h4 className="text-left mb-4 text-[14px]/[150%]">Setting up on account takes less than 1 minute.</h4>
            </div>
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="input-group-select mb-4">
                <div className="flex items-center">
                  <div className="py-[7px] px-[20px] rounded-2xl active"><span className="text-[14px]/[21px]">Login</span></div>
                  <div className="py-[7px] px-[20px] rounded-2xl"><span className="text-[14px]/[21px]">SignUp</span></div>
                </div>
              </div>
              <div className="input-group mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>              
                <input
                  type="password"
                  className="form-control"
                  defaultValue="hello@example.com"
                />
              </div>
              <div className="input-group mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>              
                <input
                  type="password"
                  className="form-control"
                  defaultValue="hello@example.com"
                />
              </div>
              <div className="input-group mb-2">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>              
                <input
                  type="password"
                  className="form-control"
                  defaultValue="hello@example.com"
                />
              </div>
              <div className="form-row d-flex justify-content-between mt-4 mb-2">
                <div className="form-group">
                  <div className="custom-control custom-checkbox ml-1 ">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="basic_checkbox_1"
                    /> 
                    <label
                      className="custom-control-label"
                      htmlFor="basic_checkbox_1"
                    >
                      Remember my preference
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <Link className="" href="./page-forgot-password">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Sign Me In
                </button>
              </div>
            </form>
            <div className="new-account mt-3">
              <p className="">
                Don't have an account?{" "}
                <Link className="text-primary" href="./page-register">
                  Sign up
                </Link>
              </p>
            </div>
          </div>            
        </div>
        <div className="flex justify-center">
          <div className="text-center content-center flex justify-center    ">
            <div className="text-center mb-3 flex justify-center">
                <Image src={components} alt="components" width={300}/>
            </div>
            <span className="logo-text">Trade Whales</span><br />
            <span className="logo-text-sub">with whalesplash.ai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
   // <div className="authincation h-100 p-meddle">
   //    <div className="container h-100 ">
   //      <div className="row justify-content-center align-items-center">
   //        <div className="col-md-10">
   //          <div className="authincation-content">
   //            <div className="row no-gutters">
   //              <div className="col-sm-6">

   //              </div>
   //              <div className="col-sm-6 d-flex align-items-center justify-content-center">
   //                <div className="">
   //                  <div className="text-center mb-3 d-flex justify-content-center">
   //                      <Image src={components} alt="components" width={300}/>
   //                  </div>
   //                  <h4 className="text-center mb-4 ">Trade Whales</h4>
   //                  <h5 className="text-center mb-4 ">with whalesplash.ai</h5>
   //                </div>
   //              </div>
   //            </div>
   //          </div>
   //        </div>
   //      </div>
   //    </div>
   //  </div>