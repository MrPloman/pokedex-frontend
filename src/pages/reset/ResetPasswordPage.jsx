import React, {useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {useHistory, useParams} from "react-router-dom";
import {PATTERNS} from "../../config/environment/patterns";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";
import "./ResetPasswordPage.scss";
export const ResetPasswordPage = () => {
  const {resetPassword} = PokedexApiRequests();
  const [loadingState, setLoadingState] = useState(false);
  const {register, handleSubmit, watch, errors} = useForm({});
  const password = useRef({});
  const [verifiedState, setVerifiedState] = useState({
    title: "",
    message: "",
    state: 400,
  });
  const history = useHistory();
  let {id} = useParams();
  const resetPass = () => {
    if (id) {
      resetPassword(id)
        .then(({data}) => {
          setLoadingState(false);
          setVerifiedState(data);
        })
        .catch((e) => {
          console.error(e);
          setLoadingState(false);
          setVerifiedState(e);
        });
    } else {
      history.push("/login");
    }
  };
  password.current = watch("password", "");

  /*   resetAccount() */
  return (
    <>
      <div className="reset-content animate__animated animate__fadeIn">
        <div className="reset-content-center">
          <h1>Reset Password!</h1>
          {loadingState === false ? (
            <div className="reset-content-center-box">
              <div className="reset-content-center-box-top">
                <h3>Introduce your new Password</h3>
              </div>
              <div className="reset-content-center-box-center">
                <form
                  className="reset-content-center-box-center-form"
                  onSubmit={handleSubmit(resetPass)}
                >
                  <div className="reset-content-center-box-center-form-row">
                    <div className="reset-content-center-box-center-form-row-field">
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
                    <div className="reset-content-center-box-center-form-row-field">
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
                  <div className="reset-content-center-box-center-form-bottom">
                    <button
                      className="reset-content-center-box-center-form-bottom-button"
                      type="submit"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="reset-content-center-loader"></div>
          )}
        </div>
      </div>
    </>
  );
};
