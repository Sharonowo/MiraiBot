const fs = require('fs');
const ytdl = require('ytdl-core');
const { resolve } = require('path');
const axios = require('axios')
async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Thiáº¿u link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}
module.exports.convertHMS = function(value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60); 
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return (hours != '00' ? hours +':': '') + minutes+':'+seconds;
}
module.exports.config = {
    name: "music",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "PhÃ¡t nháº¡c thÃ´ng qua link YouTube hoáº·c tá»« khoÃ¡ tÃ¬m kiáº¿m",
    commandCategory: "PhÆ°Æ¡ng tiá»‡n",
    usages: "[searchMusic]",
    cooldowns: 0,
     envConfig: {
		"YOUTUBE_API": "AIzaSyC4iLJTqxpkRvDYSUnDHkUVAj0H4q5f3GE"
	}
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
    const axios = require('axios')
    const { createReadStream, unlinkSync, statSync } = require("fs-extra")
    try {
        var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
        var data = await downloadMusicFromYoutube('https://www.youtube.com/watch?v=' + handleReply.link[event.body -1], path);
        if (fs.statSync(path).size > 26214400) return api.sendMessage('KhÃ´ng thá»ƒ gá»­i file vÃ¬ dung lÆ°á»£ng lá»›n hÆ¡n 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
        api.unsendMessage(handleReply.messageID)
        return api.sendMessage({ 
            body: `ðŸŽ¶====ã€Œ ðŒð”ð’ðˆð‚ ã€====ï¸ðŸŽ¶\n\n[ðŸ“Œ] â†’ ð—§ð—¶ð˜ð—¹ð—²: ${data.title}\n[ðŸ‘¤] â†’ ð—–ð—µð—®ð—»ð—»ð—²ð—¹: ${data.author}\n[â±ï¸] â†’ ð—§ð—µð—¼Ì›Ì€ð—¶ ð—´ð—¶ð—®ð—»: ${this.convertHMS(data.dur)}\n[ðŸ‘ï¸â€ðŸ—¨ï¸] â†’ ð—Ÿð˜‚Ì›ð—¼Ì›Ì£ð˜ ð˜…ð—²ð—º: ${data.viewCount} ð˜ƒð—¶ð—²ð˜„\n[â¤ï¸] â†’ ð—Ÿð˜‚Ì›ð—¼Ì›Ì£ð˜ ð˜ð—µð—¶Ìð—°ð—µ: ${data.likes} ð—¹ð—¶ð—¸ð—²\n[â±ï¸] â†’ ð—§ð—µð—¼Ì›Ì€ð—¶ ð—´ð—¶ð—®ð—» ð˜…ð˜‚Ì›Ì‰ ð—¹ð˜†Ì: ${Math.floor((Date.now()- data.timestart)/1000)} ð—´ð—¶ð—®Ì‚ð˜†`,
            attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
         event.messageID)
            
    }
    catch (e) { return console.log(e) }
}
module.exports.run = async function ({ api, event, args }) {
  const YouTubeAPI = global.nodemodule["simple-youtube-api"];
  const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
    if (args.length == 0 || !args) return api.sendMessage('Â» Pháº§n tÃ¬m kiáº¿m khÃ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng!', event.threadID, event.messageID);
    const keywordSearch = args.join(" ");
    var path = `${__dirname}/cache/sing-${event.senderID}.mp3`
    if (fs.existsSync(path)) { 
        fs.unlinkSync(path)
    }
    if (args.join(" ").indexOf("https://") == 0) {
        try {
            var data = await downloadMusicFromYoutube(args.join(" "), path);
            if (fs.statSync(path).size > 26214400) return api.sendMessage('KhÃ´ng thá»ƒ gá»­i file vÃ¬ dung lÆ°á»£ng lá»›n hÆ¡n 25MB.', event.threadID, () => fs.unlinkSync(path), event.messageID);
            return api.sendMessage({ 
                body: `ðŸŽ¶====ã€Œ ðŒð”ð’ðˆð‚ ã€====ï¸ðŸŽ¶\n\n[ðŸ“Œ] â†’ ð—§ð—¶ð˜ð—¹ð—²: ${data.title}\n[ðŸ‘¤] â†’ ð—–ð—µð—®ð—»ð—»ð—²ð—¹: ${data.author}\n[â±ï¸] â†’ ð—§ð—µð—¼Ì›Ì€ð—¶ ð—´ð—¶ð—®ð—»: ${this.convertHMS(data.dur)}\n[ðŸ‘ï¸â€ðŸ—¨ï¸] â†’ ð—Ÿð˜‚Ì›ð—¼Ì›Ì£ð˜ ð˜…ð—²ð—º: ${data.viewCount} ð˜ƒð—¶ð—²ð˜„\n[â¤ï¸] â†’ ð—Ÿð˜‚Ì›ð—¼Ì›Ì£ð˜ ð˜ð—µð—¶Ìð—°ð—µ: ${data.likes} ð—¹ð—¶ð—¸ð—²\n[â±ï¸] â†’ ð—§ð—µð—¼Ì›Ì€ð—¶ ð—´ð—¶ð—®ð—» ð˜…ð˜‚Ì›Ì‰ ð—¹ð˜†Ì: ${Math.floor((Date.now()- data.timestart)/1000)} ð—´ð—¶ð—®Ì‚ð˜†`,
                attachment: fs.createReadStream(path)}, event.threadID, ()=> fs.unlinkSync(path), 
            event.messageID)
            
        }
        catch (e) { return console.log(e) }
    } else {
          try {
           var link = [], msg = "", num = 1, l = [];
			let results = await youtube.searchVideos(keywordSearch, 10);
			for (const value of results) {
				if (typeof value.id !== 'undefined') {;
					link.push(value.id);
					msg += (`${num++}. ${value.title}\n`);
          const t = (await axios.get(`${value.thumbnails.high.url}`, {
        responseType: "stream"
      })).data;
    l.push(t)
				}
			}
            var body = `Â»ðŸ”Ž ð‚ð¨Ì ã€${link.length}ã€‘ð¤ðžÌ‚Ìð­ ðªð®ðšÌ‰ ð­ð«ð®Ì€ð§ð  ð¯ð¨Ì›Ìð¢ ð­ð®Ì›Ì€ ð¤ð¡ð¨ðšÌ ð­ð¢Ì€ð¦ ð¤ð¢ðžÌ‚Ìð¦ ðœð®Ì‰ðš ð›ðšÌ£ð§ \n\nðŸ‘â”€â”€â”€â”€ â€¢ðŸŽ¶â€¢ â”€â”€â”€â”€ðŸ‘\n${msg}Â» ð‡ðšÌƒð² ð«ðžð©ð¥ð²(ð©ð¡ðšÌ‰ð§ ð¡ð¨Ì‚Ì€ð¢) ðœð¡ð¨Ì£ð§ ð¦ð¨Ì£Ì‚ð­ ð­ð«ð¨ð§ð  ð§ð¡ð®Ì›Ìƒð§ð  ð­ð¢Ì€ð¦ ð¤ð¢ðžÌ‚Ìð¦ ð­ð«ðžÌ‚ð§`
            return api.sendMessage({
              body: body,
              attachment: l
            }, event.threadID, (error, info) => global.client.handleReply.push({
              type: 'reply',
              name: this.config.name,
              messageID: info.messageID,
              author: event.senderID,
              link
            }), event.messageID);
          } catch(e) {
            return api.sendMessage('ÄÃ£ xáº£y ra lá»—i, vui lÃ²ng thá»­ láº¡i trong giÃ¢y lÃ¡t!!\n' + e, event.threadID, event.messageID);
        }
    }
}