const Discord = require("discord.js");

const { prefix, token } = require('/app/config.json');
//hi, if you host the bot on your pc change this : "/app/"  in , ex : /Onee-San-6452-public/config.json  , i put "/app/ because i host my bot on heroku and on heroku the main file name is /app/

module.exports = {
        name: "nsfw",
        usage: "nsfw",
		description: "show all command",
	    	run:  async (client, message,) => {
	 		 const embed = new Discord.MessageEmbed()
			   		 .setTitle(` nsfw command :`)
			    	 .setColor("BLACK")	
			   
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
			 	     .addField(prefix+"nsfw2",
					   "NEXT nsfw command >",
				      )
			 

					 .setTimestamp()
					 .setFooter("discord.gg/PGww3kE4eN")    
						message.channel.send(embed);
					}
				};
