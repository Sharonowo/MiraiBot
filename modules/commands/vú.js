module.exports.config = {
    name: "vú",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dũngkon",
    description: "Ảnh dú gái xinh 😍",
    commandCategory: "News",
    usages: "danso",
    cooldowns: 5
};

module.exports .run = async function ({ api, event, args }) {
 if (this.config.credits != 'Dũngkon') return api.sendMessage(`đổi cređit con cặc à?`,event.threadID,event.messageID);
   
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const chalk = global.nodemodule["chalk"];
const res = (await axios.get(`https://image-random-api.dungkon.repl.co/vu/?apikey=0bk3s6IAyq`)).data;

        let callback = async function () {
            api.sendMessage({
                body: `» Ảnh Dú Gái 😼\n» Bố Thằng mê dú 🙂`,
                attachment: fs.createReadStream(__dirname + `/cache/ina.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ina.png`), event.messageID);
            };
            request(res.data).pipe(fs.createWriteStream(__dirname + `/cache/ina.png`)).on("close", callback);
}