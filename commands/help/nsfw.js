const Discord = require("discord.js");
const {prefix} = require('../../config.json');

module.exports = {
        name: "nsfw",
        usage: "nsfw",
		description: "show all command",
	    	run:  async (client, message,) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(` nsfw command :`)
			    	 .setColor("BLACK")	
			   
			            .addField(prefix+"erokemo",
					   "drop Erokemo image",
				      )
			            .addField(prefix+"kitsune",
					   "drop Kitsune porn image",
				      )
			            .addField(prefix+"lewd",
					   "drop lewd image",
				      )
			            .addField(prefix+"nekofeet",
					   "drop Neko feet image",
				      )
			            .addField(prefix+"nekopussy",
					   "drop Neko Pussy image",
				      )
			            .addField(prefix+"nekotits",
					   "drop Neko tits image",
				      )
			            .addField(prefix+"solo",
					   "drop Solo porn image",
				      )
			            .addField(prefix+"wallpaper",
					   "drop wallpaper  image",
				      )
			 	     .addField(prefix+"nsfw2",
					   "NEXT nsfw command >",
				      )
			 

					 .setTimestamp()
					 .setFooter("discord.gg/PGww3kE4eN")    
						message.channel.send(embed);
					}
				};
