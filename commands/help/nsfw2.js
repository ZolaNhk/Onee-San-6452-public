const Discord = require("discord.js");



module.exports = {
        name: "nsfw2",
        usage: "nsfw2",
		description: "show all command",
	    	run:  async (client, message, prefix, ) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(` nsfw command :`)
			    	 .setColor("BLACK")	
			    	 	
			    	 .addField("//hentai",
			    	  "drop Hentai image", 		
			    	  )
			         .addField("//fourk",
					   "drop 4k porn image",
				      )
			         	.addField("//ass",
					   "drop Ass image",
				      )
			         	.addField("//gonewild",
					   "drop Gonewild image",
				      )
			         	.addField("//pgif",
					   "drop Porn gif",
				      )
			         	.addField("//pussy",
					   "drop Pussy image",
				      )
			         	.addField("//thigh",
					   "drop Thigh image",
					  )

			         	.addField("//hentaiass",
					   "drop Hentai ass image",
				      )

					 .setTimestamp()
			    		 .setFooter("work in progress")
                                 
			    								
				        message.channel.send(embed);
					}
				};
				 
