module.exports.config = {
    name: "get",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "VĐT&NTH",
    description: "Tải video hoặc ghi âm từ fb",
  commandCategory: "media",
  usages: "fbget audio/video [link]",
  cooldowns: 0
};
module.exports.run = async function ({api,event,args})  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
try { 
  if(args[0] == 'audio'){
        api.sendMessage(`Đang xử lí yêu cầu!!!`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 20000),event.messageID);
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(__dirname+`/cache/2.mp3`, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `✅Loaded success✅`, 
    attachment: fs.createReadStream(__dirname+`/cache/2.mp3`)}, event.threadID, () => fs.unlinkSync(__dirname+`/cache/2.mp3`),event.messageID);
    }; 
  } 
    catch { 
      return api.sendMessage(`Không thể xử lý yêu cầu`,event.threadID,event.messageID)
  }
    try { 
      if(args[0] == 'video'){
            api.sendMessage(`Đang xử lí yêu cầu!!!`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 20000),event.messageID);
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(__dirname+`/cache/1.mp4`, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `✅Loaded success✅`, 
    attachment: fs.createReadStream(__dirname+`/cache/1.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname+`/cache/1.mp4`),event.messageID);
    }; 
  } 
  catch 
  {
  return api.sendMessage(`Không thể xử lý yêu cầu`,event.threadID,event.messageID)
  }
}