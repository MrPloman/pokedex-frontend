import axios from "axios";
import { ENDPOINTS } from "../config/environment/environment";

export const PokedexApiRequests = () => {
    const http = axios;
    const { API_URL } = ENDPOINTS;
    const registerTrainer = async(data) => {
        return http.post(`${API_URL}register`, data);
    };
    const loginTrainer = async(data) => {
        return http.post(`${API_URL}login`);
    };
    const authTrainer = async(data) => {
        return http.get(`${API_URL}auth`);
    };
    return { registerTrainer, loginTrainer, authTrainer };
};