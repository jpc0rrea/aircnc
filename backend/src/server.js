const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack1:omnistack1@aircnc-th3ni.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
=======
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@aircnc-9tcgr.mongodb.net/aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    userUnifiedTopology: true,
})

>>>>>>> d0d6bf2d0993186d06507d2f8b9355e4ddb85a91

app.use(express.json());
app.use(routes);

app.listen(3333);


