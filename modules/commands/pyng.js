module.exports.config = {
    name: "pyng",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Giaquân",
    description: "Kiểm tra mạng của bot",
    commandCategory: "system",
    usages: "ping",
    cooldowns: 5,
    dependencies: {
        "pidusage": ""
    }
};

module.exports.run = async ({ api, event, client }) => {
    const time = process.uptime(),
                days = Math.floor(time / (60 * 60 * 60)),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
    const pidusage = await global.nodemodule["pidusage"](process.pid);
    const timeStart = Date.now();
    return api.sendMessage("Pyng Pyng...", event.threadID, () => api.sendMessage("Ok", event.threadID, () => api.sendMessage(`Bot chạy được ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây\nPing: ${Date.now() - timeStart}ms`, event.threadID, event.messageID)));
}
