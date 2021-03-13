const Discord = require('discord.js');
module.exports = {
    commands: ['clear', 'delete', 'deletebulk'],
    expectedArgs: '<amount>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
      const amount = +arguments[0]
      if (!amount) return message.channel.send(':exclamation:You haven\'t given an amount of messages which should be deleted!').then(msg => {msg.delete({ timeout: 6000})});
      if (amount > 100) return message.channel.send(':exclamation:You can`t delete more than 100 messages at once!').then(msg => {msg.delete({ timeout: 60000 })}); 
      if (amount < 1) return message.channel.send(':exclamation:You have to delete at least 1 message!').then(msg => {msg.delete({ timeout: 60000 })});
        message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages)})

      const embed = new Discord.MessageEmbed()
      .setTitle(`Deleted ${amount} messages!`)
      .setColor('RANDOM')
      .setFooter('©Geert225 2021-2021', '')
      .setTimestamp();
  
      message.channel.send(embed).then(msg => {msg.delete({ timeout: 6000})})
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }