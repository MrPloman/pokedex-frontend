import "./App.scss";
import {ListPage} from "./pages/list/ListPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import {LoginPage} from "./pages/login/LoginPage";
import {RegisterPage} from "./pages/register/RegisterPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/list">
            <ListPage></ListPage>
          </Route>
          <Route path="/detail/:id">
            <div></div>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/">
            <ListPage></ListPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
