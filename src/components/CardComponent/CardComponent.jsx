import {useState} from "react";

import "./CardComponent.scss";

export const CardComponent = (props) => {
  const [currentPokemon, setPokemon] = useState(props.pokemon);
  const selectPokemon = () => {};

  return currentPokemon ? (
    <div
      className="card"
      onClick={() => {
        selectPokemon();
      }}
    >
      <div className="card-top">
        <div className="card-top-title">
          <h3>{currentPokemon.id}</h3>
        </div>
      </div>
      <div className="card-middle">
        <div className="card-middle-stroke">
          <div className="card-middle-stroke-img">
            <img src={currentPokemon.sprites.front_default} alt="pokemon" />
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <h4 className="card-bottom-title">{currentPokemon.name}</h4>
      </div>
    </div>
  ) : null;
};
