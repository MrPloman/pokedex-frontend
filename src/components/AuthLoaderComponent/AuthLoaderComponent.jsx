import "./AuthLoaderComponent.scss";
import trainer from "../../assets/img/trainer.jpg";

export const AuthLoaderComponent = () => {
  return (
    <div>
      <img className="loader" src={trainer} alt="loader" />
    </div>
  );
};
