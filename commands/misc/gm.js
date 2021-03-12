const Discord = require('discord.js');
module.exports = {
    commands: ['gm', 'goodmorning', 'goedemorgen'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const gm = 'https://tenor.com/view/good-morning-love-hearts-milk-gif-15522905'
        message.channel.send(gm)
    },
    
  }