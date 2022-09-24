module.exports.config = {
  name: "demthoigian",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shiron",
  description: "MÁY ĐẾM THỜI GIAN",
  commandCategory: "THỜI GIAN",
  usages: "THỜI GIAN",
  cooldowns: 0
};
module.exports.run = async ({ api, event,args }) => {
  const axios = require("axios")
  let text = args.join(" ")
  if (!text) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 -> text2 ]!', event.threadID, event.messageID);
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("->")[0];
  if (!text1) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 -> text2 ]!', event.threadID, event.messageID); 
  const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("->")[1];
  if (!text2) return api.sendMessage('Vui lòng nhập đúng định dạng [text1 -> text2 ]!', event.threadID, event.messageID); 
  const res = await axios.get(`https://le31.glitch.me/other/date-calculator?first=${text1}&second=${text2}`);
  const s = res.data;
  return api.sendMessage(`\n\n====>MÁY ĐẾM THỜI GIAN<====\n\n=>Số Năm: ${s.years}\n=>Số Tháng: ${s.months}\n=>Số Tuần: ${s.weeks}\n=>Số Ngày: ${s.days}\n=>Số Tiếng: ${s.hours}\n=>Số phút: ${s.minutes}\n=>Số Giây: ${s.seconds}\n\n=====>MEO BOT<=====`, event.threadID, event.messageID)
}