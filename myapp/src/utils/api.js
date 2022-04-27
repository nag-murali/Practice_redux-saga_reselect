import axios from "axios";
export function api (key) {
    console.log(key)
   return axios.get("https://fakestoreapi.com" + key)
}