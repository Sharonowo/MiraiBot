module.exports.config = {
    name: "maker",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "Tạo ra một avt trên taoanhdep.",
    commandCategory: "image",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
 
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
	 const { APIKEY } = global.configModule.fbcover;
	 if (this.config.credits != 'tdunguwu') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      } 
	else {
    return api.sendMessage(`Reply tin nhắn này để nhập mô tả của bạn`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "create",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        });
    }, event.messageID);
}
} 
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
        
        case "create": {
            var hi = event.body;
            
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://database-test.bangprocode.repl.co/api/maker?text=${hi}&apikey=DVB`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }} 