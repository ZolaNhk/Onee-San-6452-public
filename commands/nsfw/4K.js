const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "fourk",
 description: "drop fourk pictures",
 run: async (client, message, args) => {
	if (message.channel.nsfw) {
            const image = await nsfw.fourk();
		const embed = new Discord.MessageEmbed()
			 .setTitle(`Fourk Image`)
			.setColor("GREEN")
			.setImage(image);
				message.channel.send(embed);
        } else {
            message.channel.send("only in NSFW channel");
        }
            
		
	 
  }
}

