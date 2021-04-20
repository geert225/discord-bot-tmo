const Discord = require('discord.js');
const MojangAPI = require('mojang-api');
module.exports = {
    commands: ['minecraft'],
    expectedArgs: '<user name>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const name = arguments[0]
        const date = new Date();
        date.setMonth(0); 

        if (!name) return message.channel.send('no user sepcified');

        MojangAPI.uuidAt(name, date, function(err, usermcid) {
        if (err)
          console.log(err);
        else
        if (usermcid === null)return message.channel.send('no user sepcified');
    })
        MojangAPI.nameHistory(usermcid.id, function(err, res) {
        if (err)
        console.log(err);
         else {
        if (res.length == 1) {
            console.log(res[0].name + " is very content with their existing username, because they didn't change it. Excellent job.")
        } else {
            var lastChange = res[res.length - 1];
            var at = new Date(lastChange.changedToAt);
            console.log(lastChange.name + " wasn't so content with their username. They last changed their username at " + at + ".");
        }
    }
}
)
}
}
