import type { NextApiRequest, NextApiResponse } from "next";
import sanitize from "mongo-sanitize";

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = sanitize(req.body);

  res.status(200).send(body);
}
