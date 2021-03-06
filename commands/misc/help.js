const Discord = require('discord.js');
const fs = require('fs')
const { prefix } = require("../../config.json");
module.exports = {
    commands: ['help', 'commands', 'halp'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      const embed = new Discord.MessageEmbed()
      .setTitle('Nugget bot commands')
      .setDescription('All commands.')
      .setColor('RANDOM')
      .setFooter('©Geert225 2021-2021', '')
      .addFields({
        name: `${prefix}help (${prefix}commands, ${prefix}halp) `,
        value: 'Help menu for commands.',
      }, {
        name: `${prefix}online (${prefix}list)`,
        value: 'shows how many members are online in a guild.',
      }, {
        name: `${prefix}ping`,
        value: 'test pong command.',
      }, {
        name: `${prefix}avatart (${prefix}profielfoto, ${prefix}pf)`,
        value: 'laat je de avatar zien van een member.',
      }, {
        name: `${prefix}gm (${prefix}goodmorning, ${prefix}goedemorgen)`,
        value: 'gm command.',
      }, {
        name: `${prefix}clear (${prefix}delete, ${prefix}deletebulk)`,
        value: 'clear command.',
      }, {
        name: `${prefix}ban`,
        value: 'ban command.',
      }, {
        name: `${prefix}kick`,
        value: 'kick command.',
      }, {
        name: `${prefix}frituurpan`,
        value: 'kijk uit het vet is heet.',
      }, {
        name: `${prefix}badrock`,
        value: 'mmmmmmm?',
      } )
      .setTimestamp();
  
      message.channel.send(embed);
    },
    
  }