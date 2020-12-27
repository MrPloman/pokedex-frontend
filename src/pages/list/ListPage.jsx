import axios from "axios";
import React, {useState, useEffect, useReducer} from "react";
import {CardComponent} from "../../components/CardComponent/CardComponent";
import {LoaderComponent} from "../../components/LoaderComponent/LoaderComponent";
import {SearcherComponent} from "../../components/SearcherComponent/SearcherComponent";
import {PokeApiRequests} from "../../helpers/PokeApiRequests.helper";
import {pokemonListReducer} from "../../reducers/pokemonListReducer";
import "./ListPage.scss";

export const ListPage = () => {
  const {getAllPokemons} = PokeApiRequests();
  const [pokemonListState, dispatch] = useReducer(pokemonListReducer, []);

  useEffect(() => {
    getAllPokemons().then(({status, data}) => {
      if (status === 200) {
        const action = {
          type: "UPDATE_POKEMON_MAIN_LIST",
          payload: data.results,
        };
        console.log(pokemonListState);

        setTimeout(() => {
          dispatch(action);
        }, 3000);
      }
    });
  }, []);

  const handleSearch = (event) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`)
      .then((r) => {
        console.log(r);
        if (r.status === 200) {
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="content">
      <div className="content-main">
        <div className="content-main-searcher">
          <SearcherComponent></SearcherComponent>
        </div>
        {pokemonListState.length > 0 ? (
          <div className="content-main-results">
            {pokemonListState.map((e) => {
              return <CardComponent pokemon={e} key={e.name}></CardComponent>;
            })}
          </div>
        ) : (
          <LoaderComponent></LoaderComponent>
        )}
        <div className="content-main-pagination"></div>
      </div>
    </div>
  );
};
