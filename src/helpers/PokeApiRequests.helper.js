import axios from "axios";
import { ENDPOINTS } from "../config/environment/environment";

export const PokeApiRequests = () => {
    const http = axios;
    const { POKEAPI_URL } = ENDPOINTS;
    const getAllPokemons = async() => {
        return http.get(`${POKEAPI_URL}`);
    };
    const getPokemonByNumber = async(value) => {
        console.log(value);
        return http.get(`${POKEAPI_URL}${value}`);
    };
    const getPokemonByName = async(value) => {
        return http.get(`${POKEAPI_URL}${value}`);
    };
    return { getAllPokemons, getPokemonByNumber, getPokemonByName };
};