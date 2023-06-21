import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";
import sanitize from "mongo-sanitize";

export default async function likeproduct(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const product = sanitize(req.body.product);

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db("shoestore");

    const productsInfo = await db
      .collection("products")
      .findOne({ name: product });

    // The optional chaining operator (?.)-fixes object is possible null error for productsInfo variable. The non-null assertion operator (!.) or the nullish coalescing operator (??) & if (typeof myName === 'string').
    await db.collection("products").updateOne(
      { name: product },
      {
        $set: {
          likes: productsInfo?.likes + 1,
        },
      }
    );

    const updatedProductInfo = await db
      .collection("products")
      .findOne({ name: product });

    res.status(200).json(updatedProductInfo);
  } catch (err) {
    console.log(err);
  }
}
