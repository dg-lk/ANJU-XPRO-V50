const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  ARTISTS:[
      "Ranwan Liyanage original",
      "Amal Perera original",
      "Clarence Wijewardena original",
      "Sunil Edirisinghe original",
      "Victor Ratnayake original",
      "Nanda Malini original",
      "Sanuka Wickramasinghe original",
      "Kasun Kalhara original",
      "Uresha Ravihari original",
      "Dinesh Kanagaratnam original"
    ],
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `
✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
        `.trim();
  },
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎟️ *QUEEN ANJU-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
💢 QUEEN ANJU-MD FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 QUEEN ANJU-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "./src/media/LOGOS/alive.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
🧚‍♂️⃟🩵 𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐉𝐔 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 🧚‍♂️⃟🩵

✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 𝚚𝚞𝚎𝚎𝚗 𝗮𝗻𝗷𝘂! ✨
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${movieData.title}_*

▫⭐ *𝗜ᴍᴅʙ 𝗥ᴀᴛɪɴɢ ➟ _${movieData.rating?.value || "𝙽/𝙰"} Rates_*
▫📆 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${movieData.metadata?.releaseDate || "𝙽/𝙰"}_*
▫🌍 *𝗖ᴏᴜɴᴛʀʏ ➟ _${movieData.metadata?.country || "𝙽/𝙰"}_*
▫⏳ *𝗗ᴜʀᴀᴛɪᴏɴ ➟ _${movieData.metadata?.runtime || "𝙽/𝙰"}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${title}_*
       
