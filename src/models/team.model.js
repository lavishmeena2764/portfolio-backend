import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    }

  },
  { timestamps: true },
);

const Team = model('team', teamSchema);

export default Team;