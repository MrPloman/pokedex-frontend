import axios from "axios";
import {useEffect, useState, useReducer} from "react";
import {PokeApiRequests} from "../../helpers/PokeApiRequests.helper";
import {pokemonDetailReducer} from "../../reducers/pokemonDetailReducer";
import "./CardComponent.scss";

export const CardComponent = ({pokemon}) => {
  const [currentPokemon, setPokemon] = useState();
  const [, dispatch] = useReducer(pokemonDetailReducer, {});
  const {getPokemonByName} = PokeApiRequests();
  useEffect(() => {
    if (pokemon) {
      getPokemonByName(pokemon.name)
        .then((r) => {
          if (r.status === 200) {
            setPokemon(r.data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [pokemon]);
  const selectPokemon = () => {
    const action = {
      type: "UPDATE_POKEMON_DETAIL",
      payload: currentPokemon,
    };
    dispatch(action);
  };

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
