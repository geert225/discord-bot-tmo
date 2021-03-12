const Discord = require('discord.js');
module.exports = {
    commands: ['online', 'list'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      
  
      message.channel.send(`**Online members:** ${message.guild.memberCount}`);
    },
    
  }