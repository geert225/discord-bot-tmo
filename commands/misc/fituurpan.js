const Discord = require('discord.js');
module.exports = {
    commands: ['frituurpan'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const frituurpan = new Discord.MessageAttachment('../discord-bot-tmo/assets/pic/frituurpan.jpg');
        message.channel.send(frituurpan)
    },
    
  }