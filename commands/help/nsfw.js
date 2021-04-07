const Discord = require("discord.js");



module.exports = {
        name: "nsfw",
        usage: "nsfw",
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
			         	.addField("//boobs",
					   "drop Boobs image",
				      )
			         	.addField("//hentaiass",
					   "drop Hentai ass image",
				      )
			            .addField("//hmidriff",
					   "drop Hentai Midriff image",
				      )
			            .addField("//hentaithigh",
					   "drop Hentai thigh image",
				      )
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

			    	 .setTimestamp()
			    	 .setFooter("work in progress")
                                 
			    		
						message.channel.send(embed);
					}
				};