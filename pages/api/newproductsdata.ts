import type { NextApiRequest, NextApiResponse } from "next";
import sanitize from "mongo-sanitize";
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
    const resultsfour = await db.collection('searchBarData').find({}).toArray()

    if (results.length > 0) {
      console.log(`${results.length} customers found`)
      //console.log(`${resultstwo.length} accordian data found`)
      //console.log(`${resultsfour.length} searchbar data found`)
      // Here you could build your html or put the results in some other data structure you want to work with
    } else {
      console.log(`No customers found`)
    }

    const product = JSON.parse(JSON.stringify(results))
    const accordian = JSON.parse(JSON.stringify(resultstwo))
    const searchresults = JSON.parse(JSON.stringify(resultsfour))

    res.status(200).send({ product, accordian, searchresults });

  } catch (e) {
    console.error(e)

  }


}
