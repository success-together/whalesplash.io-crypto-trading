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
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-10">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-6">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <h2>Create Your Account</h2>
                      <h4 className="text-center mb-4 ">Setting up on account takes less than 1 minute.</h4>
                    </div>
                    <form onSubmit={(e) => submitHandler(e)}>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          defaultValue="hello@example.com"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue="Password"
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
                <div className="col-xl-6">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                        <Image src={components} alt="components" width={300} height={100}/>
                    </div>
                    <h4 className="text-center mb-4 ">Trade Whales</h4>
                    <h5 className="text-center mb-4 ">with whalesplash.ai</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
