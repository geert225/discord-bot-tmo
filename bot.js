const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path')
const fs = require('fs')
const config = require("./config.json");
const userdata = require('./userdata');
const { token } = require("./token.json");



//load json into variable
const prefix = config.prefix
const name = config.name
const activity = config.activity


//on ready
client.on('ready', () => {
  var currentdate = new Date();
  console.log(`client online!`);
  console.log(`Started at:    ${currentdate}`);
  console.log(`Logged in as:  ${client.user.tag}`);
  console.log(`Client ID:     ${client.user.id}`);
  client.user.setActivity(`Nugget bot | Gebruik ${prefix}help voor help` , { type: 'PLAYING' });

  //command handeler
  const baseFile = 'command-handler.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
});

//level system
client.on('message', async (message) => {
  if (message.author.bot) return;
if(!userdata[message.author.id]){
  userdata[message.author.id] = {
    level: 0,
    xp: 0,
    card: 0
 }
 console.log(userdata[message.author.id])
 fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
   if(err) console.log(err)
 })}

  if (message.author.bot) return;
  if (!message.guild) return;
 let xpadd = Math.floor(Math.random() * 7) + 12;
 
 let curxp = userdata[message.author.id].xp;
 let curlvl = userdata[message.author.id].level;
 let nxtlvl = userdata[message.author.id].level * 800;
 userdata[message.author.id].xp = curxp + xpadd;
 if(nxtlvl <= userdata[message.author.id].xp){
  userdata[message.author.id].level = curlvl +1;
  message.channel.send(`${message.author}, You have leveld up! New level:**${curlvl}**`)
 }

 fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
  if(err) console.log(err)}
  )
 
 });


client.login(token);