const express = require("express");

const router = express.Router();

router
  .route("/orders")
  .get((req, res) => {
    res.send("GET /orders reached!");
  })
  .post((req, res) => {
    res.send("POST /orders reached!");
  });

router
  .route("/orders/:id")
  .get((req, res) => {
    res.send("GET /orders/:id reached!");
  })
  .put((req, res) => {
    res.send("PUT /orders reached!");
  })
  .delete((req, res) => {
    res.send("DELETE /orders reached!");
  });

module.exports = router;
