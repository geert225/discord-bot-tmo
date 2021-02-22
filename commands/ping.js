const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'Ping command',
    execute(message, args) {
        if (!message.guild) return;
        message.channel.send('pong!')
    },
   
};