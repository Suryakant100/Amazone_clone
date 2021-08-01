import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/full-stack-e-clone/us-central1/api",
});

export default instance;
