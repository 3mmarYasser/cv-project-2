import axios from "axios";
// const apiConfig = {
//     apiUrl: import.meta.env.VITE_API_URL,
// }
export const axiosConfig = {
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout:1000

};
export const axiosClient = axios.create(axiosConfig);