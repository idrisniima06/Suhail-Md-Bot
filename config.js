const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347060435811";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AU TO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_32_09_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkwxclJ3RnhXQlBmTGVTRTZuQ1FrK2RYVzl3YnpjS0I1eUQ2NFVFZ2xJVFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpZVlRVWmRRVDFDZHg0Rm5sSnNpbWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWQ4MzJiZWItZTJlNi00MjQ0LTg4ZWMtNWM5YTE2MzEzY2YxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMTUsXG4gICAgICAxNCxcbiAgICAgIDEwNSxcbiAgICAgIDksXG4gICAgICA2NSxcbiAgICAgIDE2MixcbiAgICAgIDI3LFxuICAgICAgMTY5LFxuICAgICAgNjgsXG4gICAgICA5NSxcbiAgICAgIDIwNyxcbiAgICAgIDIsXG4gICAgICAzOSxcbiAgICAgIDE0LFxuICAgICAgOTcsXG4gICAgICAzMCxcbiAgICAgIDE3NixcbiAgICAgIDI0NSxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMTQyLFxuICAgICAgNixcbiAgICAgIDE0MyxcbiAgICAgIDE0MSxcbiAgICAgIDEzNSxcbiAgICAgIDE0NSxcbiAgICAgIDkwLFxuICAgICAgMjIwLFxuICAgICAgMjQ0LFxuICAgICAgMjE5LFxuICAgICAgMjksXG4gICAgICA5NixcbiAgICAgIDIwMSxcbiAgICAgIDEzMyxcbiAgICAgIDEyMyxcbiAgICAgIDE1LFxuICAgICAgMjE4LFxuICAgICAgODMsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFY1UEZFVzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjA0MzU4MTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0OTAxMzg4MDk1NzM5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSSttcHowUXY4Ykt0d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJObWNPc3JqWkdyL1h5VCt0Q0FyR2dDRzd2bW1vakFsaDNqaUp3VUNQZEM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZmeG93Q244d3VWN3kzeTREcXZKRU1ub014M3E3MXpQQWEvM2tkY2szWFYzVUVuQ0JFekZpLzhSSDdKbm1KRmRHWVlSR2FZdGYzRm13OFEvc3V5Z0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVMa1VVZEVlYnIraWNhcjBubUpvQ3c2Y2VBTzgrQ3FrK2d6M3Y2SGg0MUxtanZaS1lValVsNjlpdXZGUFBZd3hmSWNNWFJqdW5MTk5NUm5zUWNvQWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjA0MzU4MTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjcxNzc1NDBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9,  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
