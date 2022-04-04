import { NextRequest } from "next/server";

const MiddlewareHandler = async (req: NextRequest) => {
  console.log(req.headers);
};

export default MiddlewareHandler;
