/*
* @Module made by Binee
* @No edit credits
* @Ban user edit credits
*/
module.exports.config = {
    name: "quybu",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Binee",
    description: "Game bầu cua có đặt cược  kiểu anime</> Coder by Binee",
    commandCategory: "economy",
    usages: "<[Bakugo/Eren/Gojo/Saitana/Mikey/Killua] hoặc[🔥/⚡/🍙/🦞/🦵/🐱]> <Số tiền cược (lưu ý phải trên 50$)>",
    cooldowns: 0
  };
  
  module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
    try {
      const { threadID, messageID, senderID } = event;
      const { getData, increaseMoney, decreaseMoney } = Currencies;
      const request = require('request');
      const axios = require('axios');
      if (this.config.credits != 'Binee') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      }
      const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
      const slotItems = ["Bakugo", "Eren", "Gojo", "Saitama", "Mikey", "Killua"];
      const money = (await getData(senderID)).money;
      if (isNaN(args[1]) == true) return api.sendMessage('Nội dung "Số tiền cược" mà bạn nhập không phải 1 con số hợp lệ!', threadID, messageID);
      var moneyBet = parseInt(args[1]);
      if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('Số tiền đặt cược không được dưới 50$', threadID, messageID);
      if (moneyBet > money) return api.sendMessage('Tài khoản của bạn không đủ tiền để chơi.', threadID, messageID);
      var number = [], list = [], listimg = [], win = false;
      var baucua1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      // ARGS
      let content = args[0];
      var content1;
      if (content == 'Bakugo' || content == '🔥') {
        content1 = 'bakugo';
      }
      else if (content == 'Eren' || content == '⚡') {
        content1 = 'eren';
      }
      else if (content == 'Gojo' || content == '🍙') {
        content1 == 'gojo';
      }
      else if (content == 'Saitama' || content == '🦞') {
        content1 = 'saitama';
      }
      else if (content == 'Mikey' || content == '🦵') {
        content1 = 'mikey';
      }
      else if (content == 'Killua' || content == '🐱') {
        content1 = 'killua';
      }
      else {
        return api.sendMessage(`Sai định dạng\n${global.config.PREFIX}${this.config.name} <[Bakugo/Eren/Gojo/Saitana/Mikey/Killua] hoặc[🔥/⚡/🍙/🦞/🦵/🐱]> <Số tiền cược (lưu ý phải trên 50$)>`, threadID, messageID);
      }
      // request
      if (!existsSync(__dirname + '/cache/bakugo.jpg')) {
        request('https://i.imgur.com/Gdjh4Ep.jpg').pipe(createWriteStream(__dirname + '/cache/bakugo.jpg'));
      }
      if (!existsSync(__dirname + '/cache/eren.jpg')) {
        request('https://i.imgur.com/3oHl1SK.jpg').pipe(createWriteStream(__dirname + '/cache/eren.jpg'));
      }
      if (!existsSync(__dirname + '/cache/gojo.jpg')) {
        request('https://i.imgur.com/UxONpyN.jpg').pipe(createWriteStream(__dirname + '/cache/gojo.jpg'));
      }
      if (!existsSync(__dirname + '/cache/saitama.jpg')) {
        request('https://i.imgur.com/blSKLZ3.jpg').pipe(createWriteStream(__dirname + '/cache/saitama.jpg'));
      }
      if (!existsSync(__dirname + '/cache/mikey.jpg')) {
        request('https://i.imgur.com/Mwrn5VD.jpg').pipe(createWriteStream(__dirname + '/cache/mikey.jpg'));
      }
      if (!existsSync(__dirname + '/cache/killua.jpg')) {
        request('https://i.imgur.com/x9hskuo.jpg').pipe(createWriteStream(__dirname + '/cache/killua.jpg'));
      }
      if (!existsSync(__dirname + '/cache/quybu.gif')) {
        request('https://i.imgur.com/sAGNwCs.gif').pipe(createWriteStream(__dirname + '/cache/quybu.gif'));
      }
      // baucua 1
      if (baucua1 == 'Bakugo') {
        var bau1 = 'bakugo';
        var bau_1 = __dirname + '/cache/bakugo.jpg';
      }
      else if (baucua1 == 'Eren') {
        var bau1 = 'eren';
        var bau_1 = __dirname + '/cache/eren.jpg';
      }
      else if (baucua1 == 'Gojo') {
        var bau1 = 'gojo';
        var bau_1 = __dirname + '/cache/gojo.jpg';
      }
      else if (baucua1 == 'Saitama') {
        var bau1 = 'saitama';
        var bau_1 = __dirname + '/cache/saitama.jpg';
      }
      else if (baucua1 == 'Mikey') {
        var bau1 = 'mikey';
        var bau_1 = __dirname + '/cache/mikey.jpg';
      }
      else if (baucua1 == 'Killua') {
        var bau1 = 'killua';
        var bau_1 = __dirname + '/cache/killua.jpg';
      }
      // baucua 2
      if (baucua2 == 'Bakugo') {
        var bau2 = 'bakugo';
        var bau_2 = __dirname + '/cache/bakugo.jpg';
      }
      else if (baucua2 == 'Eren') {
        var bau2 = 'eren';
        var bau_2 = __dirname + '/cache/eren.jpg';
      }
      else if (baucua2 == 'Gojo') {
        var bau2 = 'gojo';
        var bau_2 = __dirname + '/cache/gojo.jpg';
      }
      else if (baucua2 == 'Saitama') {
        var bau2 = 'saitama';
        var bau_2 = __dirname + '/cache/saitama.jpg';
      }
      else if (baucua2 == 'Mikey') {
        var bau2 = 'mikey';
        var bau_2 = __dirname + '/cache/mikey.jpg';
      }
      else if (baucua2 == 'Killua') {
        var bau2 = 'killua';
        var bau_2 = __dirname + '/cache/killua.jpg';
      }
      // baucua 3
      if (baucua3 == 'Bakugo') {
        var bau3 = 'bakugo';
        var bau_3 = __dirname + '/cache/bakugo.jpg';
      }
      else if (baucua3 == 'Eren') {
        var bau3 = 'eren';
        var bau_3 = __dirname + '/cache/eren.jpg';
      }
      else if (baucua3 == 'Gojo') {
        var bau3 = 'gojo';
        var bau_3 = __dirname + '/cache/gojo.jpg';
      }
      else if (baucua1 == 'Saitama') {
        var bau3 = 'saitama';
        var bau_3 = __dirname + '/cache/saitama.jpg';
      }
      else if (baucua3 == 'Mikey') {
        var bau3 = 'mikey';
        var bau_3 = __dirname + '/cache/mikey.jpg';
      }
      else if (baucua3 == 'Killua') {
        var bau3 = 'killua';
        var bau_3 = __dirname + '/cache/killua.jpg';
      }
      // array baucua
      list.push(bau1);
      list.push(bau2);
      list.push(bau3);
      // array img
      listimg.push(createReadStream(__dirname + '/cache/' + bau1 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau2 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau3 + '.jpg'))
      // ICON
      // icon 1
      if (bau1 == 'bakugo') {
        var icon1 = '🔥';
      }
      else if (bau1 == 'eren') {
        var icon1 = '⚡'
      }
      else if (bau1 == 'gojo') {
        var icon1 = '🍙';
      }
      else if (bau1 == 'saitama') {
        var icon1 = '🦞';
      }
      else if (bau1 == 'mikey') {
        var icon1 = '🦵';
      }
      else if (bau1 == 'killua') {
        var icon1 = '🐱';
      }
      // icon 2
      if (bau2 == 'bakugo') {
        var icon2 = '🔥';
      }
      else if (bau2 == 'eren') {
        var icon2 = '⚡'
      }
      else if (bau2 == 'gojo') {
        var icon2 = '🍙';
      }
      else if (bau2 == 'saitama') {
        var icon2 = '🦞';
      }
      else if (bau2 == 'mikey') {
        var icon2 = '🦵';
      }
      else if (bau2 == 'killua') {
        var icon2 = '🐱';
      }
      // icon 3
      if (bau3 == 'bakugo') {
        var icon3 = '🔥';
      }
      else if (bau3 == 'eren') {
        var icon3 = '⚡'
      }
      else if (bau3 == 'gojo') {
        var icon3 = '🍙';
      }
      else if (bau3 == 'saitama') {
        var icon3 = '🦞';
      }
      else if (bau3 == 'mikey') {
        var icon3 = '🦵';
      }
      else if (bau3 == 'saitama') {
        var icon3 = '🐱';
      }
      // sendMessage
      api.sendMessage({
        body: 'Ulatr Chúc may mắn nha Wibu :3333 ',
        attachment: createReadStream(__dirname + '/cache/quybu.gif')
      }, threadID, (err, info) => {
        if (err) return api.sendMessage(err, threadID, messageID);
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var check = list.findIndex(i => i.toString() == content1);
          var check2 = list.includes(content1);
          //console.log(check);
          //console.log(icon1 + icon2 + icon3);
          if (check >= 0 || check2 == true) {
            return api.sendMessage({
              body: `icon Các nhân vật anime: ${icon1} | ${icon2} | ${icon3}\n🌺Bạn đã thắng và nhận được ${moneyBet * 3}$`,
              attachment: listimg
            }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 3), messageID);
          }
          else if (check < 0 || check2 == false) {
            return api.sendMessage({
              body: `icon Các nhân vật anime: ${icon1} | ${icon2} | ${icon3}\n🌺Bạn đã thua và bị trừ ${moneyBet}$`,
              attachment: listimg
            }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
          }
          else {
            return api.sendMessage('Đã xảy ra lỗi. Vui lòng thử lại sau 5s', threadID, messageID);
          }
        }, 3000);
      }, messageID);
    }
    catch (err) {
      console.error(err);
      return api.sendMessage(err, event.threadID, event.messageID);
    }
  }