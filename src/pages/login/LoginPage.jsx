import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {BackgroundComponent} from "../../components/BackgroundComponent/BackgroundComponent";
import {MainRouterComponent} from "../../components/MainRouterComponent/MainRouterComponent";
import "./LoginPage.scss";

import {AuthLoaderComponent} from "../../components/AuthLoaderComponent/AuthLoaderComponent";

export const LoginPage = () => {
  const [introState, setIntroState] = useState(true);
  const [loadingState, setLoadingState] = useState(false);
  const intro = () => {
    setTimeout(() => {
      setIntroState(false);
      localStorage.setItem("introAlreadySeen", true);
    }, 17000);
  };

  useEffect(() => {
    let introSeen = localStorage.getItem("introAlreadySeen");
    if (introSeen === null || introSeen === false) {
      intro();
    } else {
      setIntroState(false);
    }
  }, []);

  const login = () => {
    setLoadingState(true);
  };

  return (
    <>
      {introState ? (
        <div className="animate__animated animate__fadeIn">
          <BackgroundComponent></BackgroundComponent>
        </div>
      ) : (
        <div className="login-content">
          <div className="login-content-top">
            {/*             <MainRouterComponent></MainRouterComponent>
             */}
          </div>
          {!loadingState ? (
            <div className="login-content-center animate__animated animate__fadeIn">
              <h1>Welcome to Pokedex App!</h1>
              <div className="login-content-center-box">
                <div className="login-content-center-box-top">
                  <h3>Login</h3>
                </div>
                <div className="login-content-center-box-center">
                  <form className="login-content-center-box-center-form">
                    <div className="login-content-center-box-center-form-field">
                      <label>Email</label>
                      <input type="text" />
                    </div>

                    <div className="login-content-center-box-center-form-field">
                      <label>Password</label>
                      <input type="password" />
                    </div>
                    <div className="login-content-center-box-center-form-questions">
                      <div className="login-content-center-box-center-form-questions-each">
                        <h6>
                          Don't you remember who are you?
                          <span>
                            <NavLink className="navlink" exact to="/register">
                              Reset your password!
                            </NavLink>
                          </span>
                        </h6>
                      </div>
                      <div className="login-content-center-box-center-form-questions-each-right">
                        <h6>
                          Are you a new trainer?
                          <span>
                            <NavLink className="navlink" exact to="/register">
                              Go to Register!
                            </NavLink>
                          </span>
                        </h6>
                      </div>
                    </div>
                    <button
                      className="login-content-center-box-center-form-button"
                      onClick={() => {
                        login();
                      }}
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate__animated animate__fadeIn">
              <AuthLoaderComponent></AuthLoaderComponent>
            </div>
          )}
        </div>
      )}
    </>
  );
};
