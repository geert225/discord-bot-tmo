const Discord = require('discord.js');
module.exports = {
    commands: ['addpartner', 'partner'],
    expectedArgs: '<partner name> <discord invite link>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 2,
    callback: (message, arguments, text) => {
      const partner = +arguments[0]
      const discordinvite = +arguments[1]
      if (!discordinvite) {discordinvite === ' ' };

      const embed = new Discord.MessageEmbed()
      .setTitle(`${partner}`)
      .setDescription(`${discordinvite}`)
      .setColor('RANDOM')
      .setFooter('©Geert225 2021-2021', '')
      .setTimestamp();
  
      message.guild.channels.cache.get('819623133983932467').send(embed)
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }