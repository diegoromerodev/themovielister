import type { NextFetchEvent, NextRequest } from "next/server";

const middleware = (req: NextRequest, ev: NextFetchEvent) => {
  return new Response("Hello, World");
};

export default middleware;
