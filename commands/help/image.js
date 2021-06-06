const Discord = require("discord.js");
const {prefix} = require('../../config.json');
module.exports = {
        name: "image",
        usage: "image",
		description: "show all command",
	      run:  async (client, message,) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(`all command :`)
			    	 .setColor("BLUE")
			    	 
			    	 .addField(prefix+"neko",
			    	  "drop neko SFW image", 
			    	  )
			    	 
			    	  

			    	  

			    	 .setTimestamp()
			    	 
			
			    		
								message.channel.send(embed);
					}
				};
		
