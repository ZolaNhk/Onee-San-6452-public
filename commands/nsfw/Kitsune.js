const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "kitsune",
 description: "drop kitsune pictures",
 run: async (client, message, args) => {
	const image = await nsfw.kitsune();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Kitsune Image`)
    		.setColor("RED")
    		.setImage(image);
			message.channel.send(embed);
  }
}