const request = require('request');
const fs = require('fs')
module.exports.config = {
    name: "tat",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dũngkon",
    description: "tát người bạn tag",
    commandCategory: "general",
    usages: "tát [tag người bạn cần tát]",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs": ""
    }
};

module.exports.run = async ({ api, event, args, Users }) => {
    const { threadID, messageID, senderID } = event;
    var out = (msg) => api.sendMessage(msg, threadID, messageID);
    if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
    let nameUser = await Users.getNameUser(senderID);
    console.log(nameUser);
    return request('https://randomlinkapi-2.dungkon.repl.co/slap', (err, response, body) => {
        let picData = JSON.parse(body);
        var mention = Object.keys(event.mentions)[0];
        let getURL = picData.url;
        let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
        let tag = event.mentions[mention].replace("@", "");
        let callback = function() {
        api.sendMessage({
            body: ` ${nameUser} Vừa tát méo mồm ${tag} 👌` ,
            mentions: [
                {
                    tag: nameUser,
                    id: senderID
                },
                {
                    tag: tag,
                    id: Object.keys(event.mentions)[0]
                }
            ],
            attachment: fs.createReadStream(__dirname + `/cache/tat.${ext}`)
        }, threadID, () => fs.unlinkSync(__dirname + `/cache/tat.${ext}`), messageID);
        };
        request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/tat.${ext}`)).on("close", callback);
    });
}