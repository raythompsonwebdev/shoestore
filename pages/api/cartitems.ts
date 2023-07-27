import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from '../../lib/mongodb'

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method !== 'GET'){
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  try {
    //await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise
    const db = client.db('shoestore')
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    const results = await db.collection('products').find({}).toArray()

    if (results.length > 0) {
      console.log(`${results.length} customers found`)
      // Here you could build your html or put the results in some other data structure you want to work with
    } else {
      console.log(`No customers found`)
    }

    const product = JSON.parse(JSON.stringify(results))

    res.status(200).send(product);

  } catch (e) {
    console.error(e)

  }
}
