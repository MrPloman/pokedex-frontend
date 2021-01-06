import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {LoginPage} from "../../pages/login/LoginPage";
import {RegisterPage} from "../../pages/register/RegisterPage";
import {VerifyPage} from "../../pages/verify/VerifyPage";

export const RouterAuthComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/verify/:id">
            <VerifyPage></VerifyPage>
          </Route>
          <Route path="/">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
