import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToMongoDB } from '../../lib/dbConnect'
// import {IUser} from '../../types/index'
import User from '../../models/users'
import sanitize from 'mongo-sanitize'

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const name = sanitize(req.body.name)
  const email = sanitize(req.body.email)
  const password = sanitize(req.body.password)

  try {
    // connect to mungodb
    connectToMongoDB().catch((err) => res.json(err))

    // confirm whether email already exist in database.
    const userExists = await User.findOne({ email }).exec()

    if (userExists) {
      return res.status(409).json({ error: 'User Already exists' })
    } else {
      if (password.length < 10)
        return res
          .status(409)
          .json({ error: 'Password should be greater than 10 characters long' })

      // Hash password
      // const hashpassword = await hashPassword(password)

      // create new user
      const user = User.create({
        name,
        email,
        password,
        image: ' ',
        cartitems: [],
      })

      return res.status(200).json({
        success: true,
        user,
      })
    }
  } catch (err) {
    res.status(400).send({ message: err })
  }
}
