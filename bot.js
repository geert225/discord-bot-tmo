const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path')
const fs = require('fs')
const config = require("./config.json");
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
  client.user.setActivity(`Nugget bot. gebruik ${prefix}help voor help` , { type: 'PLAYING' });

  //command handeler
  const baseFile = 'command-base.js'
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



client.login(token);