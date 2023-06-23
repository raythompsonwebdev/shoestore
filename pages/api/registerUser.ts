// This is an example of how to read a JSON Web Token from an API route
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToMongoDB } from '../../lib/dbConnect'
import User from '../../models/users'
import { IUser } from '../../types/index'
import { hashPassword } from '../../lib/hashPassword'
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
  const dateSubmitted = new Date().toString().substring(0, 24)

  try {
    // connect to mungodb
    connectToMongoDB().catch((err) => res.json(err))

    // confirm whether email already exist in database.
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(409).json({ error: 'User Already exists' })
    } else {
      if (password.length < 6)
        return res
          .status(409)
          .json({ error: 'Password should be 6 characters long' })

      // Hash password
      const hashpassword = await hashPassword(password)

      // create new user
      const user = User.create({
        name,
        email,
        password: hashpassword,
        date: dateSubmitted,
      })

      return res.status(201).json({
        success: true,
        user,
      })
    }
  } catch (err) {
    console.log(err)
  }
}
