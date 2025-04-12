import "./database.js";
import { PostModule } from "./models.js";
import express from "express";

export const app = express();

app.use(express.json());

app.get("/api/search", async (req, res) => {
  const text = req.query.text;

  if (!text) {
    return res.status(400).send({ message: "Search text is required." });
  }

  try {
    const results = await PostModule.find({
      $or: [
        { title: new RegExp(text, "i") },
        { content: new RegExp(text, "i") },
      ],
    });

    res.send(results);
  } catch (error) {
    console.error("Oops! Failed to search...", error);
    res.status(500).send({ message: "Oops! Failed to search..." });
  }
});
