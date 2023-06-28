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
    const client = await clientPromise
    const db = client.db('shoestore')

    const results = await db.collection('products').find({}).toArray()
    const resultstwo = await db.collection('accordianData').find({}).toArray()
    const resultsthree = await db.collection('selectBarData').find({}).toArray()
    const resultsfour = await db.collection('searchBarData').find({}).toArray()

    const product = JSON.parse(JSON.stringify(results))
    const accordian = JSON.parse(JSON.stringify(resultstwo))
    const searchresults = JSON.parse(JSON.stringify(resultsfour))
    const selectresults = JSON.parse(JSON.stringify(resultsthree))

    res.status(200).send({product,accordian,searchresults,selectresults});

  } catch (e) {
    console.error(e)
  }

}
