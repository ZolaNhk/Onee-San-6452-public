const Discord = require("discord.js");

module.exports = {
       name: "ban",
       usage: "ban user.mention",
          run: async (client, message, prefix) => {

             if (message.member.hasPermission("BAN_MEMBERS")) {
                if (message.mentions.members.first()) {
             
                  message.mentions.members.first().ban();
                        message.channel.send("user has been banned")
                 } else { 
                    message.channel.send("you can’t");
            
       }
      }
   }
};