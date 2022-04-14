import { useEffect, useState } from "react";

const useLogin = (token: string) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    if (!token) return;

    const verifyRequest = async () => {
      const verifyRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`,
        {
          headers: {
            Authorization: token,
          },
          method: "POST",
        }
      );
      const dataRes = await verifyRes.json();
      setUserData(dataRes);
    };

    verifyRequest();
  }, [token]);

  return { userData, token };
};

export default useLogin;
