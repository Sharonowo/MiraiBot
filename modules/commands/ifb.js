module.exports.config = {
    name: "ifb", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "version", // phiên bản của module này
    hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
    credits: "Nam", // Công nhận module sở hữu là ai
    description: "xem info bạn", // Thông tin chi tiết về lệnh
    commandCategory: "Tiện ích", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
    usages: "[option] [text]", // Cách sử dụng lệnh
    cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
    dependencies: {

    }, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
    envConfig: {
    token: "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
        //Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
    }
};
module.exports.languages = {
    "vi": {
        //Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
    },
    "en": {
        //Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
    }
  }
module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { ifb } = global.configModule,
        key = ifb.key,
        token = ifb.token;
  const ntc = ["Độc Thân","Ế lòi mồm","Đéo Có Người Yêu","Bí Ẩn","Chưa được Nắm Tay Gái Bao giờ"]
  const nfl = ["1 Thằng Không Ai Biết Đến","Không ai thèm theo dõi"]
  const nlct = ["Không rõ","Không Biết","Âm Phủ","18 Tầng Địa Ngục"]
  const nsex = ["Bede","les","Lưỡng Tính"]
  const nns = ["Không Rõ Hình Như 1950","Không Rõ Hình Như 1940"]
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
   else uid = event.senderID;
  const take = await axios.get(`https://botviet.me/api/info?id=${uid}`);
  var tc = take.data.LeAnhTruong_User_Love ? `${take.data.LeAnhTruong_User_Love}` : `${ntc[Math.floor(Math.random() * ntc.length)]}`
  var fl = take.data.follow_user ? `${take.data.follow_user}` : `${nfl[Math.floor(Math.random() * nfl.length)]}`
  var t = take.data.fullname
  var ns = take.data.birthday ? `${take.data.birthday}` : `${nns[Math.floor(Math.random() * nns.length)]}`
  var yip = take.data.your_ip_address
  var location = take.data.location ? `${take.data.user_love}` : `${nlct[Math.floor(Math.random() * nlct.length)]}`
  var hom = take.data.hometown ? `${take.data.hometown}` : "Không Rõ" 
  var sex = take.data.gender ? `${take.data.gender}` : `${nsex[Math.floor(Math.random() * nsex.length)]}`
  let callback = function () {
             api.sendMessage({
                body: `🧠Họ/Tên: ${t}\n💫Giới Tính: ${sex}\n👀Sinh Ngày: ${ns}\n🏆Follow: ${fl}\n🔥Tình trạng: ${tc}\n🌁Đến Từ: ${hom}\n🏠Nơi sống: ${location}\n✈ip: ${yip}\n🚀FB: facebook.com/profile.php?id=${uid}`,
                attachment: fs.createReadStream(__dirname + "/cache/AvtUser.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/AvtUser.jpg"),event.messageID);
  }
     return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=${token}`)).pipe(fs.createWriteStream(__dirname+'/cache/AvtUser.jpg')).on('close',() => callback());
}
