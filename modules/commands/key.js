module.exports.config = {
    name: "key",
    version: "1.1.2",
    hasPermssion: 1,
    credits: "Hoàng",// pls đừng mod cái này :>
    description: "CƯỚP QTV HỘ TAO CÁI",
    commandCategory: "group",
    usages: "key",
    cooldowns: 1,
    dependencies: {
        "path": "",
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'hoang.json');
    if (!existsSync(path)) {
        const obj = {
            qtv: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('qtv')) data.qtv = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }

  
}

module.exports.run = async function({ api, event }) {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'hoang.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { qtv } = database;
    if (qtv[threadID] == true) {
        qtv[threadID] = false;
        api.sendMessage("Đã tắt chế độ chống cướp qtv box", threadID, messageID);
    } else {
        qtv[threadID] = true;
        api.sendMessage("Đã bật chế độ chống cướp qtv box", threadID, messageID);
    }
    writeFileSync(path, JSON.stringify(database, null, 4));
}