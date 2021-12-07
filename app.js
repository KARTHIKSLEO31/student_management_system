var express = require('express');
const bodyparser = require('body-parser');
var app = express();
// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

var students = require('./routes/students')
app.use("/api/students",students);

app.listen(3000, () => console.log('Server running at 3000'));

