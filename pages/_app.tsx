/* eslint-disable react/jsx-props-no-spreading */
import "../styles.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "./layout";
import AppContext from "../lib/AppContext";
import useLogin from "../lib/hooks/useLogin";
import { AppDataContext, AppDataState } from "../lib/types";
import useAxiosInterceptor from "../lib/hooks/useAxiosInterceptor";
import configureAxiosInterceptors from "../lib/serverside/serverAxiosInterceptors";

if (typeof window === "undefined") {
  configureAxiosInterceptors();
}

interface ExtendedAppProps extends AppProps {
  userData: {
    username: string;
  };
}

function App({ Component, pageProps }: ExtendedAppProps) {
  const appDataHooks = useState<AppDataState>({
    userData: null,
    token: null,
    currentErrors: ["Make sure to fix your shit bruh", "Invalid credentials"],
  });
  const [appData, setAppData]: AppDataContext = appDataHooks;
  const { userData } = useLogin(appData.token);
  useAxiosInterceptor(appData.token, setAppData);
  useEffect(() => {
    if (userData) {
      setAppData({ ...appData, userData });
    }
  }, [userData]);

  useEffect(() => {
    const logToken = localStorage.getItem("loginToken");
    if (logToken) {
      setAppData({ ...appData, token: logToken });
    }
  }, []);

  return (
    <AppContext.Provider value={appDataHooks}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
