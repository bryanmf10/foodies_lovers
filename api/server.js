const express = require('express');
const cors = require('cors');

const fotoRouter = require('./routes/foto-controller');

const app = express();
app.use(cors());

app.use(express.json());

//app.use("/img", express.static('uploads'));
app.use("/", express.static('public'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));
