import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // FastAPI backend URL
});

export default API;