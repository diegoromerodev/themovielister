import { NextRequest } from "next/server";

const MiddlewareHandler = async (req: NextRequest) => {
  const tokenString = req.headers.get("Authorization");
  if (tokenString) {
    const verifyRes = await fetch(`${process.env.API_URL}/api/auth/verify`, {
      headers: {
        Authorization: tokenString,
      },
      method: "POST",
    });
    const userData = await verifyRes.json();
    global.CURR_USR = userData;
  }
};

export default MiddlewareHandler;
