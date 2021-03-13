const Discord = require('discord.js');
module.exports = {
    commands: ['ban'],
    expectedArgs: '<user>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
      const user = message.mentions.users.first()
      if (!user) return message.channel.send(':exclamation:You haven\'t specifid a user!');
      const member = message.guild.members.resolve(user);

      if (member) {
          
        member
          .ban({
            reason: 'bot ban',
          })
          .then(() => {
             message.channel.send(`:white_check_mark:Successfully banned ${user.tag}`);
          })
          .catch(err => {
             message.channel.send(':x:I was unable to ban the member.').then(msg => {msg.delete({ timeout: 10000 })});
            console.error(err);
            return;
          });
      }else {
        message.channel.send(":exclamation:You didn't mention the user or that user isn't in this guild!").then(msg => {msg.delete({ timeout: 10000 })});return;
      }


      
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }