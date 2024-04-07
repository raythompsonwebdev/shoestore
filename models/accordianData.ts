import { Schema, model, models } from 'mongoose'

const AccordianSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  items: [
    {
      type: [String],
    },
  ],
})

const Accordian = models.Accordian || model('Accordian', AccordianSchema)

export default Accordian
