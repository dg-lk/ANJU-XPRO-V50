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
    process.env.SESSION_ID ||    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05FTVhXUCtOcFlnVDE3V3BEOHdwWDU3dWp1UHkwMTM0dWZ6ME1SMlZtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0p2Nkg5WGkyVE50MW81aVgzVTRWLzV2RnQreHFkWjFmdktpcyt6ZG1BUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS3MzVTBGZlMyUXF3V1BaVUc4WnBCb3ZRMnRLTzM4MkN4c2RmWTFVc2s4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4bEtvTkppODVaV0NQZU1oMEljaXFQWktKK1AvSjRMa2s4bUxkeVpYcVRVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNOTJ5Q1dWRU9ZdlZoZHJZR0NIdnEyY2VYU1lqdXNqZk1UTktDN21Ja1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMQWdEWVVMa0JZckp6OHByeGkxKzZUbGdxY0JmMlhaZnN3NHVaNld5RTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0E3aEgxSHBHczgwVjNMUU4wRnhBeWxaQ2NWQjhoYUg4OTBlQ0FmMG9rcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUowTHhMQTU4RVFxL2lxMEJob2c1VUNBZWFsTHVJNmQxbUlRaUNTL3lWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRhNUZ6RVBDOGZ0M05CT28vb0s0bjg5Ly9EMGxvUUxnNFNlTGhCZmxQUFBDZUpFZUdsQnBKb2d4MjJORDlMeEk1cEkzdEFaWUwzMmo2dFlDckNZSkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6Ikl5TnVxVUVqZ2dFSlNBdWoyK2daM25WbU9nVVBMU2h2bDhuUFZ0NjFISFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYzODQzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjIzRDc0NkVBMkY3MEUwODZERkQyN0Q1MUZFRkE5NTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njk3NjE5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYzODQzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjVERTREMzFGNzdGMjQ0OTYyMjMzMzVDNzQ3RjQ0QTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njk3NjE5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjYzODQzNThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEYxMDI2OTM1QTE0MTgyRThEMkVGQTgxRTIwQTczMkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njk3NjE5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWUpNREJOS1AiLCJtZSI6eyJpZCI6Ijk0NzY2Mzg0MzU4OjYwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjgwOTI1Nzc0NTc3ODE2OjYwQGxpZCIsIm5hbWUiOiJNT1ZJRSDimIUgV09STEQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B5NHhwNEhFSytvNWNVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNYYjZKVDZsQkRacVZEOGoraklRVkREV3VFOUtGd0FZdWhBOGh2Z1JOMVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdEcGd1b3FIYkFxSjVaVTJBZWd2dStjS0V3dk1BS2QwT0NpU2UxYnIxblJaMUx5Sk9oQnZ5MHpqREg1WkpVRG1kNlo4Y2JWQXl5bmtSaUd6ZFM1Y0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQTXJQR1RHajc1WWdIQlBlbjIwWXh6ZjdsTXhYdWlFMUtZeHIzbm1iS1lCMmdpVDQyMVBGYXYzNjAvMU5jdE1sWGdmYUtkbVhPYnIvUnd5dHdSU2FDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY2Mzg0MzU4OjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQxMitpVStwUVEyYWxRL0kvb3lFRlF3MXJoUFNoY0FHTG9RUEliNEVUZFUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Njk3NjE4OSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCYzUifQ==",
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
