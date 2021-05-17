const Discord = require("discord.js");
const { prefix, token } = require('/app/config.json');
//hi, if you host the bot on your pc change this : "/app/"  in , ex : /Onee-San-6452-public/config.json  , i put "/app/ because i host my bot on heroku and on heroku the main file name is /app/
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
		
