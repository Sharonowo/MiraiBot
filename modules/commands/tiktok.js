class Judas {
  get config() {
    return {
      name: "tiktok",
      version: "1.1.2",
      hasPermssion: 0,
      credits: "Judas Dev",
      description: "",
      commandCategory: "social medias",
      usages: "",
      cooldowns: 5
    }
  }
  async run({ event, api, args, Users }) {
    const axios = require('axios');
    var msg = "", info_ = [], link_ = [];
    try {
      if (args[0] == "get") {
        const res = await axios
          .post('https://www.tikwm.com/api/', {
            url: args[1],
            count: 12,
            cursor: 0,
            hd: 1
          });
        if (res.status == 200) {
          console.log(res.status);
          const k = res.data
          const t = (await axios.get(`${k.data.play}`, {
            responseType: "stream"
          })).data;
          return api.sendMessage({
            body: `AUTHOR: ${k.data.author.nickname} \nLƯỢT TIM: ${k.data.digg_count} \nVIEW: ${k.data.play_count}`,
            attachment: t
          }, event.threadID)
        }
      }
      else if(args[0] == "info"){
        try{
        const res = ((await axios.get("https://www.tiktok.com/node/share/user/@" + args[1] + "?aid=1988", {
        headers: {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1"
        }
      }))).data;
        const res1 = res.userInfo.user;
     const t = (await axios.get(`${res1.avatarLarger}`, {
            responseType: "stream"
          })).data;
        return api.sendMessage({
          body: `ID: @${res1.uniqueId}\nTên Chính: ${res1.nickname}\nBio: ${res1.signature}\nTích Xanh: ${res1.verified == true ? "có" : "không" }\nSố Người Fl: ${res.userInfo.stats.followerCount}\nĐang Fl: ${res.userInfo.stats.followingCount}\nTổng số tim: ${res.userInfo.stats.heartCount}`,
        attachment: t
        }, event.threadID, event.messageID)
      } catch(e){
          console.log(e)
      }
      }
      else if (args[0] == "trend") {
        const res = await axios
          .post('https://www.tikwm.com/api/feed/list', {
            region: 'VN',
            'count': 5,
            hd: 1
          });
        if (res.status == 200) {
          console.log(res.status);
          for (let i = 0; i < 5; i++) {
            msg += `Title: ${res.data.data[i].title} \nAuthor: ${res.data.data[i].author.nickname} \nID: ${res.data.data[i].author.unique_id} \nLƯỢT TIM: ${res.data.data[i].digg_count} \nVIEW: ${res.data.data[i].play_count}\n===================\n`
            link_.push(res.data.data[i].play)
            info_.push(`Title: ${res.data.data[i].title} \nAuthor: ${res.data.data[i].author.nickname}`)
          }
          return api.sendMessage(`${msg}`, event.threadID, (err, info) => {
            return global.client.handleReply.push({
              step: 1,
              name: this.config.name,
              link: link_,
              otf: info_,
              author: event.senderID,
              messageID: info.messageID
            });
          }, event.messageID)
        }
      }
      else if (args[0] == "search") {
        const x = await axios
          .post('https://www.tikwm.com/api/feed/search', {
            keywords: args.splice(1).join(" "),
            count: 10,
            cursor: 0,
            hd: 1
          });
        if (x.status == 200) {
          console.log(x.status)
          const res = x.data.data
          for (let i = 0; i < 5; i++) {
            msg += `Title: ${res.videos[i].title} \nAuthor: ${res.videos[i].author.nickname} \nID: ${res.videos[i].author.unique_id} \nLƯỢT TIM: ${res.videos[i].digg_count} \nVIEW: ${res.videos[i].play_count} \nVùng: ${res.videos[i].region}\n===================\n`
            link_.push(res.videos[i].play)
            info_.push(`Title: ${res.videos[i].title} \nAuthor: ${res.videos[i].author.nickname}`)
          }
          console.log(msg)
          return api.sendMessage(`${msg}`, event.threadID, (err, info) => {
            return global.client.handleReply.push({
              step: 1,
              name: this.config.name,
              link: link_,
              otf: info_,
              author: event.senderID,
              messageID: info.messageID
            });
          }, event.messageID)
        }
      } else {
        return api.sendMessage('Sử Dụng 1 Trong 4 tag [ get / sreach / trend / info ]', event.threadID, event.messageID)
      }
    } catch (e) {
      console.log(e)
    }
  }
  async handleReply({ event, api, handleReply, global, config }) {
    try {
      const axios = require('axios');
      if (handleReply.author !== event.senderID) return api.sendMessage('Con Cặc', event.threadID)
      api.unsendMessage(handleReply.messageID);
      const t = (await axios.get(`${handleReply.link[event.body - 1]}`, {
        responseType: "stream"
      })).data;
      api.sendMessage('Vui Lòng Đợi Trong Giây Lát', event.threadID)
      return api.sendMessage({
        body: handleReply.otf[event.body - 1],
        attachment: t
      }, event.threadID)
    } catch (e) {
      console.log(e)
    }
  }
}
module.exports = new Judas();