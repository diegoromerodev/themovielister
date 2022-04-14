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
  const { userData, token } = useLogin(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImRpZWcwcjBtM3IwIiwiYXZhdGFyVVJMIjoiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9FYlVzWkVzXzFZZy9tYXhyZXNkZWZhdWx0LmpwZyIsImJpbyI6IkEgdGFsbCwgc29saWRseS1idWlsdCwgZmFpciBza2lubmVkIG1hbiB3aXRoIGEgdHJpYW5ndWxhciBmYWNlLiBIZSBoYXMgYSBkaXN0aW5jdGl2ZSB3YWxrLCBoYXMgc3RyYWlnaHQsIGJsYWNrIGhhaXIsIGFuZCBoYXMgdGF0dG9vcyBmdWxseSBjb3ZlcmluZyBoaXMgZmFjZSwgbGVmdCBsZWcsIGhhbmRzIGFuZCBuZWNrLiIsImVtYWlsIjoiZGllZ29yb21lcm94ZEBlbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJEaWVnbyIsImxhc3ROYW1lIjoiUm9tZXJvIiwicGFzc3dvcmQiOiIkMmEkMDUkN3Y5SnQ5YVh3Rlp3UWVDaktYQXZhLkNRMUhnY2JzbkJMUTU0RmN2YW85ZUd0bi9aWUNzTlMiLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTExVDAyOjAzOjEyLjkxNloiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTExVDAyOjAzOjEyLjkxNloifSwiaWF0IjoxNjQ5NjQyNjM4fQ.iAjoOW4dDfYU2hd2fhnPU0aX8f8AkTKuS0wtrWrQgNI"
  );

  useEffect(() => {
    if (userData) {
      setAppData({ ...appData, userData, token });
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
