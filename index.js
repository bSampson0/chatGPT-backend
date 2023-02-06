import express from "express";
import { ChatGPTAPI } from "chatgpt";

const app = express();
const port = 6969;
const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

const getData = async (message) => {
  const res = await api.sendMessage(message);
  return res;
};

app.post("/", async (req, res) => {
  const data = await getData(req.body.message);
  res.send(data);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
