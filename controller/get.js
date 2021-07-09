const Model = require("../model/Data");

exports.getHome = (req, res, next) => {
	res.render("Home", {
		title: "welcome to my api",
		routes: [
			{ routes: "", methode: "get", name: "Home", path: "/" },
			{ routes: "", methode: "get", name: "Identite", path: "/Identite" },
			{ routes: "", methode: "get", name: "works", path: "/works" },
			{ routes: "", methode: "get", name: "keyWord", path: "/keyWord" },
			{ routes: "", methode: "get", name: "competences", path: "/competences" },
			{ routes: "", methode: "post", name: "post", path: "/admin/works/post" },
			{
				routes: " {} un objet contenant tout les elements du formulaire ",
				methode: "post",
				name: "update",
				path: "/admin/works/update"
			},
			{
				routes: "{ id : id } dans le body",
				methode: "post",
				name: "delete",
				path: "/admin/works/delete"
			}
		]
	});
};

exports.getWorks = (req, res) => {
	Model.getHeader((contenteFile) => {
		res.send(contenteFile.works);
	});
};

exports.getIdentite = (req, res) => {
	Model.getHeader((contenteFile) => {
		res.send(contenteFile.Identite);
	});
};

exports.getCompetences = (req, res) => {
	Model.getHeader((contenteFile) => {
		res.send(contenteFile.competences);
	});
};

exports.getKeyWord = (req, res) => {
	Model.getHeader((contenteFile) => {
		res.send(contenteFile.keyWord);
	});
};
