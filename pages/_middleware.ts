import { NextRequest, NextResponse } from "next/server";

// SERVER-SIDE MIDDLEWARE HANDLER
const MiddlewareHandler = async (req: NextRequest) => {
  return NextResponse.next();
};

export default MiddlewareHandler;
