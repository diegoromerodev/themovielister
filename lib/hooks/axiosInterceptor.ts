import customAxios from "axios";
import { useEffect, useState } from "react";

type interceptorKeys = "request" | "response";

const useAxiosInterceptor = (token: string) => {
  const [interceptors, setInterceptors] = useState<{
    request: number;
    response: number;
  }>({
    request: null,
    response: null,
  });
  const configureInterceptors = () => {
    Object.keys(interceptors).forEach((k: interceptorKeys) => {
      if (!interceptors[k]) return;
      customAxios.interceptors[k].eject(interceptors[k]);
    });
    const requestInterceptor = customAxios.interceptors.request.use(
      (req) => {
        console.log("HERE");
        if (token) {
          req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
      },
      (err) => {
        debugger;
      }
    );

    const responseInterceptor = customAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        debugger;
      }
    );

    setInterceptors({
      request: requestInterceptor,
      response: responseInterceptor,
    });
  };
  useEffect(() => {
    if (!token) return;
    configureInterceptors();
  }, [token]);
};

export { customAxios };

export default useAxiosInterceptor;
