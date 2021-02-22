# discod bot by geert225
**a discord bot made for T.M.O. discord!**

# how to add commands

create a file that ends on .js

add this struct: 

**const Discord = require('discord.js');**
**module.exports = {**
    **name: 'COMMAND NAME',**
    **description: 'COMMAND DESCRIPTION',**
    **execute(message, args) {**
        **CODE HERE!!**
    **},**
**};**

