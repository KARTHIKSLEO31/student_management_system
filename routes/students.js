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

  const found = users.some(user => user.id === parseInt(req.params.id));

 

  if (found) {

    const updateUser = req.body;

    users.forEach(user => {

      if (user.id === parseInt(req.params.id)) {

        user.name = updateUser.name ? updateUser.name : user.name;

        user.email = updateUser.email ? updateUser.email : user.email;

        res.json({ msg: "User updated", user });

      }

    });

  } else {

    res.sendStatus(400);

  }

});

 

//Delete User

router.delete("/:id", (req, res) => {

  const found = users.some(user => user.id === parseInt(req.params.id));

 

  if (found) {

    users = users.filter(user => user.id !== parseInt(req.params.id))

    res.json({

      msg: "User deleted",

      users

    });

  } else {

    res.sendStatus(400);

  }

});

module.exports = router;
