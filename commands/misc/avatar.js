const Discord = require('discord.js');
module.exports = {
    commands: ['avatar', 'profielfoto', 'pf'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const user = message.mentions.users.first() || message.author;
        const embed = new Discord.MessageEmbed()
        .setTitle(`${user.username} zijn avatar.`)
        .setColor("RANDOM")
        .setImage(user.displayAvatarURL())
      message.channel.send(embed);
    },
    
  }
  