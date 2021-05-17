const Discord = require("discord.js");


const { prefix, token } = require('/app/config.json');
//hi, if you use host the bot on your pc change "/app/ on the file name ex : /Onee-San-6452/config.json   , i put "/app/ because i use my bot on heroku and the files is /app/
module.exports = {
        name: "nsfw2",
        usage: "nsfw2",
		description: "show all command",
	    	run:  async (client, message,) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(` nsfw command :`)
			    	 .setColor("BLACK")	
			    	 	
			    	 .addField(prefix+"hentai",
			    	  "drop Hentai image", 		
			    	  )
			         .addField(prefix+"fourk",
					   "drop 4k porn image",
				      )
			         	.addField(prefix+"ass",
					   "drop Ass image",
				      )
			         	.addField(prefix+"gonewild",
					   "drop Gonewild image",
				      )
			         	.addField(prefix+"pgif",
					   "drop Porn gif",
				      )
			         	.addField(prefix+"pussy",
					   "drop Pussy image",
				      )
			         	.addField(prefix+"thigh",
					   "drop Thigh image",
					  )

			         	.addField(prefix+"hentaiass",
					   "drop Hentai ass image",
				      )

					 .setTimestamp()
			    		 .setFooter("discord.gg/PGww3kE4eN")
                                 
			    								
				        message.channel.send(embed);
					}
				};
				 
