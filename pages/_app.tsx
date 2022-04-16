/* eslint-disable react/jsx-props-no-spreading */
import "../styles.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "./layout";
import AppContext from "../lib/AppContext";
import useLogin from "../lib/hooks/useLogin";

interface ExtendedAppProps extends AppProps {
  userData: {
    username: string;
  };
}

function App({ Component, pageProps }: ExtendedAppProps) {
  const appDataHooks = useState({ userData: {}, token: "" });
  const [appData, setAppData] = appDataHooks;
  const [loginToken, setLoginToken] = useState("");
  const { userData, token } = useLogin(loginToken);

  useEffect(() => {
    if (userData) {
      setAppData({ ...appData, userData, token });
    }
  }, [userData]);

  useEffect(() => {
    const logToken = localStorage.getItem("loginToken");
    if (logToken) {
      setLoginToken(logToken);
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
