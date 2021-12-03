var express = require('express');
var app = express();
var students = require('./routes/students')
app.use("/api/students",students);

app.listen(3000, () => console.log('Server running at 3000'));

