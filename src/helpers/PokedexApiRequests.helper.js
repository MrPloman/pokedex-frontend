import axios from "axios";
import { ENDPOINTS } from "../config/environment/environment";

export const PokedexApiRequests = () => {
    const http = axios;
    const { API_URL } = ENDPOINTS;
    const registerTrainer = async(data) => {
        return http.post(`${API_URL}trainer/register`, data);
    };
    const loginTrainer = async(data) => {
        console.log(data);
        return http.post(`${API_URL}trainer/login`, data);
    };
    const verifyAccount = async(id) => {
        return http.get(`${API_URL}trainer/verify/${id}`);
    };
    const recoveryPassword = async(data) => {
        return http.post(`${API_URL}trainer/recovery`, data);
    };
    const resetPassword = async(data) => {
        return http.post(`${API_URL}trainer/reset/:id`, data);
    };
    const me = async(data) => {
        return http.get(`${API_URL}trainer/me`);
    };
    return {
        registerTrainer,
        loginTrainer,
        me,
        verifyAccount,
        recoveryPassword,
        resetPassword,
    };
};