const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const config = require("./config.json");
const init = require("./token.json");



//load json into const
const token = init.token
const prefix = config.prefix
const name = config.name
const activity = config.activity

//command handeler
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.on('ready', () => {
  console.log('bot online!');
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`TMO Bot ${prefix}help`, { type: 'PLAYING' });
});

client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();
  
    if (!client.commands.has(command)) return;
    try {
      client.commands.get(command).execute(message, args);
    }catch (error) {
      console.error(error);
      message.reply(':exclamation:There was an issue executing that command!')
    }})

client.login(token);