const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "pussy",
 description: "drop Pussy pictures",
 run: async (client, message, args) => {
	const image = await nsfw.pussy();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Pussy Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}