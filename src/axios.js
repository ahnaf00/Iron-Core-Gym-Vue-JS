import axios from "axios";

// Empty by default: requests go to the same origin and are proxied to the
// backend (nginx in Docker, the ALB on AWS, the Vite proxy in `npm run dev`).
export const API_URL = import.meta.env.VITE_API_URL ?? '';

const api = axios.create({
    baseURL: `${API_URL}/api/v1`,
    withCredentials:true,
    withXSRFToken:true,
    headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
    }
});

export default api;
