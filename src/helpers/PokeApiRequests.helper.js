import axios from "axios";
import { ENDPOINTS } from "../config/environment/environment";

export const PokeApiRequests = () => {
    const http = axios;
    const { POKEAPI_URL } = ENDPOINTS;
    const getAllPokemons = async(offset = 0, limit = 12) => {
        return http.get(`${POKEAPI_URL}?offset=${offset}&limit=${limit}`);
    };
    const getPokemonByNumber = async(value) => {
        return http.get(`${POKEAPI_URL}${value}`);
    };
    const getPokemonByName = async(value) => {
        return http.get(`${POKEAPI_URL}${value}`);
    };
    return { getAllPokemons, getPokemonByNumber, getPokemonByName };
};