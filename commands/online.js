const Discord = require('discord.js');
module.exports = {
    name: 'online',
    description: 'online command',
    execute(message, args) {
        if (!message.guild) return;
        message.channel.send(`**Online members:** ${message.guild.memberCount}`);
    },
   
};