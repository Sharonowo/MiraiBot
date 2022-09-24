const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']

module.exports.config = {
  name: "mtp",
  version: "2.0.1",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "xem ảnh Mtp",
  commandCategory: "Dũngkon",                                                                                                                                                                                                       usages: "mtp",
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
  return request('https://random.dinhvan12.repl.co/mtp', (err, response, body) => {
    let picData = JSON.parse(body);                                                                                                                                                                                                   var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let callback = function() {
      api.sendMessage({
        body:  "Ảnh Sơn Tùng MTP",
        attachment: fs.createReadStream(__dirname + `/cache/mtp.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mtp.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/mtp.${ext}`)).on("close", callback);
  });
}