import axios from "axios";

export const HOST = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
