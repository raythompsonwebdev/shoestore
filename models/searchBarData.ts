import { Schema, model, models } from 'mongoose'

const SearchBarSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  options: [
    {
      type: [String, Number],
    },
  ],
})

const SearchBar = models.Accordian || model('Accordian', SearchBarSchema)

export default SearchBar
