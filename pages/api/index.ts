import type { NextApiRequest, NextApiResponse } from "next";

export default function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  res.status(200).send(body);
}
