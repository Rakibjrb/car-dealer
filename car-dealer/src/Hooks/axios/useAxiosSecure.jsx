import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_Server_Url}/api`,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    function (config) {
      config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status == 401 || error.response.status == 403) {
        logOut(false);
        navigate("/user");
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosSecure;
