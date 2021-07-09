const express = require("express");
const controllerGet = require("../controller/get.js");

const routes = express.Router();

routes.get("/", controllerGet.getHome);

routes.get("/Identite", controllerGet.getIdentite);

routes.get("/works", controllerGet.getWorks);

routes.get("/keyWord", controllerGet.getKeyWord);

routes.get("/competences", controllerGet.getCompetences);

module.exports = routes;
