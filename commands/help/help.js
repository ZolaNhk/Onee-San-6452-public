const Discord = require("discord.js");



module.exports = {
        name: "help",
        usage: "help",
		description: "show all command",
	      run:  async (client, message, prefix, ) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(`all command :`)
			    	 .setColor("BLACK")
			    	 .setAuthor("I See You#1985")
			    	 .addField("nsfw",
			    	  "//hentai", 
			    	  "//ass",)
			    	 .setTimestamp()
			    	 .setFooter("work in progress")
			    		
								message.channel.send(embed);
					}
				};