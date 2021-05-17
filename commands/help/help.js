const Discord = require("discord.js");


const { prefix, token } = require('/app/config.json');
//hi, if you host the bot on your pc change this : "/app/"  in , ex : /Onee-San-6452-public/config.json  , i put "/app/ because i host my bot on heroku and on heroku the main file name is /app/
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
