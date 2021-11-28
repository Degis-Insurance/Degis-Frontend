import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 6000000,
});

export default service;
