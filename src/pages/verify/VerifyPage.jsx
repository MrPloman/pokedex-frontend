import React, {useState, useEffect} from "react";
import {NavLink, useParams, useHistory} from "react-router-dom";
import {AuthLoaderComponent} from "../../components/AuthLoaderComponent/AuthLoaderComponent";
import {PokedexApiRequests} from "../../helpers/PokedexApiRequests.helper";
import "./VerifyPage.scss";

export const VerifyPage = () => {
  const {verifyAccount} = PokedexApiRequests();
  const [loadingState, setLoadingState] = useState(true);
  const [verifiedState, setVerifiedState] = useState({
    title: "",
    message: "",
    state: 400,
  });
  const history = useHistory();
  let {id} = useParams();
  const verifyId = () => {
    if (id) {
      verifyAccount(id)
        .then(({data}) => {
          console.log(data);
          setLoadingState(false);
          setVerifiedState(data);
        })
        .catch((e) => {
          console.log(e);
          setLoadingState(false);
          setVerifiedState(e);
        });
    } else {
      history.push("/login");
    }
  };
  useEffect(() => {
    verifyId();
  }, []);

  /*   verifyAccount() */
  return (
    <>
      <div className="verify-content animate__animated animate__fadeIn">
        <div className="verify-content-center">
          <h1>Verify an Account!</h1>
          {loadingState === false ? (
            <div className="verify-content-center-box">
              <div className="verify-content-center-box-top">
                <h3>{verifiedState.title}</h3>
              </div>
              <div className="verify-content-center-box-center">
                <p>{verifiedState.message}</p>
              </div>
              <div className="verify-content-center-box-bottom">
                <button>
                  <NavLink className="navlink" exact to="/login">
                    Go to Login!
                  </NavLink>
                </button>
              </div>
            </div>
          ) : (
            <div className="verify-content-center-loader">
              <AuthLoaderComponent></AuthLoaderComponent>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
