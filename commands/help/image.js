const discord = require("discord.js");

module.exports = {
	name: "image",
	description: "see help image command list",
	usage: "image"
}

run: async (message, client) => {

 const embed = new Discord.MessageEmbed()
   .setTitle("all command for image")
   .setField("//neko" , value: "drop neko SFW image ")
   .setTimestamp()
   .setFooter("discord.gg/PGww3kE4eN")
     message.channel.send(embed)
  }

		