▫⭐ *𝗜ᴍᴅʙ 𝗥ᴀᴛɪɴɢ ➟ _${rating?.value || "𝙽/𝙰"} Rates_*
▫📆 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${metadata?.releaseDate || "𝙽/𝙰"}_*
▫🌍 *𝗖ᴏᴜɴᴛʀʏ ➟ _${metadata?.country || "𝙽/𝙰"}_*
▫⏳ *𝗗ᴜʀᴀᴛɪᴏɴ ➟ _${metadata?.runtime || "𝙽/𝙰"}_*
▫🎭 *𝗚ᴇɴʀᴇꜱ ➟ _${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
☘️ *𝗧ᴠ 𝗦ʜᴏᴡ : _${movieResponse.episodeInfo?.title || "𝙽/𝙰"}_*

▫📺 *𝗘ᴘɪꜱᴏᴅᴇ 𝗧ɪᴛʟᴇ ➟ _${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}_*
▫📆 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${movieResponse.episodeInfo?.date || "𝙽/𝙰"}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  SINHALASUBTVSHOW: function (episodeInfo, quality) {
    return `
☘️ *𝗧ᴠ 𝗦ʜᴏᴡ : _${episodeInfo.title || "N/A"}_*

▫📺 *𝗘ᴘɪꜱᴏᴅᴇ 𝗧ɪᴛʟᴇ ➟ _${episodeInfo.episodeTitle || "N/A"}_*
▫📅 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${episodeInfo.date || "N/A"}_*
▫💾 *𝗤ᴜᴀʟɪᴛʏ ➟ _${quality.toUpperCase()}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${movieData.data.title}_*

▫📆 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${movieData.data.releaseDate}_*
▫🌍 *𝗡ᴇᴛᴡᴏʀᴋ ➟ _${movieData.data.network}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  SINHALASUBTVSHOWALLDL: function (movieData) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${movieData.data.showInfo.title}_*

▫📆 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${movieData.data.showInfo.releaseDate}_*
▫🌍 *𝗡ᴇᴛᴡᴏʀᴋ ➟ _${movieData.data.showInfo.network}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${title}_*  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${title}_*
  
▫📆 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${releaseDate}_*  
▫🌍 *𝗖ᴏᴜɴᴛʀʏ ➟ _${country}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${title}_*
 
▫📅 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${releaseDate}_*  
▫🌍 *𝗖ᴏᴜɴᴛʀʏ ➟ _${country}_*  
▫⏳ *𝗗ᴜʀᴀᴛɪᴏɴ ➟ _${duration}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `
☘️ *𝗧ɪᴛʟᴇ : _${title}_*
 
▫📅 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${year}_*  
▫🌍 *𝗜ᴍᴅʙ 𝗩ᴏᴛᴇꜱ ➟ _${rating}_*  
▫⏳ *𝗗ᴜʀᴀᴛɪᴏɴ ➟ _${duration}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
──────────────────
☘️ *𝗧ɪᴛʟᴇ : _${title}_*

▫⭐ *𝗜ᴍᴅʙ 𝗥ᴀᴛɪɴɢ ➟ _${rating} Rates_*
▫🌍 *𝗗ᴇꜱᴄʀɪᴘᴛɪᴏɴ ➟*  
*_${description}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `       
☘️ *𝗧ɪᴛʟᴇ : _${movieData.title}_*
  
▫🎀 *𝗗ᴇꜱᴄʀɪᴘᴛɪᴏɴ ➟ _${movieData.description}_* 
    
▫🌍  *_${movieData.plot}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `  
☘️ *𝗧ɪᴛʟᴇ : _${title}_*

▫⭐ *𝗜ᴍᴅʙ 𝗥ᴀᴛɪɴɢ ➟ _${rating} Rates_*
▫📅 *𝗥ᴇʟᴇᴀꜱᴇ 𝗗ᴀᴛᴇ ➟ _${year}_*
▫⏳ *𝗗ᴜʀᴀᴛɪᴏɴ ➟ _${duration}_*

▂▂▂▂▂▂▂▂▂▂▂▂▂▂

*Jᴏɪɴ -* https://chat.whatsapp.com/Kr0jpcJUy58C62GUZgBup4?mode=ac_t

▂▂▂▂▂▂▂▂▂▂▂▂▂▂
        `.trim();
  },
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎵 SONG DOWNLOADER
      
✅ Song Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Anju Bot  
❤️ Created by Janith Rashmika
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🎬 *Enjoy the video brought to you by Queen Anju Bot!* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎵 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Anju Bot  
❤️ Created by Janith Rashmika
        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by Queen Anju Bot!* 
        `.trim();
  },
  //=====================hiru news===========================================
  AUTONEWS: function (source, newsData, isGroup, groupMetadata, conf) {
    return `
📰 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑵𝑬𝑾𝑺 』* 🗞️

✨ *${source.toUpperCase()} News Update*

📌 *Title:* ${newsData.title}
📅 *Date:* ${newsData.date || "N/A"}

📝 *Description:*
${newsData.desc || "No details available"}
${isGroup ? `\n\n📨 *Shared In:* ${groupMetadata?.subject || "Group"}\n🛡️ *Admin:* ${conf.MNAME}\n` : ""}
🔗 *Read more:* ${newsData.url}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim();
  },
  AUTOMOVIE: function (title, rating, metadata, description, isGroup, groupMetadata, conf) {
    return `
🎬 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑪𝑰𝑵𝑬𝑴𝑨 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres?.map(g => `#${g}`).join(" • ") || "𝙽/𝙰"}

${isGroup ? `📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupMetadata?.subject || "Group"}\n🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}` : ""}

📝 *𝙈𝚘𝚟𝚒𝚎 𝙎𝚞𝚖𝚖𝚊𝚛𝚢:*
${description || "— 𝙉𝙤 𝙙𝙚𝙩𝙖𝙞𝙡𝙨 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 —"}

━━━━━━━━━━━━━━━
${conf.FOOTER}`.trim();
  },
  AUTOSONG: function (foundSong, currentArtist, nextArtist, config, botNumber, isGroup, groupMetadata) {
    return `
✨ *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑴𝑼𝑺𝑰𝑪 』* 🎧

━━━━━━━━━━━━━━━━━━━
🎶 *𝚂𝙾𝙽𝙶 𝙳𝙴𝚃𝙰𝙸𝙻𝚂* 🎼
╠➤ *𝚃𝚒𝚝𝚕𝚎:* ${foundSong.title}
╠➤ *𝙰𝚛𝚝𝚒𝚜𝚝:* ${currentArtist.replace(" original", "")}
╠➤ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${foundSong.timestamp || "𝙽/𝙰"}
╠➤ *𝚅𝚒𝚎𝚠𝚜:* ${foundSong.views.toLocaleString() || "𝙽/𝙰"}
╠➤ *𝚄𝚙𝚕𝚘𝚊𝚍𝚎𝚍:* ${foundSong.ago || "𝙽/𝙰"}
╠➤ *𝙽𝚎𝚡𝚝 𝙰𝚛𝚝𝚒𝚜𝚝:* ${nextArtist}
━━━━━━━━━━━━━━━━━━━
📌 *𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙻𝙸𝙽𝙺:* 
    ${foundSong.url}
    ${isGroup ? `

━━━━━━━━━━━━━━━━━━━
👥 *𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾* 
╠➤ *𝙽𝚊𝚖𝚎:* ${groupMetadata?.subject || "Group"}
╠➤ *𝙰𝚍𝚖𝚒𝚗:* ${config.MNAME}
╠➤ *𝙱𝚘𝚝 𝙽𝚞𝚖𝚋𝚎𝚛:* ${botNumber}
━━━━━━━━━━━━━━━━━━━
` : ""}
${config.FOOTER || "🎼 Enjoy the music! 🎧"}`.trim();
  },
  AIMODEPROMPT: function (userMessage) {
    return `
    You're an advanced AI assistant called "King Rashmika AI." You're professional, respectful, and knowledgeable, always ready to assist with expertise. 👑 Your goal is to provide helpful, accurate, and engaging responses while maintaining a courteous and professional tone.
    
    usermessage in {${userMessage}}`;
  }
};
