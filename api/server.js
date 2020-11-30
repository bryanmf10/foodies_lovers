const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/usersController');
const rankingRouter = require('./routes/rankingController');

const app = express();
app.use(cors());

app.use(express.json());

//app.use("/img", express.static('uploads'));
app.use("/", express.static('public'));
app.use('/users', usersRouter);
app.use('/ranking', rankingRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));
