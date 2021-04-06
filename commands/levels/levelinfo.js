const Discord = require('discord.js');
const userdata = require('../../userdata.json');
const canvacord = require("canvacord");
const fs = require("fs");
module.exports = {
    commands: ['info'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('noting here right now. lol')

    }
}
        