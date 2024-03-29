import React from "react";
import {ListPage} from "../../pages/list/ListPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {LoginPage} from "../../pages/login/LoginPage";
import {RegisterPage} from "../../pages/register/RegisterPage";
import {VerifyPage} from "../../pages/verify/VerifyPage";
import {RecoveryPasswordPage} from "../../pages/recovery/RecoveryPasswordPage";
import {ResetPasswordPage} from "../../pages/reset/ResetPasswordPage";
import {DetailPage} from "../../pages/detail/DetailPage";

export const RouterMainComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/list">
            <ListPage></ListPage>
          </Route>
          <Route path="/detail/:id">
            <DetailPage></DetailPage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/recovery">
            <RecoveryPasswordPage></RecoveryPasswordPage>
          </Route>
          <Route path="/verify/:id">
            <VerifyPage></VerifyPage>
          </Route>
          <Route path="/reset/:id">
            <ResetPasswordPage></ResetPasswordPage>
          </Route>
          <Route path="/">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
