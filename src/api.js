import axios from "axios";

export const ApiGet = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
})