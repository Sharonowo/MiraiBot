module.exports.config = {
  name: "bienso",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "xem khu vực của biển số",
  commandCategory: "bienso",
  usages: "bienso",
  cooldowns: 5,
  dependencies: {"axios" : ""}

  
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let bienso = args.join(" ");
if (!bienso) return api.sendMessage('Vui lòng nhập biển số cần tìm?', event.threadID, event.messageID);
const res = await axios.get(`https://le31.glitch.me/other/bienso?q=${bienso}`);
var kq = res.data.data;

return api.sendMessage(`\n\n=>Biển Số<=\n\n=Khu Vực: ${kq}`, event.threadID, event.messageID)
}

