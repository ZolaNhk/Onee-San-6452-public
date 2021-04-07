const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
module.exports = {
 name: "lewd",
 description: "drop Lewd pictures",
 run: async (client, message, args) => {
	const image = await nsfw.lewd();
	const embed = new Discord.MessageEmbed()
   		 .setTitle(`Lewd Image`)
    		.setColor("GREEN")
    		.setImage(image);
			message.channel.send(embed);
  }
}