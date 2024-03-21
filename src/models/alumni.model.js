import { model, Schema } from 'mongoose';

const alumniSchema = new Schema(
    {
        name: {
          type: String,
          required: true,
        },
        img: {
          type: String,
          required: true,
        },
        project: {
          type: String,
          required: true,
        },
        linkedin: {
          type: String,
          required: true,
        },
        projectLink: {
          type: String,
          required: true,
        }
    
      }, { timestamps: true });

const Alumni = model('alumni', alumniSchema);

export default Alumni;