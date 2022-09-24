module.exports.config = {
    name: "fbcove",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "BraSL",
    description: "Tạo ra một avt trên taoanhdep.\n /fbcover id | tên chính | tên phụ | màu",
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
  var info = await api.getUserInfoV2(event.senderID);
  const { threadID, messageID, senderID, body } = event;
   if (this.config.credits != 'BraSL') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      } 
     /*else{
if (args[0] == "list") {
var listAnime = (await axios.get(`https://taoanhdep.van-diendien1.repl.co/`)).data
      var lengthID = [];
    var i =1
    var msg = []
    var msgg = []
    for (let id of listAnime) { 
        lengthID.push(id.imgAnime)
        const text3 = id.imgAnime.split("s0/").pop()
        const text1 = text3.substr(0, text3.indexOf('.')); 

        msgg.push(text1.charAt(0).toUpperCase() + text1.slice(1).replace("-", " "))
    }           
    var page = 1;
        page = parseInt(args[1]) || 1;
        page < -1 ? page = 1 : "";
    var limit = 15;
    var msg = "==== DANH SÁCH NHÂN VẬT ===\n\n";
    var numPage = Math.ceil(msgg.length / limit);
      for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= msgg.length) break;
          let name = msgg[i];                  
          msg +=` » ID: ${i+1}. ${name}\n`;             
      }
    msg += `\n» Trang ${page}/${numPage}\n`
    msg += `» Hiện tại có ${(lengthID.length)} nhân vật\n`
    return api.sendMessage(msg, threadID)}
  else if (senderID == api.getCurrentUserID()) return;

}*/
try{ 
    const id = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
        const name = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1];
       const tenphu = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2];
        const color = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3];
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
                api.unsendMessage(info.messageID)
            var callback = () => api.sendMessage({body:`của bạn nek`,attachment: fs.createReadStream(__dirname + "/cache/tad.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tad.png"),event.messageID); 
       return request(encodeURI(`https://apituandz.ducdz999.repl.co/fbcover/v2?name=${name}&id=${id}&subname=${tenphu}&color=${color}`)).pipe(fs.createWriteStream(__dirname+'/cache/tad.png')).on('close',() => callback());    
    }, 3000);
          }, messageID);
 
    }
  catch(e){
    
    console.log(e.message)
    if (res.data.error) {
    return api.sendMessage("API lỗi vui lòng liên hệ ADMIN https://www.facebook.com/100012371343281 để biết thêm chi tiết")}
  }

}