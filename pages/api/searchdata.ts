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

    const resultsfour = await db.collection('searchBarData').find({}).toArray()

    const searchresults = JSON.parse(JSON.stringify(resultsfour))

    res.status(200).send({ searchresults })
  } catch (e) {
    console.error(e)
  }
}
