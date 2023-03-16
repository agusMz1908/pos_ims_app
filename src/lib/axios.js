import axios from "axios";
import getenv from "../utils/getenv.js";

const url = getenv("REACT_APP_API_URL");

export function getAxios(route, params = {}) {
  const queryString = Object.entries(params)
    .map((params) => {
      return `${params[0]}=${params[1]}`;
    })
    .join("&");

  axios.get(`${url}${route}?${queryString}`).then((res) => res.data);
}

export function getOneAxios(route, params = {}) {
  const queryString = Object.entries(params)
    .map((params) => {
      return `${params[0]}=${params[1]}`;
    })
    .join("&");

  axios.get(`${url}${route}?${queryString}`).then((res) => res.data);
}
