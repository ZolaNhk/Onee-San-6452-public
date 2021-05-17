const Discord = require("discord.js");

module.exports = {
        name: "image",
        usage: "image",
		description: "show all command",
	      run:  async (client, message, prefix, ) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(`all command :`)
			    	 .setColor("BLACK")
			    	 
			    	 .addField("//neko",
			    	  "drop neko SFW image", 
			    	  )
			    	 
			    	  

			    	  

			    	 .setTimestamp()
			    	 .setFooter("I See You#0001")
				 
			    		
								message.channel.send(embed);
					}
				};
		
