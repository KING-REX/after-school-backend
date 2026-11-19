const express = require("express");
const router = express.Router();

/** @type {import("../types/entities").Order[]} */
const orders = require("../data/orders");

router
  .route("/orders")
  .get((req, res) => {
    res.status(200).json(orders);
  })
  .post((req, res) => {
    /** @type {import("../types/entities").Order} */
    const orderParam = req.body;
    /** @type {import("../types/entities").Order} */
    const newOrder = {};
    newOrder.id = orders.length; //length is the index of the next element to be added
    newOrder.name = orderParam.name;
    newOrder.phone_num = orderParam.phone_num;
    newOrder.slots_purchased = orderParam.slots_purchased;
    newOrder.lesson_ids = orderParam.lesson_ids;
    newOrder.total_amount = orderParam.total_amount; // this should be derived not passed
    lessons.push(newOrder);
    res.status(201).json(lessons[newOrder.id]);
  });

router
  .route("/orders/:id")
  .get((req, res) => {
    const id = parseInt(req.params.id);
    if (id !== id) /* NaN is never equal to itself - so basically if(Number.isNaN(id)) */ {
      res.status(400).send("Invalid id");
    }
    const order = orders.find((order) => order.id === id);
    if (!order) res.status(404).send("Order not found!");
    res.status(200).json(order);
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    if (id !== id) /* NaN is never equal to itself - so basically if(Number.isNaN(id)) */ {
      res.status(400).send("Invalid id");
    }
    const order = orders.find((order) => order.id === id);
    if (!order) res.status(404).send("Order not found!");
    /** @type {import("../types/entities").Order} */
    const orderUpdate = req.body;
    /** @type {import("../types/entities").Order} */
    let newOrder = {};
    newOrder.id = order.id;
    newOrder.subject = orderUpdate.subject || order.subject;
    newOrder.location = orderUpdate.location || order.location;
    newOrder.price = orderUpdate.price || order.price;
    newOrder.image = {
      url: orderUpdate.image.url || order.image.url,
      alt: orderUpdate.image.alt || order.image.alt,
    };
    newOrder.slots_available = orderUpdate.slots_available || order.slots_available;
    orders[order.id] = newOrder;
    res.status(200).send("Operation successful");
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    if (id !== id) /* NaN is never equal to itself - so basically if(Number.isNaN(id)) */ {
      res.status(400).send("Invalid id");
    }
    const orderId = orders.findIndex((order) => order.id === id);
    if (orderId === -1) res.status(404).send("Order not found!");
    orders.splice(orderId, 1);
    res.status(200).send("Operation successful");
  });

module.exports = router;
