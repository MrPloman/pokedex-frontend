import React, {useState, useEffect, useReducer} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {BackgroundComponent} from "../../components/BackgroundComponent/BackgroundComponent";
import "./LoginPage.scss";
import {useForm} from "react-hook-form";
import {PATTERNS} from "../../config/environment/patterns";

import {AuthLoaderComponent} from "../../components/AuthLoaderComponent/AuthLoaderComponent";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";
import {authReducer} from "../../reducers/authReducer";
import {NavbarAuthComponent} from "../../components/NavbarAuthComponent/NavbarAuthComponent";

export const LoginPage = () => {
  const [tokenState, dispatchToken] = useReducer(authReducer, {});
  const {register, handleSubmit, errors} = useForm({});
  const {loginTrainer} = PokedexApiRequests();
  const [introState, setIntroState] = useState(true);
  const [loadingState, setLoadingState] = useState(false);
  const history = useHistory();
  const intro = () => {
    setTimeout(() => {
      setIntroState(false);
      localStorage.setItem("introAlreadySeen", true);
    }, 17000);
  };

  const onSubmit = (d) => {
    loginTrainer(d)
      .then(({data}) => {
        if (data.result.status === 200) {
          const action = {
            type: "SET_TOKEN",
            payload: {token: data.result.data.token},
          };
          dispatchToken(action);
          history.push("/list");
        }
      })
      .catch((e) => {});
    /* setLoadingState(true); */
  };

  useEffect(() => {
    let introSeen = localStorage.getItem("introAlreadySeen");
    if (introSeen === null || introSeen === false) {
      intro();
    } else {
      setIntroState(false);
    }
  }, []);

  return (
    <>
      {introState ? (
        <div className="animate__animated animate__fadeIn">
          <BackgroundComponent></BackgroundComponent>
        </div>
      ) : (
        <div className="login-content">
          <div className="login-content-navbar">
            <NavbarAuthComponent></NavbarAuthComponent>
          </div>
          {!loadingState ? (
            <div className="login-content-center animate__animated animate__fadeIn">
              <h1>Welcome to Pokedex App!</h1>
              <div className="login-content-center-box">
                <div className="login-content-center-box-top">
                  <h3>Login</h3>
                </div>
                <div className="login-content-center-box-center">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="login-content-center-box-center-form"
                  >
                    <div className="login-content-center-box-center-form-field">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Introduce an email..."
                        ref={register({
                          required: true,
                          pattern: PATTERNS.email,
                        })}
                      />
                      {errors.email && (
                        <p className="input-error">
                          You must introduce a valid email
                        </p>
                      )}
                    </div>

                    <div className="login-content-center-box-center-form-field">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Introduce a valid password"
                        ref={register({
                          required: true,
                          pattern: PATTERNS.password,
                        })}
                      />
                      {errors.password && (
                        <p className="input-error">
                          You must introduce a password with 8 characters,
                          lowercase and uppercase letters and numbers.
                        </p>
                      )}
                    </div>
                    <div className="login-content-center-box-center-form-questions">
                      <div className="login-content-center-box-center-form-questions-each">
                        <h6>
                          Don't you remember who are you?
                          <span>
                            <NavLink className="navlink" exact to="/recovery">
                              Recovery your password!
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
                      type="submit"
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
