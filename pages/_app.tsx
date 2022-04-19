/* eslint-disable react/jsx-props-no-spreading */
import "../styles.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "./layout";
import AppContext from "../lib/AppContext";
import useLogin from "../lib/hooks/useLogin";
import { AppDataContext } from "../lib/types";

interface ExtendedAppProps extends AppProps {
  userData: {
    username: string;
  };
}

function App({ Component, pageProps }: ExtendedAppProps) {
  const appDataHooks = useState({ userData: null, token: null });
  const [appData, setAppData]: AppDataContext = appDataHooks;
  const { userData } = useLogin(appData.token);

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
