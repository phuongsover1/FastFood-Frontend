import axios from "axios";
export const IP_ADDR = "localhost:8080"
const axiosInstance = axios.create({
  baseURL: `http://${IP_ADDR}/api`,
})
export default axiosInstance;