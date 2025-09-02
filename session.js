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
    process.env.SESSION_ID ||    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhhN3hYaG5vREJGYkpJM29lYyt3TnhnUkpuWTFNS1MvWStpd0lKRjVtOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGY4L0c0MHJUUERzSDQ2WWkrTVd1Z291UExFS005dlAxT0VXUERKOXhTTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRHBXNm1ybi9TYVE2bGV4WEZUelJQa091UUlQeE9NS1k4RnZpVmNMNkZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCdmExVnFTbWVHWktDNjZ2NENIejNWS0p5UEF0TGtXMTF1VEZmclZBVHdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJLZWVFdGlScWFmRTlyc2RwTXRBQkc4cElnNFRYeHdPaE9UY05rV1ZabGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJIVTdWQXZXV2N4UkxvTVkwU2UraS9VeU1VNEZ1b1BhWGgxaHFLWC95MjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lJa1Bod1YvaTVhdThiWk1sWHJrS2NYZldTTmZOcVpNKzAyR0ROQ25Vcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXpKUFZhVEJZd0dWZ08yWFpNQVd2Vk5Gb0lnMExGL2Y2akZVeUdwWXpqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHaEdyblBraVlVQ1Z6QXprTlhWZlRuNGNMaGMzckRPTUJWU3I1S3FJejlSZ2pwVGhqOWx4SG9ubHpMZitFQzJFN01MaTR6NmpmNGIxWEdVOWFMOWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJEWENTVDhaRWVDSXVKcHRTdDM3RGlQMmlEeUpYUEJZekQ3YXFhNmJXNm5RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCa1c2cTVSY1FfS2hSVS1oM0dsN3lBIiwicGhvbmVJZCI6IjI1Y2ExNWI0LTE2NjEtNDI5YS1hNDFiLTJkYWFiNjYxNzg4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtWXhZVnIvY0h2THB4Q1AxZ3Z3Y1R0eUVycmc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmwzN2JnLzNlQ0kxbmVJejN6YVIzZDhYN1pJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5XRDNDM1E1IiwibWUiOnsiaWQiOiI5NDc2NjM4NDM1ODo1NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI4MDkyNTc3NDU3NzgxNjo1NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lHV2hRSVF6c3JaeFFZWURTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVTRnEvUzZpQlRkek1xY0tOWjZaZk5lWTdkMk1xK0xhUWR2NDg4K0tpbkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9aS3BjRGhEcVV0MkZuV2pRVzE2L2lwK05sdll3NTVnOVhnaUxKYU5zK0ZJOFQzM08xSjhMWi9nRHdTVUpUbExmV1c2NlpTZ1J5KzVJbjBOTXBQWkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWZzlxbkszUDI4QnU1L1dOZmVjTWcyY1ZlSmVUMDFQT0NidHBMU0l0UEc1ODZ0bFpXSGR1Mk1TM1dpbFhHbUZieXdFREJXdVRjSU12QXlnMWxEblBoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2Mzg0MzU4OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhraGF2MHVvZ1UzY3pLbkNqV2VtWHpYbU8zZGpLdmkya0hiK1BQUGlvcHkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Njc4Mzk2NCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNV2QifQ==",
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
