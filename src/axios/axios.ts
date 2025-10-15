import axios from "axios";
export const BACKEND_URL = "https://phuongsaa.click"
const axiosInstance = axios.create({
  baseURL: `${BACKEND_URL}/api`,
})
export default axiosInstance;