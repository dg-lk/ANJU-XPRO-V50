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
    process.env.SESSION_ID ||    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZiQVJuanY0L0x0emdZSUQwR3ExTHk5QVdVRDVoczZNZHAzMkZSb2Fsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzNLZmREN09HZmhmK1p0dzZhcysxdTZWNkdWbWh0M2xXRUdwbHNqV2JUVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQzh3cytnN0F4TmxCc0NOWHJDQzh3ZEdNZ2JoYUY2bWI5MWNXOHhnZ1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSlk5OHBvbHZIclFrWUQ1K3Jlc21TQXp2VjJJUnR4SW5raWFBcElleWcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHVUVhaDFOUTBoNTEzUjlWVUNvYWxHS09jZ3hqL1FrenZRQmsrajltbFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im80WTNheHF0SVF4MWVSai9oRHNmMDQyRUNKZ1NZZ0FJY2tKbHlUc2pvZzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1CYUl6OE40U0JWMDl6Nmt0OE9BbHB6Zkw2M2p3YSthQXBYRnBta2xFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHBKTGpCVVREbThZWXp2ZlFzQWozK2VHV2hOazB4SURIWFM2Z2xWcHdqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhZZ3U2alorOEJUQTRtcmVOTXV6WVlHNHdKbkVKL1ZiQUl6WDdObjBhS084dytjNE5xU0gzRkdSQTZJWnVnZlM5a1c4ZkZKb3hqY3ZaK3VEWENnQ2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IkFzNzFjOFpYVkhBdVpHK3MyVnI5U1hjOGgwMSttS005bnNTRENDSlFrUm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IldaUUM5WkRIIiwibWUiOnsiaWQiOiI5NDc2NjM4NDM1ODo3MEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI4MDkyNTc3NDU3NzgxNjo3MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B5NHhwNEhFUHoxKzhVR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNYYjZKVDZsQkRacVZEOGoraklRVkREV3VFOUtGd0FZdWhBOGh2Z1JOMVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkQvZDNPSHc3Z3p4WHpVelRnRlZjdGc4TzFiWkVPWFlrNkxUYnlscDNLZlA1QU5jQVJLYW9HTzZhYTZUbWFwMHdKa2orQ2pLM250VVpzWWtFeFhsR0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQOHlpZThGWEp0YUkvQUNPRnI5OXN3S3NRYzBNV1hjb0FiaGxIMldyODF2V2pjTXhJcnlqRndMcU84c2I0SlIyNmpXeGZ2TXA1TWFXblRyRzdTNFFoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2Mzg0MzU4OjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQxMitpVStwUVEyYWxRL0kvb3lFRlF3MXJoUFNoY0FHTG9RUEliNEVUZFUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzM0NjU3MCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCYy8ifQ==",
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
