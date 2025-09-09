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
    process.env.SESSION_ID ||    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lya1Y4TVJxN1ZMSlhRMGNBb3RheElPNlNBN3F2YWRYakRyUEwzUDhHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0N0S0c0aWhZbnI0czNud1E0NXVUbWlMY3Boc1QvOWpIK1BlNnRhYmdFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSnpXNjc2NmZhRzk2aWM3aUE4RW1JSXh3b25xaG1EK04vbzFLK3Ryc1c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0aWQvRWhUdzEzSkF0Wk5wZUhwTWs4QTVUTlhZM1YvZ0JQZ2pKWjJLcmxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNV3lZYU9ybFkzYnlmMW45cWRObVVueVp2RmRheDM3Qm9SNmN5d0k0bk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNydkxpYmNFWk1Jb2JlTktUalUzc2o1dnRNalk0emt4Z2ZONkF4Y3cvM1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZoK2cyK3ZtbDBGRmx0d0xKR1RtL2o0WWs5UmVDRzJEbjdvTE9CLzdudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2djVmZsSXRYOUpSQkxaby8vNC9lL1F2QjZmUWhZTU1KZW4yS0R4N3ZUVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJvYmNKQjhFNEZ6WS9wS3dGTjM2OTlSMTB0NnlKamtuV2FCS1krd2JZbWd0R2lpNnVrT2tsVTc0OVdyQW1QSEN1ZE1nbXhHV2R5QmdFSW9rMmlBSWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6Im5TdGg2ZjV5OGFDQitxYmpKamRzd1cwSGE2UnlLT085M3ZVOVBJdExhdlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYzODQzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMzRTg5MzBFMEJBMjlENTQwNkM3QkJDNDAxN0MzRDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzQxNjI1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYzODQzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM4N0Q2NEZDQjlFNTIxMTJEM0JBQzA0NDE0MzYxMDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzQxNjI1MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUE4zRU1CVFIiLCJtZSI6eyJpZCI6Ijk0NzY2Mzg0MzU4Ojc0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjgwOTI1Nzc0NTc3ODE2Ojc0QGxpZCIsIm5hbWUiOiJNT1ZJRSDimIUgV09STEQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A2NHhwNEhFS3lXZ01ZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNYYjZKVDZsQkRacVZEOGoraklRVkREV3VFOUtGd0FZdWhBOGh2Z1JOMVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iml0ZS9XUklsMHJRcXNPdmZ6S1dDRnZKRGRrc1A1QTFtTGp6WGJKYUVEVFFWbFJ3UTNMMHZIYTk0dlVSWk1KOXZIZlhhQis3ekdkd2EycWRROWhVbkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6ejg4L05wUXRjM3QrLy9TTFpMTkp2RDBSdjhSci95REprTkdIUVIzUjBmaHFPNlNJOVBIc3o4U2h4VXkxaG5jcGJSYW9vSWtqRVZqQjhMdzlLT1Bqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2Mzg0MzU4Ojc0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQxMitpVStwUVEyYWxRL0kvb3lFRlF3MXJoUFNoY0FHTG9RUEliNEVUZFUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzQxNjI0OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFONHUifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94770175537",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94766384358", "94741483241"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "U6BlLmh0MlkazxU0HvbEiUlaH9k8TW2LOpEw",
  USERNAME: "dg-lk",
  REPO_NAME: "ANJU-XPRO-V50",
};
