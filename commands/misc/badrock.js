const Discord = require('discord.js');
module.exports = {
    commands: ['badrock'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        
        message.channel.send("https://cdn.discordapp.com/emojis/819635484690087957.png?v=1")
    },
    
  }