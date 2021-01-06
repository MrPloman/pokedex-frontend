import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink,
} from "react-router-dom";
import pokeball from "../../assets/img/pokeball.svg";
import "./NavbarAuthComponent.scss";

export const NavbarAuthComponent = () => {
  return (
    <>
      <div className="navbarAuth">
        <div className="navbarAuth-left">
          <div className="navbarAuth-left-element">
            <NavLink className="navbarAuth-left-element-link" exact to="/login">
              Login
            </NavLink>
          </div>
        </div>
        <div className="navbarAuth-center">
          <img src={pokeball} alt="pokeball" />
        </div>
        <div className="navbarAuth-right">
          <div className="navbarAuth-right-element">
            <NavLink
              className="navbarAuth-right-element-link"
              exact
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
