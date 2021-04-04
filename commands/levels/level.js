const Discord = require('discord.js');
const userdata = require('../../userdata.json');
const canvacord = require("canvacord");
const fs = require("fs");
module.exports = {
    commands: ['level', 'l', 'rank'],
    expectedArgs: '<user>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        const user = message.mentions.users.first() || message.author;
        if(!userdata[user.id]){
            userdata[user.id] = {
              level: 0,
              xp: 0,
              card: 0
           }
           console.log(userdata[user.id])
           fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
             if(err) console.log(err)
           })}
        
        if (!user) message.channel.send('gebruiker niet gevonden')

        let nxtlvl = userdata[user.id].level * 800;
        const color = '370000'

        if(userdata[user.id].card === 0){
            const rank = new canvacord.Rank()
            .setAvatar(user.displayAvatarURL({ dynamic: false, format: 'png'}))
            .setCurrentXP(userdata[user.id].xp)
            .setRequiredXP(nxtlvl)
            .setProgressBar('#1dafa4', "COLOR")
            .setUsername(user.username)
            .setDiscriminator(user.discriminator)
            .setLevel(userdata[user.id].level)
          rank.build()
          .then(data =>{
              const att =new Discord.MessageAttachment(data, 'card.png')
              message.channel.send(att)
          })}
           else if(userdata[user.id].card === 1){
            const rank = new canvacord.Rank()
            .setAvatar(user.displayAvatarURL({ dynamic: false, format: 'png'}))
            .setCurrentXP(userdata[user.id].xp)
            .setRequiredXP(nxtlvl)
            .setProgressBar('#89AAFF', "COLOR")
            .setUsername(user.username)
            .setDiscriminator(user.discriminator)
            .setLevel(userdata[user.id].level)
            .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/790905868202934312/794179996205449246/test.png")
          rank.build()
          .then(data =>{
              const att =new Discord.MessageAttachment(data, 'card.png')
              message.channel.send(att)
          })}
           else if(userdata[user.id].card === 2){
            const rank = new canvacord.Rank()
            .setAvatar(user.displayAvatarURL({ dynamic: false, format: 'png'}))
            .setCurrentXP(userdata[user.id].xp)
            .setRequiredXP(nxtlvl)
            .setProgressBar('#FFFFFF', "COLOR")
            .setUsername(user.username)
            .setDiscriminator(user.discriminator)
            .setLevel(userdata[user.id].level)
            .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/790905868202934312/794181496520966185/test.png")
          rank.build()
          .then(data =>{
              const att =new Discord.MessageAttachment(data, 'card.png')
              message.channel.send(att)
          })
           
            
           }else if(userdata[user.id].card === 3){
            const bar1 =['#D4AF37','#FFD700','D7BE69','B79906']
            const rank = new canvacord.Rank()
            .setAvatar(user.displayAvatarURL({ dynamic: false, format: 'png'}))
            .setCurrentXP(userdata[user.id].xp)
            .setRequiredXP(nxtlvl)
            .setProgressBar(bar1, 'GRADIENT', true)
            .setUsername(user.username)
            .setDiscriminator(user.discriminator)
            .setLevel(userdata[user.id].level)
            .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/790905868202934312/794228046600077342/gold.png")
            .setOverlay('#FFFFFF', '0', false)
            
          rank.build()
          .then(data =>{
              const att =new Discord.MessageAttachment(data, 'card.png')
              message.channel.send(att)
          })
           
            
           }else message.channel.send('er is iets mis gegaan')
        
    },
    
  }
  