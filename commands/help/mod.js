const Discord = require("discord.js");

const {prefix} = require('../../config.json');
module.exports = {
    name: "mod",
    usage: "prefix mod",
    description: "see command for moderation",
     run: async (client, message) => {
       const embed = new Discord.MessageEmbed()
        .setTitle("moderation command :")
        .setColor("BLACK")
    
        .addField(prefix+"ban @user",
          "ban mentioned user",
         ) 
         .addField(prefix+"kick @user", 
          "kick mentioned user",
         )
         
         .setTimestamp()
         .setFooter("by I See You#0001")
         
            message.channel.send(embed);
            
  }
 }
