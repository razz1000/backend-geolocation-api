import express from "express";
import axios from "axios";

const dataRouter = express.Router();

dataRouter.get("/", async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques"
    );

    let data = await response.data;
    console.log(data);
    if (data) {
      res.send(data);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default dataRouter;
