import axios from "axios";

export const api = axios.create({
    baseURL: "https://adkrayons.com/api",
    headers: {
        "Content-Type": "application/json",
    },
})