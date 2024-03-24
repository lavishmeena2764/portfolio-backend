import express from 'express';
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";
const app = express();
import {
  response_200,
  response_500,
} from '../utils/responseCodes.js';
import Team from '../models/team.model.js';

app.use(fileUpload({
  useTempFiles: true
}));

cloudinary.config({
  cloud_name: "lavish-meena",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function newTeam(req, res) {
  console.log(req.body)
  console.log(req.files)
  const {
    name,
    education,
    linkedin,
    github
  } = req.body;

  const img = req.files.img;
  try {
    const result = await cloudinary.uploader.upload(img.tempFilePath);
    const team = new Team({
      name: name,
      img: result.url,
      education: education,
      linkedin: linkedin,
      github: github
    });
    console.log(team);
    const finalResult = await team.save();
    return res.json({ team: finalResult });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }

}


export async function getTeam(req, res) {
  try {
    const finalResult = await Team.find({});
    return response_200(res, 'Fetched all team members!!', finalResult);
  } catch (error) {
    return response_500(res, 'Internal server error', error);
  }
}
