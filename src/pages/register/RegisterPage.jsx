import React, {useEffect, useState, useRef} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";
import {useForm} from "react-hook-form";
import "./RegisterPage.scss";
import {PATTERNS} from "../../config/environment/patterns";
import {AuthLoaderComponent} from "../../components/AuthLoaderComponent/AuthLoaderComponent";
import {ModalComponent} from "../../components/ModalComponent/ModalComponent";
import {NavbarAuthComponent} from "../../components/NavbarAuthComponent/NavbarAuthComponent";

export const RegisterPage = () => {
  const {registerTrainer} = PokedexApiRequests();
  const {register, handleSubmit, watch, errors} = useForm({});
  const [loadingState, setLoadingState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const password = useRef({});
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };
  const configModal = {
    title: "Registered Succesfully!",
    message:
      "You've been registered succesfully. We've sent a verification-email to your email, check your inbox and activate your account to login.",
    actions: [{label: "Go To Login!", action: goToLogin}],
  };

  password.current = watch("password", "");
  const onSubmit = (data) => {
    setLoadingState(true);
    registerTrainer(data)
      .then(({data, status}) => {
        if (status === 200) {
          setLoadingState(false);
          if (loadingState === false) {
            setModalState(true);
          }
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
      <div className="register-content">
        <div className="register-content-navbar">
          <NavbarAuthComponent></NavbarAuthComponent>
        </div>

        <div className="register-content-center animate__animated animate__fadeIn">
          <h1>Don't you have an account?</h1>
          {!loadingState ? (
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
                          <NavLink className="navlink" exact to="/recovery">
                            Recovery your password!
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
                    <button
                      className="register-content-center-box-center-form-button"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="animate__animated animate__fadeIn">
              <AuthLoaderComponent></AuthLoaderComponent>
            </div>
          )}
        </div>

        {modalState && <ModalComponent config={configModal}></ModalComponent>}
      </div>
    </>
  );
};
