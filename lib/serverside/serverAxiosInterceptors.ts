import axios from "axios";

export const serverAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const configureAxiosInterceptors = () => {
  serverAxios.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      throw new Error(err);
    }
  );
};

export default configureAxiosInterceptors;
