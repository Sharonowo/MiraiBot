module.exports.config = {
    name: "linkfb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Dũngkon",
    description: "Lấy link facebook người dùng.",
    commandCategory: "Nhóm",
    cooldowns: 0
};

module.exports.run = async function({ api, event, args, Users }) {
    const a = "Linkfb: https://www.facebook.com/profile.php?id=";
    const axios = global.nodemodule['axios']; 
    const name = await Users.getNameUser(event.senderID)
  
    if(event.type == "message_reply") { 
   const name = global.data.userName.get(event.messageReply.senderID) || await Users.getNameUser(event.messageReply.senderID);                
  uid = event.messageReply.senderID
    return api.sendMessage(`Name: ${name}\n${a}${uid}`, event.threadID, event.messageID) }
  
    if (!args[0]) {return api.sendMessage(`Name:  ${name}\n${a}${event.senderID}`, event.threadID, event.messageID);}
    else {
        for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`Name:${Object.values(event.mentions)[i].replace('@', '')}\n${a}${Object.keys(event.mentions)[i]}`, event.threadID);
        return;
         }

}