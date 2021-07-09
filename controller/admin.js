const Model = require("../model/Data");
exports.post = (req, res) => {
	let db = [];
	req.on("data", (data) => {
		db.push(data);
	});
	req.on("end", () => {
		const datab = JSON.parse(Buffer.concat(db).toString());
		const post = new Model(datab);
		post.postHeader(() => {
			res.json({ ok: "ok" });
		});
	});
};

exports.update = (req, res) => {
	let db = [];
	req.on("data", (data) => {
		db.push(data);
	});
	req.on("end", () => {
		const datab = JSON.parse(Buffer.concat(db).toString());
		const update = new Model(datab);
		update.postUpdateHeader(datab.id, () => {
			console.log("ok");
			res.json({ ok: "ok" });
		});
	});
};

exports.Delete = (req, res) => {
	let db = [];
	req.on("data", (data) => {
		db.push(data);
	});
	req.on("end", () => {
		const datab = JSON.parse(Buffer.concat(db).toString());
		Model.deleteHeader(datab.id, () => {
			console.log("ok");
			res.json({ ok: "ok" });
		});
	});
};
