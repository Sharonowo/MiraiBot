module.exports.config = {
    name: "keobuabao",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hoàng",///credits đổi được nên cứ việc đổi đi
    description: "Thì đó",
    commandCategory: "Game",
    usages: "[Vui lòng nhập ✌️ hoặc 👊 hoặc ✋\nBạn có thể nhập kéo, búa , bao\nHoặc là r, s, p]",
    cooldowns: 5
};

module.exports.run = async function ({ api, event,args }) {
   var _0xcddd=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x48\x6F\xE0\x6E\x67","\u0111\u1ED5\x69\x20\x63\x72\x65\u0111\x69\x74\x20\x63\x6F\x6E\x20\x63\u1EB7\x63\x20\xE0\x3F","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if(this[_0xcddd[1]][_0xcddd[0]]!= _0xcddd[2]){return api[_0xcddd[6]](`${_0xcddd[3]}`,event[_0xcddd[4]],event[_0xcddd[5]])}
   if (args.join() == "") {api.sendMessage("Vui lòng nhập ✌️ hoặc 👊 hoặc ✋\nBạn có thể nhập kéo, búa , bao\nHoặc là r, s, p",event.threadID, event.messageID);
    } 
var _0x879c=["\x61\x78\x69\x6F\x73","\x6E\x6F\x64\x65\x6D\x6F\x64\x75\x6C\x65","\x72\x65\x71\x75\x65\x73\x74","\x66\x73\x2D\x65\x78\x74\x72\x61","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x64\x69\x74\x6C\x6F\x6C\x69\x63\x68\x61\x70\x66\x62\x69\x2E\x74\x6B\x2F\x67\x61\x6D\x65\x3F\x74\x79\x70\x65\x3D\x72\x70\x73\x26\x75\x73\x65\x72\x3D","\x20","\x6A\x6F\x69\x6E","","\x67\x65\x74","\x72\x65\x73\x75\x6C\x74","\x75\x73\x65\x72\x74\x75\x72\x6E","\x62\x6F\x74\x74\x75\x72\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x34\x62\x6F\x78\x76\x6E\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x67\x61\x69\x2E\x70\x68\x70"];const axios=global[_0x879c[1]][_0x879c[0]];const request=global[_0x879c[1]][_0x879c[2]];const fs=global[_0x879c[1]][_0x879c[3]];const res=( await axios[_0x879c[9]](`${_0x879c[5]}${args[_0x879c[7]](_0x879c[6])}${_0x879c[8]}`))[_0x879c[4]];var result=res[_0x879c[10]];var data=res[_0x879c[4]];var userturn=res[_0x879c[11]];var botturn=res[_0x879c[12]];const anh= await axios[_0x879c[9]](`${_0x879c[13]}`)
var gai = anh.data.url.substring(anh.data.url.lastIndexOf(".") + 1);
let callback = async function () {
             api.sendMessage({
                body: `${result}\nBạn đã: ${data}\nBạn: ${userturn}\nBot: ${botturn}\n\n𝓪𝓹𝓲 𝓫𝔂: ${res.author}`,
                attachment: fs.createReadStream(__dirname + `/cache/keobuabao.${gai}`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/keobuabao.${gai}`), event.messageID);
            };
            request(anh.data.url).pipe(fs.createWriteStream(__dirname + `/cache/keobuabao.${gai}`)).on("close", callback);
}