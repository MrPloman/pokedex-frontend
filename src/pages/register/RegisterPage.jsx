import React from "react";
import {NavLink} from "react-router-dom";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  const register = () => {};
  return (
    <>
      <div className="register-content">
        <div className="register-content-top"></div>

        <div className="register-content-center">
          <h1>Don't you have an account?</h1>
          <div className="register-content-center-box">
            <div className="register-content-center-box-top">
              <h3>Register</h3>
            </div>
            <div className="register-content-center-box-center">
              <form className="register-content-center-box-center-form">
                <div className="register-content-center-box-center-form-row">
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Email</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="register-content-center-box-center-form-row">
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Name</label>
                    <input type="text" />
                  </div>
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Surname</label>
                    <input type="password" />
                  </div>
                </div>
                <div className="register-content-center-box-center-form-row">
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Password</label>
                    <input type="password" />
                  </div>
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Repeat Password</label>
                    <input type="password" />
                  </div>
                </div>

                <div className="register-content-center-box-center-form-questions">
                  <div className="register-content-center-box-center-form-questions-each">
                    <h6>
                      Don't you remember who are you?
                      <span>
                        <NavLink className="navlink" exact to="/register">
                          Reset your password!
                        </NavLink>
                      </span>
                    </h6>
                  </div>
                  <div className="register-content-center-box-center-form-questions-each-right">
                    <h6>
                      Do you already have an account?
                      <span>
                        <NavLink className="navlink" exact to="/login">
                          Go to Login!
                        </NavLink>
                      </span>
                    </h6>
                  </div>
                </div>
                <button
                  className="register-content-center-box-center-form-button"
                  onClick={() => {
                    register();
                  }}
                >
                  Register Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
