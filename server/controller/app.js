const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/storySegmenting", async (req, res) => {
  if (req.body.content) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `split this story into 4 main parts ${req.body.content} set the output to be in json format with keys 1, 2, 3, 4`,
          },
        ],
        max_tokens: 1000,
      }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options
      );
      const data = await response.json();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(400).send("Content cannot be empty");
  }
});

app.post("/generateImage", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: process.env.STABLE_DIFFUSION_KEY,
      model_id:  "cartoonify-25d-sd15", 
      prompt: `${req.body.prompt} drawing.`,
      negative_prompt: "painting, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, deformed, ugly, blurry, bad anatomy, bad proportions, extra limbs, cloned face, skinny, glitchy, double torso, extra arms, extra hands, mangled fingers, missing lips, ugly face, distorted face, extra legs, anime",
      width: "512",
      height: "512",
      samples: "1",
      num_inference_steps: "30",
      safety_checker: "no",
      enhance_prompt: "yes",
      seed: null,
      guidance_scale: 7.5,
      multi_lingual: "no",
      panorama: "no",
      self_attention: "no",
      upscale: "no",
      embeddings: "embeddings_model_id",
      lora: "lora_model_id",
      webhook: null,
      track_id: null
    }),
  }

  try {
    const response = await fetch(
      "https://stablediffusionapi.com/api/v4/dreambooth"  ,
      options
    );
    const data = await response.json();
    res.status(200).send(data.output[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;