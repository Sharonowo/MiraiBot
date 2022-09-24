module.exports.config = {
    name: "qtv1",
    eventType: ["log:thread-admins"],
    version: "1.0.1",
    credits: "Hoàng",//đéo en vui lòng tôn trọng ạ:>
    description: "Chống ăn cắp quyền admin box:>",
    dependencies: {
        "path": ""
    }
};

module.exports.run = async ({ event, api, Threads }) => { 
    const { resolve } = global.nodemodule["path"];
     const path = resolve(__dirname, '../commands', 'cache', 'hoang.json');// dòng này để get data on/off
    const { qtv } = require(path);
        const { logMessageType, logMessageData, threadID } = event;
         const { setData, getData } = Threads;
         let dataThread = (await getData(threadID)).threadInfo;
        if (qtv.hasOwnProperty(threadID) && qtv[threadID] == true) { 
                    
        //đổi câu đi cũng được :>
      api.sendMessage(`[ THREAD WARN ] Hiện tại đang bật chế độ\n[ CHỐNG CƯỚP QUẢN TRỊ VIÊN BOX ]\nnên đã gỡ quyền qtv của bạn xuống`, threadID, (err, info) =>
        setTimeout(() => {api.unsendMessage(info.messageID) } , 5000));// 5000 đó là time gỡ 1000=1s
                       return api.changeAdminStatus(event.threadID ,`${logMessageData.TARGET_ID}`, false)// gỡ quản trị viên nè :>
                        } 
                    }

        
                
            
          
    