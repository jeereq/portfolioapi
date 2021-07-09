const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routesHome = require("./routes/routesHome.js");
const routesAdmin = require("./routes/routesAdmin.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routesHome);
app.use("/admin", routesAdmin);

app.use((req, res) => {
	res.status(404).render("Erreur", { title: "erreur page" });
});

app.listen(4000, () => {
	console.log("tout marche a la prefection");
});
