module.exports.config = {
  name: "ảnh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Adonis mod by JRT",
  description: "xem ảnh hiện có trên bot",
  commandCategory: "Hình Ảnh",
  usages: "ảnh [Text]",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');
  const prefix = config.PREFIX

     if (args.length == 0) return api.sendMessage(` 🎭 Danh sách các ảnh hiện có  🎭 \n\n1. vú\n2. trai\n3. hentai\n4. naughty\n5. sexy\n6. nude\n7. cosplay\n8. anime\n9. mông\n10. gái\n11. meme\n12. gaixexy\n13. kanna\n14. violet\n15. rem\n16. mirai\n17.  jimmy\n18. shiba\n19. umaru\n20. wibu\n21. waifu\n22. cat\n23. đấm\n24. đá\n25. tát\n26. hôn\n27. beo\n28. ausand\n29. khanhhuyen\n30. siesta\n\nDùng ${prefix}ảnh  < ảnh bạn cần xem >\n
`, event.threadID, event.messageID);

     if (args[0] == "vú") {
    axios.get('https://api-kanekidz.herokuapp.com/gaivuto').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "siesta") {
  axios.get('https://siestakawaii.gq/').then(res => {
 let ext = res.data.success.substring(res.data.success.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({
      attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
    };
    request(res.data.success).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback);
   })
}
  if (args[0] == "beo") {
    axios.get('https://beo.demngayyeu.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "khanhhuyen") {
    axios.get('https://khanhhuyen.demngayyeu.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "ausand") {
    axios.get('https://ausand.demngayyeu.repl.co').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "đá") {
    axios.get('https://api-kanekidz.herokuapp.com/spar').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "hôn") {
    axios.get('https://api-kanekidz.herokuapp.com/kiss').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "đấm") {
    axios.get('https://api-kanekidz.herokuapp.com/punch').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "tát") {
    axios.get('https://api-kanekidz.herokuapp.com/slap').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/vú.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vú.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/vú.${ext}`)).on("close", callback) });
  }
  if (args[0] == "waifu") {
  axios.get('https://www.yuuwaifurandom.gq').then(res => {
 let ext = res.data.success.substring(res.data.success.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({body: `Waifu cute~~~ ây >,<\nSố ảnh hiện tại: ${res.data.quantity}`,
      attachment: fs.createReadStream(__dirname + `/cache/waifu.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/waifu.${ext}`), event.messageID);
    };
    request(res.data.success).pipe(fs.createWriteStream(__dirname + `/cache/waifu.${ext}`)).on("close", callback);
   })
}
    if (args[0] == "trai") {
    axios.get('https://api.vinhbeat.ga/trai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback) });
  }
  if (args[0] == "cat") {
  axios.get('http://aws.random.cat/meow').then(res => {
    let ext = res.data.file.substring(res.data.file.lastIndexOf(".") + 1);
    
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/meow.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meow.${ext}`), event.messageID);
                };
                request(res.data.file).pipe(fs.createWriteStream(__dirname + `/cache/meow.${ext}`)).on("close", callback);
            });
}
  if (args[0] == "hentai") {
    axios.get('https://api-kanekidz.herokuapp.com/hentai').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/hentai.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hentai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hentai.${ext}`)).on("close", callback) });
  }
  if (args[0] == "naughty") {
    axios.get('https://naughty.demngayyeu.repl.co/').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/naughty.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naughty.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/naughty.${ext}`)).on("close", callback) });
  }
  if (args[0] == "sexy") {
    axios.get('https://api-kanekidz.herokuapp.com/gaisexy').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/sexy.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sexy.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sexy.${ext}`)).on("close", callback) });
  }
  if (args[0] == "nude") {
    axios.get('https://api.vinhbeat.ga/nude.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/nude.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nude.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nude.${ext}`)).on("close", callback) });
  }
  if (args[0] == "cosplay") {
    axios.get('https://api.vinhbeat.ga/cosplay.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/cosplay.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cosplay.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.${ext}`)).on("close", callback) });
  }
  if (args[0] == "anime") {
    axios.get('https://uptime.ocvat2810.repl.co/').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback) });
  }
  if (args[0] == "mông") {
    axios.get('https://api-kanekidz.herokuapp.com/gaiditbu').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/mông.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mông.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/mông.${ext}`)).on("close", callback) });
  }
 if (args[0] == "gái") {
axios.get('https://api.vinhbeat.ga/gai.php').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/gái.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gái.${ext}`)).on("close", callback) });
  }
     if (args[0] == "gaisexy") {
axios.get('https://api.ryder447.repl.co/gaisexy').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/meme.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gái.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/meme.${ext}`)).on("close", callback) });
  }
               if (args[0] == "rem") {
axios.get('https://apirem.khoahoang3.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                 if (args[0] == "mirai") {
axios.get('https://mirai.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
                       if (args[0] == "jimmy") {
axios.get('https://jimmy.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
    if (args[0] == "shiba") {
axios.get('https://shiba.ocvat2810.repl.co').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        let callback = function() {
            return api.sendMessage({
                attachment: fs.createReadStream(__dirname + `/cache/siesta.${ext}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/siesta.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/siesta.${ext}`)).on("close", callback) });
  }
}