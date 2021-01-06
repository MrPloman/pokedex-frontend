import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink,
} from "react-router-dom";
import "./NavbarMainComponent.scss";
import pokeball from "../../assets/img/pokeball.svg";

export const NavbarMainComponent = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-left-element">
            <NavLink className="navbar-left-element-link" exact to="/list">
              Pokedex
            </NavLink>
          </div>
          <div className="navbar-left-element">
            <NavLink className="navbar-left-element-link" exact to="/about">
              About
            </NavLink>
          </div>
        </div>
        <div className="navbar-center">
          <img src={pokeball} alt="pokeball" />
        </div>
        <div className="navbar-right">
          <div className="navbar-left-element">
            <NavLink className="navbar-left-element-link" exact to="/login">
              My Profile
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
