const Discord = require('discord.js');
module.exports = {
    name: 'poll1',
    description: 'openpoll command',
    execute(message, args) {
        if (!message.guild) return;
        var currentdate = new Date();
        if (message.author.id != `491565735529807872`) return;
        const meldings = '731926024018985000'

    const pollembed = new Discord.MessageEmbed()
    .setColor('#3297a8')
    .setTitle(`Vergader lid poll.`)
    .setDescription('Wil je verkozen worden als vergaderlid klik hier onder dan op :white_check_mark: .')
    .setTimestamp()
    .setFooter('send by TMO bot', '')

        message.guild.channels.cache.get(meldings).send(pollembed).then(function (message) {
            message.react("✅")
            message.pin()
          }).catch(function() {
            //Something
           });
        message.author.send(`:white_check_mark: message has been send!`)
    },
   
};