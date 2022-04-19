import axios from "axios";

const configureAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      throw new Error(err);
    }
  );
};

export default configureAxiosInterceptors;
