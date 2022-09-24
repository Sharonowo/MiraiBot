const emtyArrgs = "Nội dung không được để trống"; // tin nhắn trả về khi người dùng nhập thiếu dữ liệu 
const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const unsendWaitingWhenSucces = false; // bật hoặc tắt gỡ tin nhắn waiting sau khi tạo xong ảnh
const bodyWhenSucces = "Your banner"; // 
const XfillText = 1560;

module.exports.config = {
    name: "bannerpubg",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "DVB",
    description: "Tạo ảnh bìa",
    commandCategory: "Đa phương tiện",
    usages: "[Text1]|[Text2]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    const content = args.join(" ").split("|").map(item => item = item.trim());
    const apikey = "ntkhang";
    const text1 = content[0],
        text2 = content[1];
    let params = {text1, text2};
    params = qs.stringify(params);
    api.sendMessage("Đang khởi tạo hình ảnh, vui lòng chờ đợi...", event.threadID, event.messageID);
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    axios.get("https://api-ttk.herokuapp.com/banner/pubg?" + params, {
            responseType: "arraybuffer"
        })
        .then(data => {
            const imageBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
            api.sendMessage({body: `Banner của bạn đây!`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);})
        .catch(error => {
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};