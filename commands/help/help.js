const Discord = require("discord.js");


const {prefix, OwnerId} = require('../../config.json')

module.exports = {
        name: "help",
        usage: "help",
		description: "show all command",
	      run:  async (client, message, ) => {
		
	      	if(message.author.id === OwnerId) {
	      		 const embed2 = new Discord.MessageEmbed()
			        .setTitle(`all command :`)
			    	 .setColor("ORANGE")
			    	 
			    	 .addField(prefix+"nsfw",
			    	  "see nsfw command", 
			    	  )
			    	 .addField(prefix+"image",
			    	  "see command for image",
			    	  )
			 	 .addField(prefix+"mod",
			          "see command for moderation",
			          )
			 	  .addField(prefix+"owner",
			 	     "see command Only for Owner of thee Bot",
	  			  )
			     
			    	  

			    	 .setTimestamp()
			    	
			            message.channel.send(embed2);
	       	} else {

		      
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(`all command :`)
			    	 .setColor("BLUE")
			    	 
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
			    	 
				 
			    		
								message.channel.send(embed);
							}
					}
				};

