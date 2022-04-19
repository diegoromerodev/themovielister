import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AppDataState } from "../types";

type InterceptorKeys = "request" | "response";

interface InterceptorState {
  request: number;
  response: number;
}

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const useAxiosInterceptor = (
  token: string,
  setAppData: Dispatch<SetStateAction<AppDataState>>
) => {
  const [interceptors, setInterceptors] = useState<InterceptorState>({
    request: null,
    response: null,
  });
  const configureInterceptors = () => {
    Object.keys(interceptors).forEach((k: InterceptorKeys) => {
      if (!interceptors[k]) return;
      customAxios.interceptors[k].eject(interceptors[k]);
    });
    const requestInterceptor = customAxios.interceptors.request.use((req) => {
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    const responseInterceptor = customAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error: AxiosError) => {
        setAppData((prevData) => {
          return {
            ...prevData,
            currentErrors: [
              ...prevData.currentErrors,
              error.response.data.error,
            ],
          };
        });
      }
    );

    setInterceptors({
      request: requestInterceptor,
      response: responseInterceptor,
    });
  };

  useEffect(() => {
    configureInterceptors();
  }, [token]);
};

export { customAxios };

export default useAxiosInterceptor;
