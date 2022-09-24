module.exports.config = {
	name: "gaidep",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "Nhật UwU",
	description: "Random ảnh có phí",
	commandCategory: "Ảnh Gái Thôi",
	usages: "",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 200) {
		axios.get('https://api.vinhbeat.ga/gai.php').then(res => {
		var callback = function () {
					api.sendMessage({
						body : `Gì ngắm gái hả ảnh nè ngắm đi =))`,
						attachment: fs.createReadStream(__dirname + '/cache/gaidep.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/gaidep.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/gaidep.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 200}));
			})
	} else return api.sendMessage("Bạn cần 200 đô để xem ảnh ?",event.threadID,event.messageID);
}