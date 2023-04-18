import axios from "axios";

const AXIOS = axios.create({
  baseURL: "http://35.198.250.19/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "Content-Type": "application/json",
  },
});

export default AXIOS;
