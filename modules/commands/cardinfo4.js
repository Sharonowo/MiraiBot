const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 40
const Name = 115
const fontsInfo = 50
const colorName = "#00FFFF"

module.exports.config = {
  name: "cardinfo4",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "Tạo card thông tin người dùng facebook",
  commandCategory: "Thông tin",
  usages: "cardinfo",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  var _0xee18=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x44\u0169\x6E\x67\x6B\x6F\x6E","\x54\x68\x61\x79\x20\x63\x72\x65\x64\x69\x74\x73\x20\u0103\x6E\x20\x63\u1EE9\x74\x20\xE0\x20\u0111\u1ED5\x69\x20\x6C\u1EA1\x69\x20\x6E\x68\x61\x6E\x68\x20\x63\xF2\x6E\x20\x6B\u1ECB\x70","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if((this[_0xee18[1]][_0xee18[0]])!= _0xee18[2]){return api[_0xee18[6]](`${_0xee18[3]}`,event[_0xee18[4]],event[_0xee18[5]])}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/1.png`;
  let pathAvata = __dirname + `/cache/2.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await api.getUserInfoV2(uid); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/rTmIep9.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 50, 263, 510, 510);
    var gender = res.gender == 'male' ? "Nam" : res.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.birthday ? `${res.birthday}` : "not found";
    var love = res.relationship_status ? `${res.relationship_status}` : "not found"
    var location = res.location.name ? `${res.location.name}` : "not found"
    var hometown = res.hometown.name ? `${res.hometown.name}` : "not found"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#3399FF";
  ctx.textAlign = "start";
  fontSize = 390;
  ctx.fillText(` ${res.follow}`, 778, 740);
  ctx.fillText(` ${love}`, 960, 605);
  ctx.fillText(` ${birthday}`, 960, 892);
  ctx.fillText(` ${location}`, 910, 467);
  ctx.fillText(` ${hometown}`, 878, 295);
  ctx.font = `${Name}px Play-Bold`;
  ctx.fillStyle = "#00FFFF";
  ctx.textAlign = "start";
  fontSize = 390;    
  ctx.fillText(` ${res.name} `, 425, 180);
  ctx.beginPath();
  ctx.font = `${fontsLink}px ArialUnicodeMS`;
  ctx.fillStyle = "#FF0000";
  ctx.textAlign = "start";
  fontSize = 390;    
  ctx.fillText(` ${res.link}`, 205, 1037);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};

 