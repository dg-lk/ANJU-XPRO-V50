//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhHZU1uOENiaWRtTHZHZXFBVjZWUzRURDRocnRLanN0eTdiNUtVODYyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEhGWXBncnZXUXc0SnR2ZDNZeHVlM282R2tpNTB3K1dvYW84TkVQbFFTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTExjdUx0Skl4VU1oYlhDamZESDZzdUxGVFdvN1Y5S0NVQmtuQ3haejJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT3lkOXpMNDd2K2ZLSjdxSGRsMWFjcmpJL3pvNmZwV3hEM01ycSthWERNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGbmN1bnVpcmNEQ2hPZGkyMFlYU2xCT08yQWtDcSs2UGE1UGZId1ZKRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBqdXg1aHBRdG5Wa1A4d0VDL2RKRnFDdkRnbjZCWjZWamtMOFNZRktraUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpZUkRGRXZ6Z2VZV2F6QzFDWmJiNHh1dHFvV2hNOGZLM2NRTG5SSjZHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXUvY2hFckVjcTRKZlFUNnd0MmRzNzM4M1BZUHR5TFhqMTE3elpsWTFScz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlYbEJCN2VhNjJTYVpJOE1YUGllYmxudm5zZGhiQUpZTlVpd1UrT1RZSnRFejBTaHlYRVRkUEViYmNtTnkyamxlMjdVVEt6LzN5eDBmSFhWU2pZUWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6ImtBTUxVa0tHTFl3cmh1VXhwdC9BUjVIZUVYUVdpTXN6VWNrakdQRm1XbUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYzODQzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTMxNDVBQjU3QTkzQUUxMjE2MDI0QzdBMTc2RTVFREYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQzOTg5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYzODQzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEM0RTE3MDhFRjczMkQxQTM3RTI3NERDOTk3RjZFNkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQzOTg5N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieUJxYUFVUnlScWFJZW9Qb2JQalg4ZyIsInBob25lSWQiOiIwMGNhZTc4YS1iZWM2LTQyNTQtOWY1Zi00ZTQ3NDBhMTRmODUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUR0WWxsUTNVR1g4N2ZOd2h0UCtrWDhKdnU0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNVRi81S3p4eUlJc0VQc1A2c0JvZWhDNHIzST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0NEFLUzlTNCIsIm1lIjp7ImlkIjoiOTQ3NjYzODQzNTg6NTNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyODA5MjU3NzQ1Nzc4MTY6NTNAbGlkIiwibmFtZSI6IuG0jeG0j+G0oMmq4bSHIOG0oeG0j8qAyp/htIUgKOG0nOG0mMqf4bSP4bSA4bSF4bSHyoApIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR1doUUlReU1yRXhRWVlDeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlU0ZxL1M2aUJUZHpNcWNLTlo2WmZOZVk3ZDJNcStMYVFkdjQ4OCtLaW5JPSIsImFjY291bnRTaWduYXR1cmUiOiJDWWF1REhqN3BMWnVJMEFZa25uczU0eHRPRUpYM3hFamt4V3lOQ2ZRSkw3b2N3QnRpQmFMUVhqcWdLSzNGU3FJc3pCOXpIRHduNkx6ZnI0aUhXNzJCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSnZGZjRzdEh2VWNTL3pmdUxLRUxlYTVqeDBTNzFXelNyelR1eVdsRnZDRzRTTGRWSVF4QkxVYUxWK2V2OWdtQytNYmJIMnRiMDN3TXdKTVRRQmxhaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NjM4NDM1ODo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYa2hhdjB1b2dVM2N6S25DaldlbVh6WG1PM2RqS3ZpMmtIYitQUFBpb3B5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY0Mzk4OTQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVdkIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94770175537",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94766384358", "94741483241"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "UJfXn2wT7KVGDI3zgxOILFO5NXe9P135OLQe",
  USERNAME: "dg-lk",
  REPO_NAME: "ANJU-XPRO-V5",
};
