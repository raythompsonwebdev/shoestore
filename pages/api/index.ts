import type { NextApiRequest, NextApiResponse } from "next";

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  console.log(body);

  res.status(200).send(body);
}
