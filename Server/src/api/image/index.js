import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel } from "../../database/allModels";
import { s3Upload } from "../../util/s3";

const Router = express.Router();

// multer configure
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Route     /:_id
 * Des       Get image Details
 * Params    _id
 * Access    Public
 * Method    Get
 */
// Router.get("/:id", async (req, res) => {
//   try {
//     const { _id } = req.params;
//     const image = await ImageModel.findById(_id);
//     return res.json({ image });
//   } catch (error) {
//     return res.status().json({ error: error.message });
//   }
// });

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const images = await ImageModel.findById(_id);

    if (!images) {
      return res.status(404).json({ error: "Image not found" });
    }
    return res.json({ images });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /
 * Des       Upload given image to s3 bucket and save file link to mongoDB
 * Params    _id
 * Access    Public
 * Method    POST
 */
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    const bucketOptions = {
      Bucket: "zomato-clone-pranav",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    const dbUpload = await ImageModel.create({
      images: [
        {
          location: uploadImage.Location,
        },
      ],
    });

    return res.status(200).json({ dbUpload });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
