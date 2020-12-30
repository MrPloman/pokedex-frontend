import React, {useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";
import {useForm} from "../../hooks/useForm";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  const {registerTrainer} = PokedexApiRequests();
  const history = useHistory();
  const initialForm = {
    name: {value: "", validate: true},
    surname: {value: "", validate: true},
    email: {value: "", validate: true},
    password: {value: "", validate: true},
    repeatPassword: {value: "", validate: true},
  };
  const {formState, handleInputForm, handleValidations} = useForm(initialForm);

  const validateForm = () => {
    handleValidations(formState);
    console.log(formState);
    if (
      formState.email.validate &&
      formState.name.validate &&
      formState.surname.validate &&
      formState.password.validate &&
      formState.repeatPassword.validate
    ) {
      return true;
    } else {
      return false;
    }
  };

  const register = () => {
    handleValidations(formState);
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
  useEffect(
    (e) => {
      console.log(e);

      handleValidations(formState);
      console.log(formState);
    },
    [useForm]
  );

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
                      type="text"
                      name="email"
                      value={formState.email.value}
                      placeholder="Introduce an email..."
                      onChange={handleInputForm}
                    />
                    {formState.email.validate === false &&
                      console.log(formState.email.validate) && (
                        <div>
                          <div>NO ENTRA</div>
                        </div>
                      )}
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
                  onClick={() => {
                    validateForm();
                  }}
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
