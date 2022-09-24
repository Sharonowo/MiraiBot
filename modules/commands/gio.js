const chalk = require('chalk');
console.log(chalk.bold.hex("#EE7942").bold("-------------LOADED CMD TIME-------------"));

module.exports.config = {
    name: "gio",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nguyen Quoc Anh",
    description: "hmmm",
    commandCategory: "hmmm",
    cooldowns: 5,
    dependencies: {
         "moment-timezone": "",
        "fs-extra": ""
    }
}
module.exports.run = function ({ event, api }) {
 const fs = global.nodemodule["fs-extra"];
 console.log(chalk.bold.hex("#912CEE").bold("THANKS YOUR USING MODULE TIME :DD"));
//* spam console
for ( let i = 0 ; i < 200 ; i++) {
 console.log(chalk.bold.hex("#6A5ACD").bold(":DDDDDD"));
};
//*
    var { threadID, messageID} = event;
var time = require('moment-timezone');
var getTime = time().tz("Asia/Ho_Chi_Minh");
year = getTime.year();
date = getTime.date();
month = getTime.month();
 day = getTime.day();
 hour  = getTime.hour();
 minute = getTime.minute();
 second = getTime.second();
 day = (day == 0) ? "Chu Nhat" : `Thu ${day += 1}`;
 api.sendMessage({body: `Gio Viet Nam\n bay gio la ${hour} gio ${minute} phut ${second} giay\n ${day} ngay ${date} thang ${month} nam ${year}`}, threadID, messageID);
}
