import type { NextApiRequest, NextApiResponse } from "next";
// import clientPromise from "../../lib/mongodb";

export async function likeproduct(req: NextApiRequest, res: NextApiResponse) {
  console.log(req, res);
  const body = req.body;
  // const productName = req.params.name;
  console.log(body);

  // `http://localhost:8000/api/product/${productName}/likes`,
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  // try {
  //   const client = await clientPromise;
  //   const db = client.db("shoestore");
  //   //
  //   // Then you can execute queries against your database like so:
  //   // db.find({}) or any of the MongoDB Node Driver commands

  //   const productsInfo = await db
  //     .collection("products")
  //     .findOne({ name: body });

  //   await db.collection("products").updateOne(
  //     { name: body },
  //     {
  //       $set: {
  //         likes: body + 1,
  //       },
  //     }
  //   );

  //   const updatedProductInfo = await db
  //     .collection("products")
  //     .findOne({ name: body });
  //   res.status(200).json(updatedProductInfo);
  // } catch (err) {
  //   console.log(err);
  // }

  res.status(200).send(body);
}
