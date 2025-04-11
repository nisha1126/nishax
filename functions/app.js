import "./database.js";
import { Posts } from "./models.js";
import express from "express";

export const app = express();

app.use(express.json());

  app.get("/api/search", (req, res) => {
    const text = req.query.text;
  
    Posts.find({
      $or: [
        {
          title: new RegExp(text, "i"),
        },
        {
          content: new RegExp(text, "i"),
        },
      ],
    })
      .then((results) => {
        res.send(results);
      })
      .catch((error) => {
        console.error("Oops!Failed to search...", error);
  
        res.status(500).send({
          message: "Oops!Failed to search...",
        });
      });
  })