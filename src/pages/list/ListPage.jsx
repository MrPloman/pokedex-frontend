import React, {useState, useEffect, useReducer} from "react";
import {CardComponent} from "../../components/CardComponent/CardComponent";
import {LoaderComponent} from "../../components/LoaderComponent/LoaderComponent";
import {NavbarMainComponent} from "../../components/NavbarMainComponent/NavbarMainComponent";
import {PaginationComponent} from "../../components/PaginationComponent/PaginationComponent";
import {SearcherComponent} from "../../components/SearcherComponent/SearcherComponent";
import {PokeApiRequests} from "../../helpers/PokeApiRequests.helper";
import {pokemonDetailReducer} from "../../reducers/pokemonDetailReducer";
import {pokemonListReducer} from "../../reducers/pokemonListReducer";

import "./ListPage.scss";

export const ListPage = () => {
  const {
    getAllPokemons,
    getPokemonByName,
    getPokemonByNumber,
  } = PokeApiRequests();
  const [paginationState, setPaginationState] = useState({
    offset: 0,
    limit: 12,
    page: 1,
  });
  const {offset, limit, page} = paginationState;
  const [loadingState, setLoadingState] = useState(false);
  const [pokemonListState, dispatchList] = useReducer(pokemonListReducer, []);
  const [pokemonDetailState, dispatchDetail] = useReducer(
    pokemonDetailReducer,
    []
  );
  useEffect(() => {
    setLoadingState(true);
    clearList();
  }, [page]);

  const getPokemonList = () => {
    getAllPokemons(offset, limit).then((r) => {
      console.log(r);

      if (r.status === 200) {
        const action = {
          type: "GET_ALL_POKEMONS",
          payload: r.data.results,
        };

        dispatchList(action);
        getPokemonDetail(r.data.results);
      }
    });
  };

  const getPokemonDetail = (data) => {
    data.forEach((p) => {
      getPokemonByName(p.name).then((r) => {
        if (r.status === 200) {
          const action = {
            type: "UPDATE_POKEMON_DETAIL",
            payload: r.data,
          };
          dispatchDetail(action);

          setLoadingState(false);
        }
      });
    });
  };

  const searchByName = (name) => {
    setLoadingState(true);
    getPokemonByName(name).then(({status, data}) => {
      console.log(data);
      if (status === 200) {
        const action = {
          type: "GET_NAME_POKEMON_DETAIL",
          payload: data,
        };

        dispatchDetail(action);

        setLoadingState(false);
      }
    });
  };

  const searchByNumber = (number) => {
    setLoadingState(true);
    getPokemonByNumber(number).then(({status, data}) => {
      if (status === 200) {
        const action = {
          type: "GET_NUMBER_POKEMON_DETAIL",
          payload: data,
        };
        dispatchDetail(action);

        setLoadingState(false);
      }
    });
  };

  const clearList = () => {
    setLoadingState(true);
    const action = {
      type: "CLEAR_POKEMON_DETAIL",
      payload: [],
    };
    dispatchDetail(action);
    getPokemonList();
  };

  return (
    <div className="content">
      <div className="content-navbar">
        <NavbarMainComponent></NavbarMainComponent>
      </div>

      <div className="content-main">
        <div className="content-main-title">
          <h1>PokeDex</h1>
        </div>
        <div className="content-main-searcher">
          <SearcherComponent
            searchByName={searchByName}
            searchByNumber={searchByNumber}
            clearList={clearList}
          ></SearcherComponent>
        </div>
        {loadingState ? (
          <LoaderComponent></LoaderComponent>
        ) : (
          <div className="content-main-results">
            {pokemonDetailState.map((e) => {
              return <CardComponent pokemon={e} key={e.id}></CardComponent>;
            })}
          </div>
        )}

        <div className="content-main-pagination">
          {!loadingState && (
            <PaginationComponent
              paginationState={paginationState}
              setPaginationState={setPaginationState}
            ></PaginationComponent>
          )}
        </div>
      </div>
    </div>
  );
};
