import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  try {
    //await clientPromise
    const client = await clientPromise
    const db = client.db('shoestore')

    const results = await db.collection('cartItems').find({}).toArray()

    if (results.length > 0) {
      console.log(`${results.length} cart items found`)
    } else {
      console.log(`No Cart items found`)
    }

    const product = JSON.parse(JSON.stringify(results))

    res.status(200).send(product)
  } catch (e) {
    res.status(500).send({message: e})
  }
}
