const fs = require("fs");
const path = require("path");

const p = path.join(
	path.dirname(process.mainModule.filename),
	"file",
	"db.json"
);
const getFile = (cb) => {
	fs.readFile(p, (err, contentfile) => {
		cb(err, JSON.parse(contentfile));
	});
};
const postFile = (File, cb) => {
	fs.writeFile(p, JSON.stringify(File), (err) => {
		if (!err) cb();
	});
};

module.exports = class Data {
	constructor({ id, src, alt, title, href, resume, title_card }) {
		this.src = src;
		this.alt = alt;
		this.id = id;
		this.title = title;
		this.href = href;
		this.resume = resume;
		this.title_card = title_card;
	}
	postUpdateHeader(id, cb) {
		getFile((err, contentfile) => {
			if (!err) {
				const exist = contentfile.works.findIndex(
					(Element) => +Element.id === +id
				);
				contentfile.works[exist] = this;
				postFile(contentfile, cb);
			}
		});
	}
	postHeader(cb) {
		getFile((err, contentFile) => {
			if (!err) {
				const length = contentFile.works.length - 1;
				const contentFileLast = contentFile.works[length];
				this.id = +contentFileLast.id + 1;
				contentFile.works.push(this);
				postFile(contentFile, cb);
			}
		});
	}
	static getHeader(cb) {
		getFile((err, contentfile) => {
			if (!err) cb(contentfile);
		});
	}
	static updateHeader(id, cb) {
		getFile((err, contentfile) => {
			if (!err) {
				const updatedData = contentfile.header.data.find(
					(Element) => +Element.id === +id
				);
				cb(updatedData);
			}
		});
	}
	static deleteHeader(id, cb) {
		getFile((err, contentfile) => {
			if (!err) {
				const updatedData = contentfile.works.filter(
					(Element) => +Element.id !== +id
				);
				contentfile.works = updatedData;
				postFile(contentfile, cb);
			}
		});
	}
};
