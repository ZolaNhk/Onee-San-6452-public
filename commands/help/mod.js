const Discord = require("discord.js");

const {prefix} = require('../../config.json');
module.exports = {
    name: "mod",
    usage: "prefix mod",
    description: "see command for moderation",
     run: async (client, message) => {
       const embed = new Discord.MessageEmbed()
        .setTitle("moderation command :")
        .setColor("RED")
    
        .addField(prefix+"ban @user",
          "ban mentioned user",
         ) 
         .addField(prefix+"kick @user", 
          "kick mentioned user",
         )
         .addField(prefix+"nuke",
          "clone and delete the message channel")
         
         .setTimestamp()
         
            message.channel.send(embed);
            
  }
 }
