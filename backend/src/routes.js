const express = require("express");
<<<<<<< HEAD
const SessionController = require("./controllers/SessionController");
=======
const SessionController = require('./controllers/SessionController')
>>>>>>> d0d6bf2d0993186d06507d2f8b9355e4ddb85a91

const routes = express.Router();

routes.post("/sessions", SessionController.store);

<<<<<<< HEAD
module.exports = routes;
=======
module.exports = routes

// oba kaduzada
>>>>>>> d0d6bf2d0993186d06507d2f8b9355e4ddb85a91
