const Discord = require("discord.js");
const { prefix, token } = require('/app/config.json');
//hi, if you use host the bot on your pc change "/app/ on the file name ex : /Onee-San-6452/config.json   , i put "/app/ because i use my bot on heroku and the files is /app/
module.exports = {
        name: "image",
        usage: "image",
		description: "show all command",
	      run:  async (client, message,) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(`all command :`)
			    	 .setColor("BLACK")
			    	 
			    	 .addField(prefix+"neko",
			    	  "drop neko SFW image", 
			    	  )
			    	 
			    	  

			    	  

			    	 .setTimestamp()
			    	 .setFooter("I See You#0001")
				 
			    		
								message.channel.send(embed);
					}
				};
		
