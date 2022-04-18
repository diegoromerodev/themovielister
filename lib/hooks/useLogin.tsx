import { useEffect, useState } from "react";

const useLogin = (token: string) => {
  debugger;
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (!token) return;
    const verifyRequest = async () => {
      const verifyRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
