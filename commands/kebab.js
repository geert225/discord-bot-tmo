const Discord = require('discord.js');
module.exports = {
    name: 'kebab',
    description: 'kebab command',
    execute(message, args) {
        if (!message.guild) return;
        message.channel.send('**KEBAB TIME!!!!!!!!!!!**')
    },
   
};