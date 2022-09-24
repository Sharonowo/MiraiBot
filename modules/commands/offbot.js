module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HĐGN",
	description: "Tắt Bot Đi Ngủ.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Success ✅",event.threadID, () =>process.exit(0))