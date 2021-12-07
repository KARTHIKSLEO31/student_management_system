const express = require("express");
const router = express.Router();
let students = require("../db/students.json");
router.get("/", (req, res) => {
  console.log("students", students);
  res.json(students);
});

router.get("/:id", (req, res) => {
  const found = students.some((student) => student._id === parseInt(req.params.id));

  if (found) {
    res.json(students.filter((student) => student._id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

//Update User

router.put("/:id", (req, res) => {

  const found = students.some(student => student._id === parseInt(req.params.id));

 

  if (found) {

    const updateUser = req.body;

    students.forEach(student => {

      if (student._id === parseInt(req.params.id)) {

        student.name = updateUser.name ? updateUser.name : student.name;

        res.json({ msg: "Student updated", student });

      }

    });

  } else {

    res.sendStatus(400);

  }

});

 

//Delete User

router.delete("/:id", (req, res) => {

  const found = students.some(student => student._id === parseInt(req.params.id));

 

  if (found) {

    students = students.filter(student => student._id !== parseInt(req.params.id))

    res.json({

      msg: "Student deleted",

      students

    });

  } else {

    res.sendStatus(400);

  }

});

module.exports = router;
