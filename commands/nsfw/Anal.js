const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "anal",
 description: "drop anal pictures",
 run: async (client, message, args) => {
	 if (message.channel.nsfw) {
            const image = await nsfw.anal();
		const embed = new Discord.MessageEmbed()
			 .setTitle(`Anal Image`)
			.setColor("GREEN")
			.setImage(image);
				message.channel.send(embed);
        } else {
            message.channel.send("only in NSFW channel");
        }
	
  }
}
