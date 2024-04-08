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

    const resultsthree = await db.collection('selectBarData').find({}).toArray()

    const selectresults = JSON.parse(JSON.stringify(resultsthree))

    res.status(200).send({ selectresults })
  } catch (err) {
    res.status(500).json({ Error: err })
  }
}
