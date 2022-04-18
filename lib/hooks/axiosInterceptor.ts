import axios from "axios";
import { useEffect } from "react";

const useAxiosInterceptor = (token: string) => {
  const setInterceptor = () => {
    axios.interceptors.request.use(
      (req) => {
        if (token) {
          req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
      },
      (err) => {
        throw new Error(err);
      }
    );
  };
  useEffect(() => {
    if (!token) return;
    setInterceptor();
  }, [token]);
};

export default useAxiosInterceptor;
