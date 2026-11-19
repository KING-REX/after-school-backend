const express = require("express");
const router = express.Router();

/** @type {import("../types/entities").Lesson[]} */
const lessons = require("../data/lessons");

router
  .route("/lessons")
  .get((req, res) => {
    res.status(200).json(lessons);
  })
  .post((req, res) => {
    /** @type {import("../types/entities").Lesson} */
    const lessonParam = req.body;
    /** @type {import("../types/entities").Lesson} */
    const newLesson = {};
    newLesson.id = lessons.length; //length is the index of the next element to be added
    newLesson.subject = lessonParam.subject;
    newLesson.location = lessonParam.location;
    newLesson.price = lessonParam.price;
    newLesson.image = {
      url: lessonParam.image.url,
      alt: lessonParam.image.alt,
    };
    newLesson.slots_available = lessonParam.slots_available;
    lessons.push(newLesson);
    res.status(201).json(lessons[newLesson.id]);
  });

router
  .route("/lessons/:id")
  .get((req, res) => {
    const id = parseInt(req.params.id);
    if (id !== id) /* NaN is never equal to itself - so basically if(Number.isNaN(id)) */ {
      res.status(400).send("Invalid id");
    }
    const lesson = lessons.find((lesson) => lesson.id === id);
    if (!lesson) res.status(404).send("Lesson not found!");
    res.status(200).json(lesson);
  })
  .put((req, res) => {
    const id = parseInt(req.params.id);
    if (id !== id) /* NaN is never equal to itself - so basically if(Number.isNaN(id)) */ {
      res.status(400).send("Invalid id");
    }
    const lesson = lessons.find((lesson) => lesson.id === id);
    if (!lesson) res.status(404).send("Lesson not found!");
    /** @type {import("../types/entities").Lesson} */
    const lessonUpdate = req.body;
    /** @type {import("../types/entities").Lesson} */
    let newLesson = {};
    newLesson.id = lesson.id;
    newLesson.subject = lessonUpdate.subject || lesson.subject;
    newLesson.location = lessonUpdate.location || lesson.location;
    newLesson.price = lessonUpdate.price || lesson.price;
    newLesson.image = {
      url: lessonUpdate.image.url || lesson.image.url,
      alt: lessonUpdate.image.alt || lesson.image.alt,
    };
    newLesson.slots_available = lessonUpdate.slots_available || lesson.slots_available;
    lessons[lesson.id] = newLesson;
    res.status(200).send("Operation successful");
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id);
    if (id !== id) /* NaN is never equal to itself - so basically if(Number.isNaN(id)) */ {
      res.status(400).send("Invalid id");
    }
    const lessonId = lessons.findIndex((lesson) => lesson.id === id);
    if (lessonId === -1) res.status(404).send("Lesson not found!");
    lessons.splice(lessonId, 1);
    res.status(200).send("Operation successful");
  });

module.exports = router;
