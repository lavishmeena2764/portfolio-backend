import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    link: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    }
  },
  { timestamps: true },
);

const Event = model('event', eventSchema);

export default Event;