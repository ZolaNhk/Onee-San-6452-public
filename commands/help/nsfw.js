const Discord = require("discord.js");



module.exports = {
        name: "nsfw",
        usage: "nsfw",
		description: "show all command",
	    	run:  async (client, message, prefix, ) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(` nsfw command :`)
			    	 .setColor("BLACK")	
			   
			            .addField("//erokemo",
					   "drop Erokemo image",
				      )
			            .addField("//kitsune",
					   "drop Kitsune porn image",
				      )
			            .addField("//lewd",
					   "drop lewd image",
				      )
			            .addField("//nekofeet",
					   "drop Neko feet image",
				      )
			            .addField("//nekopussy",
					   "drop Neko Pussy image",
				      )
			            .addField("//nekotits",
					   "drop Neko tits image",
				      )
			            .addField("//solo",
					   "drop Solo porn image",
				      )
			            .addField("//wallpaper",
					   "drop wallpaper  image",
				      )
			 	     .addField("//nsfw2",
					   "NEXT nsfw command >",
			 

			    	 .setTimestamp()
			    	 .setFooter("work in progress")
                                 
			    		
						message.channel.send(embed);
					}
				};
