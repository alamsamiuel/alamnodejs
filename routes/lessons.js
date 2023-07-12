const express = require("express");
const Lessons = require("../models/lessons");
const lessonsRouter = express.Router();


// POST REQUEST TO ADD LESSONS
lessonsRouter.post("/lessons/add", async (req, res) => {
  try {
    const { subject, location, price , space } = req.body;
    let lessons = new Lessons({ subject, location, price , space  });
    lessonsData = await lessons.save();
    res.json(lessonsData);
    res.status(200);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});


// GET REQUEST TO GET ALL THE LESSONS FROM MONGODB 
lessonsRouter.get("/lessons", async function (req, res) {
  try {
    // Retrieve all the available fields/documents in the model
    var lessons = await Lessons.find({});
    res.json(lessons);
  } catch (error) {
    res.status(500).send(error);
  }
});


// GET LESSONS USING ID TO GET THE ONE LESSONS GIVEN BY ID
lessonsRouter.get('/lessons/:id', async function (req, res) {
    try {
      // Retrieve all the available fields/documents in the model
      var lessons = await Lessons.findById(req.params.id)
      if(lessons) res.json(lessons);
    } catch (error) {
      res.status(500).send(error);
    }
  });


module.exports = lessonsRouter;
