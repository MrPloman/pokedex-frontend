import React, {useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";
import {useForm} from "../../hooks/useForm";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  /*   const {registerTrainer} = PokedexApiRequests();
  const history = useHistory(); */

  const initialForm = {
    name: {
      value: "",
      validate: {error: "", isValidated: false},
    },
    surname: {
      value: "",
      validate: {error: "", isValidated: false},
    },
    email: {
      value: "",
      validate: {error: "", isValidated: false},
    },
    password: {
      value: "",
      validate: {
        error: "",
        isValidated: false,
      },
    },
    repeatPassword: {
      value: "",
      validate: {error: "", isValidated: false},
    },
  };

  const {formState, handleInputForm, handleValidations} = useForm(initialForm);

  useEffect(() => {
    handleValidations();
    console.log(formState.email.validate.isValidated);
  });

  const validateForm = () => {
    handleValidations();
    if (
      formState.email.validate.isValidated &&
      formState.name.validate.isValidated &&
      formState.surname.validate.isValidated &&
      formState.password.validate.isValidated &&
      formState.repeatPassword.validate.isValidated
    ) {
      return true;
    } else {
      return false;
    }
  };

  const register = (event) => {
    console.log(formState);
    console.log(event);
    validateForm();

    /*     registerTrainer(formState)
      .then(({data, status}) => {
        status === 200 && history.push("/list");
        status === 400 && console.log(data, status);
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

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
              <div className="register-content-center-box-center-form">
                <div className="register-content-center-box-center-form-row">
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Email</label>
                    <input
                      validate={formState.email.validate.error}
                      type="text"
                      name="email"
                      value={formState.email.value}
                      placeholder="Introduce an email..."
                      onChange={handleInputForm}
                    />
                    <div>
                      <p>{formState.email.validate.error}</p>
                    </div>
                  </div>
                </div>
                <div className="register-content-center-box-center-form-row">
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name.value}
                      placeholder="Introduce your name..."
                      onChange={handleInputForm}
                    />
                  </div>
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Surname</label>
                    <input
                      type="text"
                      name="surname"
                      value={formState.surname.value}
                      placeholder="Introduce your surname..."
                      onChange={handleInputForm}
                    />
                  </div>
                </div>
                <div className="register-content-center-box-center-form-row">
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formState.password.value}
                      placeholder="Introduce a valid password..."
                      onChange={handleInputForm}
                    />
                  </div>
                  <div className="register-content-center-box-center-form-row-field">
                    <label>Repeat Password</label>
                    <input
                      type="password"
                      name="repeatPassword"
                      value={formState.repeatPassword.value}
                      placeholder="Introduce the same password..."
                      onChange={handleInputForm}
                    />
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
                  onClick={register}
                >
                  Register Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
