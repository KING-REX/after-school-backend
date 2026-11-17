const express = require("express");

const router = express.Router();

router
  .route("/lessons")
  .get((req, res) => {
    res.send("GET /lessons reached!");
  })
  .post((req, res) => {
    res.send("POST /lessons reached!");
  });

router
  .route("/lessons/:id")
  .get((req, res) => {
    res.send("GET /lessons/:id reached!");
  })
  .put((req, res) => {
    res.send("PUT /lessons reached!");
  })
  .delete((req, res) => {
    res.send("DELETE /lessons reached!");
  });

module.exports = router;
