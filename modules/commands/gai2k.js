module.exports.config = {
	name: "gai2k",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Random ảnh gái xinh nhất Việt Nam :))",
	commandCategory: "random-img",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.net/v2/image?api_key=LEANHTRUONG=mBxwpYOS8YsNZyiVeTwQ6VGt249bGGksgsV1W13tKhEj269tJF=APIKEY=PLANFREE&image=girlvn').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						  body: "Ảnh gái của các ông đây 🤣",
						attachment: fs.createReadStream(__dirname + `/cache/nude.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nude.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nude.${ext}`)).on("close", callback);
			})
}