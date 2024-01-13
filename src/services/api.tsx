import axios from "axios";
import { parseCookies } from "nookies";

const { "bitmaster.ulat": token } = parseCookies();

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json",
		"Access-Control-Allow-Methods": "*",
		"Access-Control-Allow-Headers": "*",
	},
});
if (token) {
	api.defaults.headers.Authorization = `Bearer ${token}`;
}

api.interceptors.response.use(
	(response) => response,
	(error) => {
		// if (error.response.status === 401) {
		//   sessionStorage.clear();
		//   localStorage.clear();
		//   toast.error("O tempo de sua seção expirou, faça login novamente.");
		// }
		return Promise.reject(error);
	},
);

export default api;
