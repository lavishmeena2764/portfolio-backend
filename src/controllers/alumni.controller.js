import express from 'express';
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
const app = express();
import {
  response_200,
  response_500,
} from '../utils/responseCodes.js';
import Alumni from '../models/alumni.model.js';

app.use(fileUpload({
  useTempFiles: true
}));

cloudinary.config({
  cloud_name: "lavish-meena",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function newAlumni(req, res) {
  const {
    name,
    project,
    linkedin,
    projectLink,
  } = req.body;

  const img = req.files.img;
  cloudinary.uploader.upload(img.tempFilePath, (err, result) => {
    const alumni = new Alumni({
      name: name,
      img: result.url,
      project: project,
      linkedin: linkedin,
      projectLink: projectLink
    });
    alumni.save().then((finalResult,err) => {
      if(err) console.log(err)
      return res.json({ alumni: finalResult });
    }).catch(error => console.log(error))
  })


}


export async function getAlumni(req, res) {
  Alumni.find({})
    .then((finalResult) => {
      console.log(finalResult);
      return response_200(res, 'Fetched all alumnus!!', finalResult);
    }).catch(error => { return response_500(res, 'Internal server error', error); });

}
