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
  const appDataHooks = useState({ userData: {} });
  const [appData, setAppData] = appDataHooks;
  const { userData } = useLogin(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImRpZWcwcjBtM3IwIiwiYXZhdGFyVVJMIjoiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9FYlVzWkVzXzFZZy9tYXhyZXNkZWZhdWx0LmpwZyIsImVtYWlsIjoiZGllZ29yb21lcm94ZEBlbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJEaWVnbyIsImxhc3ROYW1lIjoiUm9tZXJvIiwicGFzc3dvcmQiOiIkMmEkMDUkS3AyLjh2clY4dnZsdXYyMWx5TFhCT0Z0Rkl2TmZxaHpqZmI1Rjk1V1htTW5Lbi9zS0hGUkciLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTA0VDE4OjAzOjAzLjY2MVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTA0VDE4OjAzOjAzLjY2MVoifSwiaWF0IjoxNjQ5MDk1Mzg2fQ.hKKc_IMHz-BAz-pl9aYGehZgmFZTk35XygKAjqHpXR8"
  );

  useEffect(() => {
    if (userData) {
      setAppData({ ...appData, userData });
    }
  }, [userData]);

  return (
    <AppContext.Provider value={appDataHooks}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
