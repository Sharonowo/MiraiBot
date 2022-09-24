const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']

module.exports.config = {
  name: "mirai",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Dũngkon ",
  description: "xem ảnh mirai",
  commandCategory: "Dũngkon",                                                                                                                                                                                                       usages: "pô",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": ""
}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  global
}) {
  return request('https://image-random-api.dungkon.repl.co/mirai/?apikey=0bk3s6IAyq', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body:  "Ảnh mirai",
        attachment: fs.createReadStream(__dirname + `/cache/mirai.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mirai.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/mirai.${ext}`)).on("close", callback);
  });
}