const express = require("express");
const controllerAdmin = require("../controller/admin.js");

const routes = express.Router();

routes.post("/works/post", controllerAdmin.post);

routes.post("/works/update", controllerAdmin.update);

routes.post("/works/delete", controllerAdmin.Delete);

module.exports = routes;
