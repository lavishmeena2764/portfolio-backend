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
  const {
    name,
    education,
    linkedin,
    github
  } = req.body;

  const img = req.files.img;
  cloudinary.uploader.upload(img.tempFilePath, (err, result) => {
    const team = new Team({
      name: name,
      img: result.url,
      education: education,
      linkedin: linkedin,
      github: github
    });
    console.log(team);
    team.save().then((finalResult,err) => {
      if(err) console.log(err)
      return res.json({ team: finalResult });
    }).catch(error => console.log(error))
  })


}


export async function getTeam(req, res) {
  console.log("sending teams");
  Team.find({})
    .then((finalResult) => {
      console.log(finalResult);
      return response_200(res, 'Fetched all team members!!', finalResult);
    }).catch(error => { return response_500(res, 'Internal server error', error); });

}
