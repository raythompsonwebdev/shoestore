import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from '../../lib/mongodb'

export default async function singleproductHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET'){
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  try {

    //await clientPromise
    const client = await clientPromise;
    const db = client.db("shoestore");

    const results = await db.collection('products').find({}).toArray()

    // const results = await db
    //   .collection("products")
    //   .findOne({ name: productName });

    const product = JSON.parse(JSON.stringify(results));

    res.status(200).send({product});

  } catch (e) {
    console.error(e)

  }


}
