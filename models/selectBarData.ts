import { Schema, model, models } from 'mongoose'

const SelectBarSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  value: {
    type: String,
  },
  options: [
    {
      type: [String, Number],
    },
  ],
})

const SelectBar = models.SelectBar || model('SelectBar', SelectBarSchema)

export default SelectBar
