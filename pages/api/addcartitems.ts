import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'
import sanitize from 'mongo-sanitize'

export default async function likeproduct(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cartResults = req.body.cartItems

  const cartUserId = req.body.user

  // get array of cart item id's
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //const cartItemId = cartResults.map(( id: any )=> id._id)

  //console.log(cartResults, cartUserId.email)
  //console.log("------------------------")

  const useremail = sanitize(cartUserId.email)

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  try {
    const client = await clientPromise
    const db = client.db('shoestore')

    const updatedUser = await db
      .collection('users')
      .findOne({ email: useremail })

    //console.log(productsInfo)
    //console.log("db cart items------------------------")

    // The optional chaining operator (?.)-fixes object is possible null error for productsInfo variable. The non-null assertion operator (!.) or the nullish coalescing operator (??) & if (typeof myName === 'string').

    await db
      .collection('users')
      .updateMany({}, { $set: { cartitems: cartResults } }, { upsert: true })

    // const updatedProductInfo = await db
    //   .collection('cartItems')
    //   .findOne({ product })

    res.status(200).json({ updatedUser })
    ///res.status(200).json(updatedProductInfo)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err })
  }
}
