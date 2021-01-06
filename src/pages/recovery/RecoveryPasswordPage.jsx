import {useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";

import {NavbarAuthComponent} from "../../components/NavbarAuthComponent/NavbarAuthComponent";
import {useForm} from "react-hook-form";
import {PATTERNS} from "../../config/environment/patterns";
import {AuthLoaderComponent} from "../../components/AuthLoaderComponent/AuthLoaderComponent";
import {ModalComponent} from "../../components/ModalComponent/ModalComponent";
import "./RecoveryPasswordPage.scss";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";

export const RecoveryPasswordPage = () => {
  const {recoveryPassword} = PokedexApiRequests();
  const [modalState, setModalState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };
  const configModal = {
    title: "Email Sent!",
    message:
      "We've found your email and we've sent an email to reset your password. Check your inbox please!",
    actions: [{label: "Go To Login!", action: goToLogin}],
  };
  const {register, handleSubmit, watch, errors} = useForm({});
  const onSubmit = (d) => {
    recoveryPassword(d)
      .then(({data}) => {
        if (data.result.status === 200) {
          setLoadingState(false);
          if (loadingState === false) {
            setModalState(true);
          }
        } else if (data.result.status === 400) {
          setLoadingState(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="recovery-content">
        <div className="recovery-content-navbar">
          <NavbarAuthComponent></NavbarAuthComponent>
        </div>

        <div className="recovery-content-center animate__animated animate__fadeIn">
          <h1>Don't you remember your password?</h1>
          {!loadingState ? (
            <div className="recovery-content-center-box">
              <div className="recovery-content-center-box-top">
                <h3>Password Recovery</h3>
              </div>
              <div className="recovery-content-center-box-center">
                <form
                  className="recovery-content-center-box-center-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="recovery-content-center-box-center-form-row">
                    <div className="recovery-content-center-box-center-form-row-field">
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

                  <div className="recovery-content-center-box-center-form-questions">
                    <div className="recovery-content-center-box-center-form-questions-each">
                      <h6>
                        Do you want to login?
                        <span>
                          <NavLink className="navlink" exact to="/login">
                            Go to Login!
                          </NavLink>
                        </span>
                      </h6>
                    </div>
                    <div className="recovery-content-center-box-center-form-questions-each-right">
                      <h6>
                        Don't you have an account?
                        <span>
                          <NavLink className="navlink" exact to="/register">
                            Go to Register!
                          </NavLink>
                        </span>
                      </h6>
                    </div>
                  </div>
                  <div className="recovery-content-center-box-center-form-row">
                    <button
                      className="recovery-content-center-box-center-form-button"
                      type="submit"
                    >
                      Recovery
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
