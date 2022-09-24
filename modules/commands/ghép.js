module.exports.config = {
  name: "ghép",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "KhanhMilo\nfix by DinhPhuc",
  description: "Ghép đôi với 1 đứa trong nhóm",
  commandCategory: "Group",
  usages: "ghép",
  cooldowns: 1,
  dependencies: {
    "fs-extra": "",
    "axios": "" 
  },
  envConfig: {
       cooldownTime: 300000
  }
};

module.exports.run = async function ({ api, event, args, Threads, Users,Currencies }) {
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (1000 > moneyUser) return api.sendMessage("Đéo Đủ Tiền cút mẹ đi tao còn làm ăn :)", event.threadID, event.messageID);
  Currencies.setData(event.senderID, options = {money: money - 1000})
  var mention = Object.keys(event.mentions)[0];
  var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️"]
  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];

  if (!mention) {
    let all = (await Threads.getInfo(event.threadID)).participantIDs;
    
    await all.splice(all.indexOf(api.getCurrentUserID()), 1);
    await all.splice(all.indexOf(event.senderID), 1);
    var random = all[Math.floor(Math.random() * all.length)];
    let data = await api.getUserInfo(parseInt(random));
    let dt = await api.getUserInfo(event.senderID);
    var love = ((await axios.get("http://ntkhang.xtgem.com/bikini.json")).data).love;
  var linklove = love[Math.floor(Math.random() * love.length)];
  
  var getlove = (await axios.get(linklove, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(getlove, "utf-8"));
    let Avatar1 = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt1.png", Buffer.from(Avatar1, 'utf-8'));
  let Avatar2 = (await axios.get(`https://graph.facebook.com/${random}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, 'utf-8'));
    
    let name_1 = dt[event.senderID].name;
    let name_2 = data[parseInt(random)].name;
    let imglove = [] ;
    imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/love.gif"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    if (name_2 == undefined) {
      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, parseInt(random) );
      api.changeNickname( `${ data[parseInt(random)].gender == 2 ? "Vợ của" : data[random].gender == 1 ? "Chồng của" : "BêĐê của" } 1 người chưa biết tên ${random_emoji}`, event.threadID, event.senderID );
  } else {
      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, parseInt(random) );
      api.changeNickname( `${ data[parseInt(random)].gender == 2 ? "Vợ của" : data[random].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_2} ${random_emoji}`, event.threadID, event.senderID );
      api.sendMessage( { body: `Hai bạn đã ghép đôi thành công\n\n💓${name_1} - ${name_2}💓` ,  attachment: imglove , mentions : [{tag: `${name_1}`, id: event.senderID} , {tag: `${name_2}`, id: random} ]}, event.threadID );
      }
  }
   else {
    let data = await api.getUserInfo(mention);
    let dt = await api.getUserInfo(event.senderID);
    var love = ((await axios.get("http://ntkhang.xtgem.com/bikini.json")).data).love;
  var linklove = love[Math.floor(Math.random() * love.length)];
  
  var getlove = (await axios.get(linklove, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + "/cache/love.gif", Buffer.from(getlove, "utf-8"));
    let Avatar1 = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt1.png", Buffer.from(Avatar1, 'utf-8'));
  let Avatar2 = (await axios.get(`https://graph.facebook.com/${mention}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, 'utf-8'));
    let imglove = [];
    imglove.push(fs.createReadStream(__dirname + "/cache/avt1.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/love.gif"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    let name_1 = dt[event.senderID].name;
    let name_2 = data[mention].name;
    if (name_2 == undefined) {
      api.changeNickname( `${ dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, mention );
      api.changeNickname( `${ data[mention].gender == 2 ? "Vợ của" : data[mention].gender == 1 ? "Chồng của" : "BêĐê của" } 1 người chưa biết tên ${random_emoji}`, event.threadID, event.senderID );
      } else {
      api.changeNickname( `${dt[event.senderID].gender == 2 ? "Vợ của" : dt[event.senderID].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_1} ${random_emoji}`, event.threadID, mention );
      api.changeNickname( `${data[mention].gender == 2 ? "Vợ của" : data[mention].gender == 1 ? "Chồng của" : "BêĐê của" } ${name_2} ${random_emoji}`, event.threadID, event.senderID );
      api.sendMessage( { body: `Hai bạn đã ghép đôi thành công\n\n💓${name_1} - ${name_2}💓` ,  attachment: imglove , mentions : [{tag: `${name_1}`, id: event.senderID} , {tag: `${name_2}`, id: mention} ]}, event.threadID );
      }
  }
};