const Discord = require("discord.js");

module.exports = {
	name: "image",
	description: "see help image command list",
	usage: "image",
		run: async (client, message, prefix) => {

		 const embed = new Discord.MessageEmbed()
		  	   .setColor("BLACK")
			   .setTitle("all command for image")
			   .setField("//neko", 
			     "drop neko SFW image ",
			   )
			   .setTimestamp()
			   .setFooter("discord.gg/PGww3kE4eN")
			     message.channel.send(embed)
	  }
	};

		
