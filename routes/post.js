const express = require("express");
const { sentimentAnalysis } = require("../config/googleNL");
const router = express.Router();
const cors = require("cors");
router.post("/score", cors(), async (req, res, next) => {
  const score = await sentimentAnalysis(req.body.text);
  res.status(200).json(score);
});

module.exports = router;
