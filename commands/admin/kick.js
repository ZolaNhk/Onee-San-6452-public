const Discord = require("discord.js");

module.exports = {
       name: "kick",
       usage: "kick user.mention",
          run: async (client, message, prefix) => {

             if (message.member.hasPermission("KICK_MEMBERS")) {
                if (message.mentions.members.first()) {
             
                  message.mentions.members.first().kick();
                        message.channel.send("user has been kicked")
                 } else { 
                    message.channel.send("you can’t");
            
       }
      }
   }
};