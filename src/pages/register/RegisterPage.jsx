import React, {useEffect, useState, useRef} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";
import {useForm} from "react-hook-form";
import "./RegisterPage.scss";
import {PATTERNS} from "../../config/environment/patterns";
import {AuthLoaderComponent} from "../../components/AuthLoaderComponent/AuthLoaderComponent";

export const RegisterPage = () => {
  const {registerTrainer} = PokedexApiRequests();
  const {register, handleSubmit, watch, errors} = useForm({});
  const [loadingState, setLoadingState] = useState(false);
  const password = useRef({});
  const history = useHistory();

  password.current = watch("password", "");
  const onSubmit = (data) => {
    setLoadingState(true);
    registerTrainer(data)
      .then(({data, status}) => {
        if (status === 200) {
          setTimeout(() => {
            setLoadingState(false);
            history.push("/login");
          }, 1000);
        } else if (status === 400) {
          setLoadingState(false);
          console.log(data, status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="register-content animate__animated animate__fadeIn">
        <div className="register-content-top"></div>
        {!loadingState ? (
          <div className="register-content-center">
            <h1>Don't you have an account?</h1>
            <div className="register-content-center-box">
              <div className="register-content-center-box-top">
                <h3>Register</h3>
              </div>
              <div className="register-content-center-box-center">
                <form
                  className="register-content-center-box-center-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="register-content-center-box-center-form-row">
                    <div className="register-content-center-box-center-form-row-field">
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
                  </div>
                  <div className="register-content-center-box-center-form-row">
                    <div className="register-content-center-box-center-form-row-field">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Introduce your name..."
                        ref={register({
                          required: true,
                          pattern: PATTERNS.name,
                        })}
                      />
                      {errors.name && (
                        <p className="input-error">
                          You must introduce a real name
                        </p>
                      )}
                    </div>

                    <div className="register-content-center-box-center-form-row-field">
                      <label>Surname</label>
                      <input
                        type="text"
                        name="surname"
                        placeholder="Introduce your surname..."
                        ref={register({
                          required: true,
                          pattern: PATTERNS.surname,
                        })}
                      />
                      {errors.surname && (
                        <p className="input-error">
                          You must introduce a real surname
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="register-content-center-box-center-form-row">
                    <div className="register-content-center-box-center-form-row-field">
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
                    <div className="register-content-center-box-center-form-row-field">
                      <label>Repeat Password</label>
                      <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Introduce the same password..."
                        ref={register({
                          required: true,
                          pattern: PATTERNS.repeatPassword,
                          validate: (value) =>
                            value === password.current ||
                            "The passwords do not match",
                        })}
                      />
                      {errors.repeatPassword && (
                        <p className="input-error">
                          You must repeat the same password.
                        </p>
                      )}
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
                  <div className="register-content-center-box-center-form-row">
                    <input
                      className="register-content-center-box-center-form-button"
                      type="submit"
                      value="Register!"
                    />
                  </div>
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
    </>
  );
};
