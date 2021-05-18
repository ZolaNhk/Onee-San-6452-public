const Discord = require("discord.js");


const {prefix} = require('../../config.json');
module.exports = {
        name: "help",
        usage: "help",
		description: "show all command",
	      run:  async (client, message, ) => {
		      
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(`all command :`)
			    	 .setColor("BLACK")
			    	 
			    	 .addField(prefix+"nsfw",
			    	  "see nsfw command", 
			    	  )
			    	 .addField(prefix+"image",
			    	  "see command for image",
			    	  )
			 	 .addField(prefix+"mod",
			          "see command for moderation",
	  			  )
			     
			    	  

			    	  

			    	 .setTimestamp()
			    	 .setFooter("work in progress")
				 
			    		
								message.channel.send(embed);
					}
				};
