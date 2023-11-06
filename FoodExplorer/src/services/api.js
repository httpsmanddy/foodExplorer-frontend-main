import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-food-explorer-i5rd.onrender.com'
});
