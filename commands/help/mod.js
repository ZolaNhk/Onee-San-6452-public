const Discord = require("discord.js");

const {prefix} = require("/app/config.json")
//hi, if you use host the bot on your pc change "/app/ on the file name ex : /Onee-San-6452/config.json   , i put "/app/ because i use my bot on heroku and the files is /app/
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
