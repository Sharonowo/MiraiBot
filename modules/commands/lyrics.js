module.exports.config = {
	name: "lyrics",
  version: "1.0.1", 
	hasPermssion: 0,
	credits: "Hoàng",
	description: "đoán xem", 
	commandCategory: "Lyrics",
	usages: "Dùng đi help con cu",
	cooldowns: 5,
    dependencies: {
    	"lyrics-finder": ""
    }
};
module.exports.run = async function ({ api, args, event }) {
  const lyricsFinder = global.nodemodule['lyrics-finder'];
    var lyrics = await lyricsFinder(args.join(" ")) || "Đéo thấy";
    console.log(lyrics);
api.sendMessage(`${lyrics}`, event.threadID, event.messageID);
}