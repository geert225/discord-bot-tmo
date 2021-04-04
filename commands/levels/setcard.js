const Discord = require('discord.js');
const userdata = require('../../userdata.json');
const fs = require("fs");
module.exports = {
    commands: ['setcard'],
    expectedArgs: '<type>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
        if(!userdata[message.author.id]){
            userdata[message.author.id] = {
              level: 0,
              xp: 0,
              card: 0
           }
           console.log(userdata[message.author.id])
           fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
             if(err) console.log(err)
           })}
        const type = arguments[0]
        
        if (type === 'default') {
            message.channel.send(":white_check_mark:set your card theme to: **default**")
            userdata[message.author.id].card = 0
            fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
             if(err) console.log(err)
           })
            }else if (type === 'comic') {
             message.channel.send(":white_check_mark:set your card theme to: **comic**")
             userdata[message.author.id].card = 1
             fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
              if(err) console.log(err)
            })
             }
             else if (type === 'sunshine') {
                 message.channel.send(":white_check_mark:set your card theme to: **sunshine**")
                 userdata[message.author.id].card = 2
                 fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
                  if(err) console.log(err)
                })
                 }else if (type === 'gold') {
                   
                   message.channel.send(":white_check_mark:set your card theme to: **gold**")
                   userdata[message.author.id].card = 3
                   fs.writeFile("./userdata.json", JSON.stringify(userdata), (err) => {
                    if(err) console.log(err)
                  })
                   }else message.channel.send(":exclamation:You need to specify a correct type! The type\'s that you can choose are: **default**, **comic**, **sunshine**, **gold**.").then(msg => {msg.delete({ timeout: 10000 })})

       
    },
    
  }
  