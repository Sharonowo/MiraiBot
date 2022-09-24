module.exports.config = {
  name: "sdtphongthuy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "xem số điện thoại phong thủy",
  commandCategory: "sdtphongthuy",
  usages: "sdtphongthuy",
  cooldowns: 5,
  dependencies: {"axios" : ""}

  
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let sdt = args.join(" ");
const res = await axios.get(`https://le31.glitch.me/other/sdtphongthuy?number=${sdt}`);
var bonsoduoi = res.data.bonsoduoi;
var soly = res.data.soly;
var ynghia = res.data.ynghia;
var ketluan = res.data.ketluan;

return api.sendMessage(`\n\n=>SỐ ĐIỆN THOẠI PHONG THỦY<=\n\n=>Bốn số dưới: ${bonsoduoi}\n=>Số lý: ${soly}\n=>Ý nghĩa: ${ynghia}\n=>Kết luận: ${ketluan}`, event.threadID, event.messageID)
}

