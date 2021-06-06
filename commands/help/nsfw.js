const Discord = require("discord.js");
const rm = require('discord.js-reaction-menu');
const { prefix } = require("../../config.json")

module.exports = {
	name: "nsfw",
	run: async(client, message ) => {
		const page1 = new Discord.MessageEmbed()
			   		 .setTitle(` nsfw command :`)
			    	 .setColor("PURPLE")	
			   
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
				     .setTimestamp()
					 .setFooter("page 1/2")

		const page2 = new Discord.MessageEmbed()
			   		 .setTitle(` nsfw command :`)
			    	 .setColor("PURPLE")	
			    	 	
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
			    	 .setFooter("page 2/2")
		new rm.menu({
		    channel: message.channel,
		    userID: message.author.id,
		    pages: [page1, page2],
		    time: 60000
		})


	}
}