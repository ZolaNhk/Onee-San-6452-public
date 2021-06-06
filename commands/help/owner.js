const Discord = require('discord.js')

const {prefix, OwnerId} = require("../../config.json")

const embed = new Discord.MessageEmbed()
      
      .setTitle("show Owner command :")
      .setColor("ORANGE")
      
      .addField(prefix+"status <write status>", 
                "change the status of bot",
      )

module.exports = {
  name: "owner",
  description: "show owner command",
  run: async (client, message,) => {
    
    if(message.author.id === OwnerId) {
      message.channel.send(embed);
    }
      
      
      }
  }
