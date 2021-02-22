const Discord = require('discord.js');
module.exports = {
    name: 'hoelaatishet',
    description: 'howlate command',
    execute(message, args) {
        if (!message.guild) return;
        var currentdate = new Date();

        message.channel.send(`het is ` + currentdate.toLocaleTimeString() + ` dus tijd voor **KEBAB!!!!!!!!**`)
        message.channel.send(`https://cdn.discordapp.com/attachments/699698617602277488/802609525940289616/260px-Kebab.jpg`)
    },
   
};