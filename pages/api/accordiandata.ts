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
    const client = await clientPromise
    const db = client.db('shoestore')
    const resultstwo = await db.collection('accordianData').find({}).toArray()
    const accordian = JSON.parse(JSON.stringify(resultstwo))
    res.status(200).send({ accordian })
  } catch (e) {
    console.error(e)
  }
}
