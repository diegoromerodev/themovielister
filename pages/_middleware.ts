import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  return NextResponse.next();
};

export default middleware;
