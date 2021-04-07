const Discord = require("discord.js");



module.exports = {
        name: "help",
        usage: "help",
		description: "show all command",
	      run:  async (client, message, prefix, ) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(`all command :`)
			    	 .setColor("BLACK")
			    	 
			    	 .addField("//nsfw",
			    	  "see nsfw command", 
			    	  

			    	  )

			    	 .setTimestamp()
			    	 .setFooter("work in progress")
				 
			    		
								message.channel.send(embed);
					}
				};