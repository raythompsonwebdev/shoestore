import { Schema, model, models } from 'mongoose'
import validator from 'validator'

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Full name is required'],
    minLength: [4, 'Full name should be at least 4 characters long'],
    maxLength: [30, 'Full name should be less than 30 characters'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    minLength: [4, 'Full name should be at least 2 characters long'],
    maxLength: [50, 'Full name should be less than 30 characters'],
    lowercase: true,
    trim: true,
    validate: (value: string) => {
      return validator.isEmail(value)
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [12, 'Full name should be at least 12 characters long'],
    maxLength: [25, 'Full name should be less than 25 characters'],
    select: false,
  },
  date: {
    type: String,
    default: Date.now,
  },
})

const User = models.User || model('User', UserSchema)

export default User
